<?php

namespace App\Http\Controllers\Verbs;

use DB;
use Log;
use App\Http\Controllers\Controller;
use App\Models\BatchUpload;
use App\Models\Batchable;
use App\Models\Language;
use App\Models\Source;
use App\Models\Verbs\Form;
use App\Models\Verbs\Mode;
use App\Models\Verbs\Order;
use App\Models\Verbs\Structure;
use App\Models\Verbs\VerbClass;
use App\Models\Words\Feature;
use Illuminate\Http\Request;

class BatchController extends Controller
{
    /**
     * Shows the upload form
     */
    public function show()
    {
        return view('verbs.forms.batch');
    }

    /**
     * Stores an uploaded file in the database
     */
    public function store(Request $request)
    {
        if (!$request->tsv) {
            flash('Please upload a file.');
            return back();
        }

        $rawData = $request->tsv->get();
        $data = $this->parseTSV($rawData);

        try {
            $data = $this->prepareData($data);
            $forms = $this->upload($data);
        } catch (TransformationException | UploadException $e) {
            Log::error("Batch error!\nMessage: {$e->getMessage()}\nData:\n{$rawData}");
            flash($e->getMessage(), 'is-danger');
            return back();
        }

        flash('Upload successful!', 'is-success');
        return view('verbs.forms.batch-success', ['forms' => $forms]);
    }

    /**
     * Uploads an array of data to the database
     *
     * @param array
     * @return array  The forms that were uploaded
     *
     * @throws UploadException
     */
    protected function upload(array $data)
    {
        $batch = BatchUpload::create([
            'user_id' => auth()->user()->id,
            'batch_type' => 'verbForms'
        ]);
        $forms = [];

        DB::beginTransaction();

        try {
            foreach ($data as $index => $row) {
                // Extract the data for building the structure
                $structureData = [
                    'subject_id' => $row[2],
                    'primaryObject_id' => $row[3],
                    'secondaryObject_id' => $row[4],
                    'class_id' => $row[6],
                    'order_id' => $row[7],
                    'mode_id' => $row[8],
                    'isNegative' => $row[9],
                    'isDiminutive' => $row[10],
                    'isAbsolute' => $row[11],
                    'head' => $row[12]
                ];

                // Ensure that the head value is in camelCase format
                $structureData['head'] = lcfirst(str_replace(ucwords($structureData['head'])));

                // Extract the data for building the form
                $formData = [
                    'name' => $row[0],
                    'phonemicForm' => $row[1],
                    'language_id' => $row[5],
                    'structure_type' => 'verbStructures'
                ];

                // Retrieve the structure model from the database and add its key to the
                // form
                $structure = Structure::firstOrCreate($structureData);
                $formData['structure_id'] = $structure->id;

                // Ensure the form doesn't already exist
                if (Form::where($formData)->first()) {
                    $oneBasedIndex = $index + 1;
                    throw new UploadException("The form as given on row $oneBasedIndex already exists.");
                }

                // If a source was provided, add it to the form data
                if ($row[13]) {
                    $formData['sources'] = [
                        [
                            'id' => $row[13],
                            'extraInfo' => $row[14],
                            'description' => $row[15]
                        ]
                    ];
                }

                // Create the form
                $forms[] = Form::create($formData);
            }

            // Connect the new forms to the batch
            Batchable::insert(array_map(function ($form) use ($batch) {
                return [
                    'batch_upload_id' => $batch->id,
                    'batchable_id' => $form->id
                ];
            }, $forms));
            $batch->success = true;
            $batch->save();

        } catch (\Exception $e) {
            // If anything goes wrong, rollback the database and throw an error
            DB::rollback();
            throw new UploadException("Error uploading; the database responded with '{$e->getMessage()}'");
        }

        DB::commit();
        return $forms;
    }

    /**
     * Parses a string from TSV format into an array
     *
     * @param string
     * @return array
     */
    protected function parseTSV(string $file) : array
    {
        $data = str_getcsv($file, "\n");
        foreach ($data as &$row) {
            $row = str_getcsv($row, "\t");
        }
        array_shift($data);
        return $data;
    }

    /**
     * Transforms a raw array of input data into a format that can be inserted into the
     * database
     *
     * @param array  The data to prepare
     * @return array
     *
     * @throws TransformationException
     */
    protected function prepareData(array $data)
    {
        $numColumns = count($data[0]);

        if ($numColumns !== 16) {
            throw new TransformationException("Expecting 16 columns in the first row; got $numColumns");
        }

        foreach ($this->getTransformers() as $transformer) {
            $transformer->apply($data);
        }

        return $data;
    }

    /**
     * Builds a list of transformers to apply to batch data
     *
     * @return array
     */
    protected function getTransformers() : array
    {
        return [
            new TextTransformer(1, false, false),
            new TextTransformer(2, true, false),
            new ModelTransformer(2, Feature::class),
            new ModelTransformer(3, Feature::class, true),
            new ModelTransformer(4, Feature::class, true),
            new ModelTransformer(5, Language::class),
            new ModelTransformer(6, VerbClass::class),
            new ModelTransformer(7, Order::class),
            new ModelTransformer(8, Mode::class),
            new BooleanTransformer(9),
            new BooleanTransformer(10),
            new OptionTransformer(11, [
                'absolute' => 1,
                'objective' => 0
            ], true),
            new OptionTransformer(12, [
                'subject' => 'subject',
                'primary object' => 'primary object',
                'secondary object' => 'secondary object'
            ], true),
            new ModelTransformer(13, Source::class, true, 'id'),
            new TextTransformer(14, true, true),
            new TextTransformer(15, true, true)
        ];
    }
}

/**
 * Base class for transformers. Defines the main apply() method and delegates to
 * subclasses for specifics.
 */
abstract class Transformer
{
    /**
     * Initializes the transformer
     *
     * @param int   The column this transformer applies to
     * @param bool  Whether this transformer accepts 'N/A'
     * @param bool  Whether this transformer allows values to be copied from previous
     *              rows
     */
    public function __construct(int $col, bool $nullable, bool $copyable)
    {
        $this->col = $col;
        $this->nullable = $nullable;
        $this->copyable = $copyable;
    }

    /**
     * Applies the transformation to a list of rows
     *
     * @param array  An array of rows
     */
    public function apply(array &$data)
    {
        $this->prepare($data);

        foreach ($data as $rowIndex => &$row) {
            $col = $this->col;
            $value = strtolower($row[$col]);

            try {
                if ($value === 'n/a' || ($value === '' && !$this->copyable)) {
                    if (!$this->nullable) {
                        throw new TransformationException("column cannot be N/A.");
                    }
                    $row[$this->col] = null;

                } elseif ($value === '') {
                    if ($rowIndex === 0) {
                        throw new TransformationException("values on the first row cannot be empty. (Use 'N/A' if not applicable.)");
                    }

                    if (!$this->copyable) {
                        throw new TransformationException("column cannot be filled in from a previous row. Please provide a value.");
                    }

                    $row[$this->col] = $data[$rowIndex-1][$col];

                } else {
                    $this->transform($row);
                }
            } catch (TransformationException $e) {
                $message = $e->getMessage();
                $oneBasedRowIndex = $rowIndex + 1;
                throw new TransformationException("Error on row $oneBasedRowIndex, column $col: $message");
            }
        }
    }

    /**
     * Overridable method that will be called before anything is done in apply()
     *
     * @param array  An array of rows
     */
    protected function prepare(array $data)
    {
        //
    }

    /**
     * Class-specific transformation of a single row
     *
     * @param array  An array of values
     */
    abstract protected function transform(array &$row);
}

class TextTransformer extends Transformer
{
    protected function transform(array &$data) {}
}

class ModelTransformer extends Transformer
{
    public function __construct(int $col, string $class, $nullable=false, string $field='name')
    {
        $this->class = $class;
        $this->field = $field;
        $this->models = null;

        parent::__construct($col, $nullable, true);
    }

    protected function prepare(array $data)
    {
        $values = array_pluck($data, $this->col);
        $this->models = $this->class::whereIn($this->field, $values)->get();
    }

    protected function transform(array &$row)
    {
        $value = $row[$this->col];
        $model = $this->models->firstWhere($this->field, $value);

        if (!$model) {
            $table = (new $this->class)->table;
            $readableTable = array_last(explode('_', $table));
            throw new TransformationException("The value '$value' is not contained in `$readableTable`.");
        }

        $row[$this->col] = $model->id;
    }
}

class BooleanTransformer extends Transformer
{
    public function __construct(int $col, $nullable=false)
    {
        parent::__construct($col, $nullable, true);
    }

    protected function transform(array &$row)
    {
        switch (strtolower($row[$this->col])) {
        case 'yes':
            $row[$this->col] = 1;
            break;
        case 'no':
            $row[$this->col] = 0;
            break;
        default:
            throw new TransformationException("'yes' or 'no' expected.");
        }
    }
}

class OptionTransformer extends Transformer
{
    public function __construct(int $col, array $options, $nullable=false)
    {
        $this->options = $options;

        parent::__construct($col, $nullable, true);
    }

    protected function transform(array &$row)
    {
        $value = strtolower($row[$this->col]);
        if (!in_array($value, $this->options)) {
            $options = implode(', ', $this->options);
            throw new TransformationException("'$value' not one of $options");
        }

        $row[$this->col] = $this->options[$value];
    }
}

class TransformationException extends \Exception
{
    //
}

class UploadException extends \Exception
{
    //
}

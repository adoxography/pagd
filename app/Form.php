<?php

namespace App;

use Validator;
use App\Morpheme;
use App\MorphemeLink;
use App\Search\ColHeader;
use App\Search\RowHeader;
use Illuminate\Support\Facades\Auth;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\ModelNotFoundException;

class Form extends Model
{
    public $table = 'Forms';
    public $errors;
    protected $fillable = [
        'surfaceForm',
        'phoneticForm',
        'morphemicForm',
        'language_id',
        'parent_id',
        'formType_id',
        'historicalNotes',
        'allomorphyNotes',
        'usageNotes',
        'comments'
    ];
    protected $rules = [
        'surfaceForm'   => ['required'],
        'phoneticForm'  => ['nullable'],
        'morphemicForm' => ['nullable'],
        'language_id'   => ['required','integer'],
        'parent_id'     => ['nullable'],
    ];

    public static function boot()
    {
        parent::boot();

        static::deleting(function ($model) {
            //Other forms might be using the morphemes, but unlink them from this one
            $model->morphemes()->detach();

            //Unlink all of this form's sources
            $model->sources()->detach();

            //Delete all of its examples, though
            foreach ($model->examples as $example) {
                $example->delete();
            }//foreach

            foreach($model->duplicates as $duplicate){
                $duplicate->duplicates()->detach($model->id);
            }//foreach
            $model->duplicates()->detach();
        });

        static::saved(function ($model) {

            if($model->morphemicForm)
            {
                $model->connectDuplicates($model);
            }
        });
    }
    
    public function connectDuplicates(Form $newForm)
    {
        $this->duplicates()->detach();

        //Get all of the duplicates that aren't the form itself
        $duplicates = Form::where('morphemicForm', $newForm->morphemicForm)
                          ->where('language_id', $newForm->language_id)
                          ->where('id', '<>', $newForm->id)
                          ->get();
        //Add a link from each duplicate to the new form, and from the new form to each duplicate
        foreach ($duplicates as $duplicate) {
            $duplicate->duplicates()->attach($newForm->id);
            $newForm->duplicates()->attach($duplicate->id);
        }
    }
    

    public function formType()
    {
        return $this->belongsTo(FormType::class, 'formType_id');
    }

    public function parent()
    {
        return $this->belongsTo(Form::class, 'parent_id');
    }

    public function children()
    {
        return $this->hasMany(Form::class, 'parent_id');
    }

    public function language()
    {
        return $this->belongsTo(Language::class);
    }

    public function morphemes()
    {
        return $this->belongsToMany(Morpheme::class, 'Forms_Morphemes')->orderBy('position')->withPivot('position');
    }

    public function morphemeList()
    {
        $output = [];
        $savedMorphemes = $this->morphemes;
        $curr = 0;
        $slots = explode('-', $this->morphemicForm);


        foreach($slots as $index => $slot) {
            if($curr < count($savedMorphemes) && $savedMorphemes[$curr]->pivot->position == $index + 1) {
                $output[] = $savedMorphemes[$curr++];
            }
            else {
                $output[] = ['name' => explode('.', $slot)[0]]; // Pull off the disambiguator

                if(Auth::user()) {
                    $search = Morpheme::whereIn('name', [
                                            $slot,
                                            '-'.$slot,
                                            '-'.$slot.'-',
                                            $slot.'-',
                                        ])
                                      ->where('language_id', $this->language_id)
                                      ->get();
                    if(count($search) > 0) {
                        $output[count($output) - 1] += ['exists' => true];
                    }
                    else {
                        $output[count($output) - 1] += ['exists' => false];
                    }
                }
            }
        }

        return $output;
    }

    public function duplicates()
    {
        return $this->belongsToMany(Form::class, 'Forms_Duplicates', 'form_id', 'duplicate_id');
    }

    public function examples()
    {
        return $this->hasMany(Example::class, 'form_id');
    }

    public function sources()
    {
        return $this->belongstoMany(Source::class, 'Sources_Forms')->withPivot('extraInfo');
    }

    public function getTableRow()
    {
        return new RowHeader(
            $this->formType->subject,
            $this->formType->primaryObject,
            $this->formType->secondaryObject,
            $this->formType->formClass
        );
    }

    public function getTableCol()
    {
        return new ColHeader(
            $this->language,
            $this->formType->order,
            $this->formType->mode,
            $this->formType->isNegative,
            $this->formType->isDiminutive,
            $this->formType->isAbsolute
        );
    }

    public function toHTML()
    {
        $numMorphemes = count($this->morphemes);
        $morphemeRow = "";
        $glossRow = "";
        $formRow     = "<tr><td colspan = '".max(1,$numMorphemes)."'><a href='/forms/" . $this->id . "'>" . $this->surfaceForm . "</a></td></tr>";

        if($numMorphemes > 0)
        {
            foreach ($this->morphemes as $morpheme) {
                $morphemeRow .= "<td><a href='/morphemes/" . $morpheme->id . "'>" . $morpheme->name . '</a></td>';
                $glossRow    .= "<td><a href='/glosses/" . $morpheme->gloss->id . "'>" . $morpheme->gloss->abv . '</a></td>';
            }
            $morphemeRow = "<tr>$morphemeRow</tr>";
            $glossRow    = "<tr>$glossRow</tr>";
        }

        return '<table>' . $formRow . $morphemeRow . $glossRow . '</table>';
    }

    public function hasNotes()
    {
        return $this->historicalNotes || $this->allomorphyNotes || $this->usageNotes || (Auth::user() && $this->comments);
    }



    public function connectMorphemes()
    {
        $segments = explode('-', $this->morphemicForm);
        $query;
        $chunk;
        $lookup;

        $this->morphemes()->detach();

        foreach ($segments as $index => $segment) {
            $chunk = explode('.', $segment);

            if(count($chunk) > 0) {
                $query = Morpheme::whereIn('name', [
                                        $chunk[0],
                                        '-'.$chunk[0],
                                        '-'.$chunk[0].'-',
                                        $chunk[0].'-',
                                    ])
                                  ->where('language_id', $this->language_id);

                if (count($chunk) > 1) { // Chunk has a disambiguator
                    $query->where('disambiguator', $chunk[1]);
                }

                $lookup = $query->get();

                if (count($lookup) == 1) {
                    $this->morphemes()->attach($lookup[0]->id, ['position' => $index + 1]);
                }
            }
        }
    }

    public function connectSources($sources)
    {
        $this->sources()->detach();

        foreach($sources as $source) {
            $this->sources()->attach($source['id'], ['extraInfo' => $source['extraInfo']]);
        }
    }
}

<?php

namespace App;

use App\Morpheme;
use App\MorphemeLink;
use App\Search\ColHeader;
use App\Search\RowHeader;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\ModelNotFoundException;
use Validator;

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
        'formType_id'
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

            //Delete all of its examples, though
            foreach ($model->examples as $example) {
                $example->delete();
            }//foreach

            foreach($model->duplicates as $duplicate){
                $duplicate->duplicates()->detach($model->id);
            }//foreach
            $model->duplicates()->detach();
        });

        static::saving(function ($model) {
            $model->removeNulls();
            $rc = $model->validate();
            if ($rc) {
                $missing = $model->morphemesMissing($model->morphemicForm, $model->language_id);
                if (count($missing) > 0) {
                    $rc = false;
                    $model->errors = ['missing' => $missing];
                }
            }
            return $rc;
        });

        static::saved(function ($model) {
            if($model->morphemicForm)
            {
                $model->connectMorphemes($model);
                $model->connectDuplicates($model);
            }
        });
    }

    private function  hasV()
    {
        $found = false;
        $morphemes = explode('-', $this->morphemicForm);

        for($i = 0; $i < count($morphemes) && !$found; $i++)
        {
            $found = $morphemes[$i] === 'V';
        }

        return $found;
    }

    public function validate()
    {
        $rc = false;
        $validator = Validator::make($this->getAttributes(), $this->rules);
        if ($validator->fails()) {
            $this->errors = $validator->messages();
        }
        else if($this->morphemicForm && !$this->hasV())
        {
            $this->errors = ['No V'];
        }
        else
        {
            $rc = true;
        }
        return $rc;
    }

    public function removeNulls(){
        foreach($this->getAttributes() as $field => $value){
            if(!$value){
                $this->__unset($field);
            }//if
        }//foreach
    }
    
    private function morphemesMissing($morphemicForm, $language_id)
    {
        $missing = array();

        if($morphemicForm)
        {
            $morphemeNames = explode('-', $morphemicForm);

            foreach ($morphemeNames as $morphemeName) {
                if ($morphemeName !== '') {
                    try {
                        Morpheme::where('name', $morphemeName)
                                ->where('language_id', $language_id)
                                ->firstOrFail();
                    } catch (ModelNotFoundException $e) {
                        array_push($missing, $morphemeName);
                    }
                }
            }
        }

        return $missing;
    }

    private function connectMorphemes(Form $form)
    {
        $this->morphemes()->detach();

        $morphemeNames = explode('-', $form->morphemicForm);
        $position = 1;
        foreach ($morphemeNames as $morphemeName) {
            if ($morphemeName !== '') {
                $morpheme = Morpheme::where('name', $morphemeName)
                                    ->where('language_id', $form->language->id)
                                    ->firstOrFail();
                $form->morphemes()->attach($morpheme->id, ['position' => $position]);
                $position++;
            }//if
        }//foreach
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
        return $this->belongsToMany(Morpheme::class, 'Forms_Morphemes');
    }

    public function duplicates()
    {
        return $this->belongsToMany(Form::class, 'Forms_Duplicates', 'form_id', 'duplicate_id');
    }

    public function examples()
    {
        return $this->hasMany(Example::class, 'form_id');
    }

    public function getTableRow()
    {
        return new RowHeader(
            $this->formType->subject,
            $this->formType->primaryObject,
            $this->formType->secondaryObject,
            $this->formType->class
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
        $formRow     = "<tr><td colspan = '" . count($this->morphemes) . "'><a href='/forms/" . $this->id . "'>" . $this->surfaceForm . "</a><td></tr>";
        $morphemeRow = '<tr>';
        $glossRow    = '<tr>';
        foreach ($this->morphemes as $morpheme) {
            $morphemeRow .= "<td><a href='/morphemes/" . $morpheme->id . "'>" . $morpheme->name . '</a></td>';
            $glossRow    .= "<td><a href='/glosses/" . $morpheme->gloss->id . "'>" . $morpheme->gloss->abv . '</a></td>';
        }
        $morphemeRow .= '</tr>';
        $glossRow    .= '</tr>';
        return '<table>' . $formRow . $morphemeRow . $glossRow . '</table>';
    }
}

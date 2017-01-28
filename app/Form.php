<?php

namespace App;

use Validator;
use App\Morpheme;
use App\MorphemeLink;
use App\Events\FormSaved;
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

    protected $events = [
        'saved' => FormSaved::class
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

    public function connectSources($sources)
    {
        $this->sources()->detach();

        foreach($sources as $source) {
            $this->sources()->attach($source['id'], ['extraInfo' => $source['extraInfo']]);
        }
    }
}

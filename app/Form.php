<?php

namespace App;

use Validator;
use App\Morpheme;
use App\MorphemeLink;
use App\Search\ColHeader;
use App\Search\RowHeader;
use App\Events\Form\Saved;
use App\Events\Form\Saving;
use App\Events\Form\Created;
use App\Events\Form\Deleted;
use App\Events\Form\Deleting;
use Illuminate\Support\Facades\Auth;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\ModelNotFoundException;

class Form extends Model
{
    use \Venturecraft\Revisionable\RevisionableTrait;

    protected $revisionEnabled = true;
    protected $revisionCreationsEnabled = true;

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
        'created'  => Created::class,
        'saving'   => Saving::class,
        'saved'    => Saved::class,
        'deleting' => Deleting::class,
        'deleted'  => Deleted::class
    ];

    public function getSurfaceFormAttribute($value)
    {
        $output = "";

        if($this->language->reconstructed) {
            $output = "*";
        }

        return $output.$value;
    }

    public function uniqueName()
    {

        return "{$this->surfaceForm} ({$this->formType->getArguments()})";
    }

    public function uniqueNameWithLanguage()
    {
        return "{$this->uniqueName()} ({$this->language->name})";
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
        $firstTime = true;
        $html = "<div class='box'><a href='/forms/{$this->id}'>{$this->surfaceForm}</a>";

        if($this->morphemicForm) {
            $html .= "<div class='columns'>";

            foreach($this->morphemeList() as $morpheme) {
                if($firstTime) {
                  $firstTime = false;
                }
                else {
                    $html .= "<div class='column is-narrow hyphen-column' style='padding-left: 0; padding-right: 0;'>-</div>";
                }

                $html .= "<div class='column is-narrow'>";

                if($morpheme instanceof Morpheme) {
                    if($morpheme->name != 'V') {
                        $html .= "<a href='/morphemes/{$morpheme->id}'>" . str_replace('-', '', $morpheme->name) . "</a>";
                    }
                    else {
                        $html .= $morpheme->name;
                    }

                    $html .= "<p><a href='/glosses/{$morpheme->gloss->id}' class='gloss'>{$morpheme->gloss->abv}</a></p>";
                }
                else {
                    $html .= $morpheme['name'];
                }

                $html .= "</div>";
            }

            $html .= "</div>";
        }

        return $html . "</div>";

    }

    public function connectSources($sources)
    {
        if($sources) {
            $this->sources()->detach();

            foreach($sources as $source) {
                $this->sources()->attach($source['id'], ['extraInfo' => $source['extraInfo']]);
            }
        }
    }
}

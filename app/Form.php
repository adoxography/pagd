<?php

namespace App;

use App\Morpheme;
use App\Search\ColHeader;
use App\Search\RowHeader;
use App\Events\Form\Saved;
use App\Events\Form\Saving;
use App\Events\Form\Created;
use App\Events\Form\Deleted;
use App\Events\Form\Deleting;
use Illuminate\Support\Facades\Auth;
use Illuminate\Database\Eloquent\Model;

class Form extends Model
{
    use \Venturecraft\Revisionable\RevisionableTrait;
    use \App\SourceableTrait;

    /*
    |--------------------------------------------------------------------------
    | Eloquent variables
    |--------------------------------------------------------------------------
    |
    | These are the basic variables required by Eloquent to manage this model.
    |
    */
    public $table = 'Forms';

    protected $fillable = [
        'allomorphyNotes',
        'comments',
        'formType_id',
        'historicalNotes',
        'language_id',
        'morphemicForm',
        'parent_id',
        'phoneticForm',
        'surfaceForm',
        'usageNotes'
    ];

    protected $events = [
        'created'  => Created::class,
        'saving'   => Saving::class,
        'saved'    => Saved::class,
        'deleting' => Deleting::class,
        'deleted'  => Deleted::class
    ];

    /*
    |--------------------------------------------------------------------------
    | Revision variables
    |--------------------------------------------------------------------------
    |
    | These are variable overrides used by the Revisionable trait.
    |
    */
    protected $revisionEnabled = true;
    protected $revisionCreationsEnabled = true;
    protected $revisionNullString = 'none';
    protected $revisionFormattedFieldNames = [
        'allomorphyNotes' => 'Allomorphy Notes',
        'comments'        => 'Comments',
        'formType_id'     => 'Syntax Details ID',
        'historicalNotes' => 'Historical Notes',
        'language_id'     => 'Language ID',
        'morphemicForm'   => 'Morphemes',
        'parent_id'       => 'Parent ID',
        'phoneticForm'    => 'Phonemic Representation',
        'surfaceForm'     => 'Surface Form',
        'usageNotes'      => 'Usage Notes'
    ];

    /*
    |--------------------------------------------------------------------------
    | Attribute modifiers
    |--------------------------------------------------------------------------
    */
    public function getSurfaceFormAttribute($value)
    {
        $output = "";

        if($this->language && $this->language->reconstructed) {
            $output = "*";
        }

        return $output.$value;
    }

    public function getNameAttribute()
    {
        return $this->surfaceForm;
    }

    /*
    |--------------------------------------------------------------------------
    | Methods
    |--------------------------------------------------------------------------
    */
    public function cognates()
    {
        return $this->firstAncestor()->load('allChildren');
    }

    protected function firstAncestor()
    {
        if($this->parent) {
            return $this->parent->firstAncestor();
        }
        else {
            return $this;
        }
    }

    public function uniqueName()
    {
        return "{$this->surfaceForm} ({$this->formType->getArguments()})";
    }

    public function uniqueNameWithLanguage()
    {
        return "{$this->uniqueName()} ({$this->language->name})";
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

    /*
    |--------------------------------------------------------------------------
    | Relations
    |--------------------------------------------------------------------------
    */
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

    public function allChildren()
    {
        return $this->children()->with('allchildren');
    }

    public function language()
    {
        return $this->belongsTo(Language::class);
    }

    public function morphemes()
    {
        return $this->belongsToMany(Morpheme::class, 'Forms_Morphemes')->orderBy('position')->withPivot('position');
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
        return $this->belongstoMany(Source::class, 'Sources_Forms')->withPivot('extraInfo')->orderBy('short');
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
}

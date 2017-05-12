<?php

namespace Algling\Morphemes\Models;

use App\Language;
use App\ChangeType;
use Laravel\Scout\Searchable;
use Algling\Words\Models\Form;
use Algling\Words\Models\Example;
use Algling\Morphemes\Models\Slot;
use Algling\Morphemes\Models\Gloss;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Builder;
use Algling\Morphemes\Models\InitialChange;
use Illuminate\Database\Eloquent\SoftDeletes;

class Morpheme extends Model
{
    use Searchable;
    use \Venturecraft\Revisionable\RevisionableTrait;
    use \App\SourceableTrait;
    use \App\ReconstructableTrait;
    use \App\HasChildrenTrait;
    use \App\BacksUpTrait;
    use \App\BookmarkableTrait;
    use SoftDeletes;
    use \App\HideableTrait;
    use \App\DisambiguatableTrait;

    /*
    |--------------------------------------------------------------------------
    | Eloquent variables
    |--------------------------------------------------------------------------
    |
    | These are the basic variables required by Eloquent to manage this model.
    |
    */
    public $table = 'Morph_Morphemes';
    protected $fillable = [
        'changeType_id',
        'name',
        'language_id',
        'parent_id',
        'gloss',
        'slot_id',
        'allomorphyNotes',
        'historicalNotes',
        'translation',
        'privateNotes'
    ];
    protected $appends = [
        'uniqueNameWithLanguage',
        'uniqueName',
        'html'
    ];
    protected $altName;

    public function toSearchableArray()
    {
        $array = $this->toArray();

        return array_only($array, ['id', 'name', 'allomorphyNotes', 'historicalNotes', 'translation', 'comments']);
    }

    protected $disambiguatableFields = ['name', 'language_id'];

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
    protected $revisionFormattedFields = [
        'reconstructed' => 'boolean:Attested|Reconstructed'
    ];
    protected $revisionFormattedFieldNames = [
        'allomorphyNotes' => 'Allomorphy Notes',
        'privateNotes'    => 'Comments',
        'historicalNotes' => 'Historical Notes',
        'language_id'     => 'Language ID',
        'gloss'           => 'Gloss',
        'name'            => 'Morpheme',
        'parent_id'       => 'Parent ID',
        'slot_id'         => 'Slot ID',
    ];
    protected $dontKeepRevisionOf = [
        'id',
        'created_at',
        'updated_at'
    ];

    /*
    |--------------------------------------------------------------------------
    | Attribute Modifiers
    |--------------------------------------------------------------------------
    */

    public function getNameAttribute($value)
    {
        $name = isset($this->altName) ? $this->altName : $value;
        return $this->modifyIfReconstructed($name);
    }

    public function getUniqueNameWithLanguageAttribute()
    {
        $language = $this->language;

        return "{$this->uniqueName} ({$language->name})";
    }

    public function getUniqueNameAttribute()
    {
        return "{$this->name} (".$this->renderGloss(false, false).')';
    }

    public function getDisplayAttribute()
    {
        return $this->uniqueNameWithLanguage;
    }

    public function getHtmlAttribute()
    {
        return $this->renderHTML();
    }

    /*
    |--------------------------------------------------------------------------
    | Methods
    |--------------------------------------------------------------------------
    */

    public function uniqueName()
    {
        return $this->uniqueName;
    }

    public function uniqueNameWithLanguage()
    {
        return $this->uniqueNameWithLanguage;
    }
    
    public function isVStem()
    {
        return preg_match('/\*?V/', $this->name);
    }

    public function initialChange($code)
    {
        $this->altName = $this->determineAltName($code);
    }

    protected function determineAltName($code)
    {
        $output;
        $query = InitialChange::where('morpheme_id', $this->id);

        $pieces = explode('.', $code);
        if(count($pieces) > 1) {
            $query->where('disambiguator', $pieces[1]);
        }
        $results = $query->get();

        if(count($results) == 1) {
            $output = $results[0]->change;
        } else {
            $output = "IC.{$this->name}";
        }

        return $output;
    }

    public function initialChanged()
    {
        return isset($this->altName);
    }

    public function allWords()
    {
        $output = null;
        $forms = $this->forms;
        $examples = $this->examples;

        if(count($forms) > 0) {
            $output = $forms->merge($examples);
        } else {
            $output = $examples;
        }

        return $output;
    }

    /*
    |--------------------------------------------------------------------------
    | Relations
    |--------------------------------------------------------------------------
    */
    public function language()
    {
        return $this->belongsTo(Language::class);
    }

    public function forms()
    {
        return $this->morphedByMany(Form::class, 'morphemeable', 'Morph_Morphemeables')->distinct();
    }

    public function nominalForms()
    {
    }

    public function examples()
    {
        return $this->morphedByMany(Example::class, 'morphemeable', 'Morph_Morphemeables')->distinct();
    }
    
    public function glosses()
    {
        return $this->belongsToMany(Gloss::class, 'Morph_Glosses_Morphemes', 'morpheme_id', 'gloss_id');
    }

    public function changeType()
    {
        return $this->belongsTo(ChangeType::class, 'changeType_id');
    }
    
    public function slot()
    {
        return $this->belongsTo(Slot::class, 'slot_id');
    }

    public function initialChanges()
    {
        return $this->hasMany(InitialChange::class);
    }

    public function renderHTML()
    {
        return "<a href='/morphemes/{$this->id}'>{$this->name}</a> (".$this->renderGloss(true, false).')';
    }

    public function renderInNotes()
    {
        $gloss = isset($this->translation) ? "'{$this->translation}'" : '('.$this->renderGloss(false).')';
        return $this->renderHTML()." $gloss";
    }

    public function renderGloss($colour = true, $showAlert = true)
    {
        $output = '';
        $glosses = explode('.', $this->gloss);
        $currGloss;
        $colourHTML = '';

        if($colour) {
            $colourHTML = 'style="color:inherit;" ';
        }

        foreach($glosses as $glossText) {
            if(strlen($output) > 0) {
                $output .= '.';
            }

            if(strlen($glossText) > 0) {
                if($glossText{0} == '"') {
                    $currGloss = str_replace('"', '', $glossText);
                    $currGloss = str_replace(' ', '.', $currGloss);

                    $output .= $currGloss;
                } else {
                    $lookup = $this->glosses->where('abv', $glossText);

                    if(count($lookup) > 0) {
                        $currGloss = "<span class='gloss'><a href='/glosses/" . $lookup->first()->id . "' $colourHTML>" . $lookup->first()->abv . "</a></span>";
                    } elseif($showAlert) {
                        $currGloss = "<span class='gloss'>$glossText</span><alg-morpheme-alert title='Gloss missing'><a href='/glosses/create?abv=$glossText'>Add <span class='gloss'>$glossText</span></a></alg-morpheme-alert>";
                    } else {
                        $currGloss = "<span class='gloss'>$glossText</span>";
                    }

                    $output .= $currGloss;
                }
            }
        }

        return $output;
    }

    public function renderGlossWithDescription()
    {
        $output = $this->renderGloss(false);
        $description = '';

        foreach($this->glosses as $gloss) {
            $description .= $gloss->name . ' ';
        }

        if(strlen($description) > 0) {
            $description = ' ('.trim($description).')';
        }

        return $output.$description;
    }

    public function connectGlosses()
    {
        $this->glosses()->detach();

        $glosses = explode('.', $this->gloss);

        foreach($glosses as $glossAbv) {
            $gloss = Gloss::where('abv', $glossAbv)->first();

            if($gloss) {
                $this->glosses()->attach($gloss);
                if($this->name == 'morph') {
                    dd($this->gloss);
                }
            }
        }
    }
}

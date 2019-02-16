<?php

namespace App\Models\Morphology;

use App\Interfaces\PhonemeableInterface;
use App\Models\ChangeType;
use App\Models\Language;
use App\Models\Model;
use App\Models\Morphology\Gloss;
use App\Models\Morphology\GlossLine;
use App\Models\Morphology\InitialChange;
use App\Models\Morphology\Slot;
use App\Models\Nominals\Form as NominalForm;
use App\Models\Verbs\Form as VerbForm;
use App\Models\Words\Example;
use App\Models\Words\Form;
use App\Traits\BacksUp;
use App\Traits\Bookmarkable;
use App\Traits\Disambiguatable;
use App\Traits\HasChildren;
use App\Traits\Reconstructable;
use App\Traits\Sourceable;
use App\Traits\Phonology\Phonemeable;
use App\Presenters\MorphemePresenter;
use Laravel\Scout\Searchable;
use Venturecraft\Revisionable\RevisionableTrait;

class Morpheme extends Model implements PhonemeableInterface
{
    use Searchable, RevisionableTrait, Sourceable, Reconstructable, HasChildren, BacksUp,
        Bookmarkable, Disambiguatable, Phonemeable;

    /*
    |--------------------------------------------------------------------------
    | Eloquent variables
    |--------------------------------------------------------------------------
    |
    | These are the basic variables required by Eloquent to manage this model.
    |
    */
    public $table = 'morph_morphemes';
    protected $fillable = [
        'change_type_id',
        'name',
        'language_id',
        'parent_id',
        'gloss',
        'slot_id',
        'allomorphy_notes',
        'historical_notes',
        'usage_notes',
        'private_notes',
        'newSources'
    ];
    protected $appends = [
        'uniqueName',
        'html',
        'colour'
    ];
    protected $altName;

    public function toSearchableArray()
    {
        $array = $this->toArray();

        return array_only($array, ['id', 'name', 'allomorphy_notes', 'historical_notes', 'usage_notes', 'comments']);
    }

    protected $disambiguatableFields = ['name', 'language_id'];

    protected $verbFormRepository = null;
    protected $nominalFormRepository = null;

    public $presenter = MorphemePresenter::class;

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
        'allomorphy_notes' => 'allomorphy notes',
        'private_notes'    => 'comments',
        'historical_notes' => 'historical notes',
        'usage_notes'      => 'usage notes',
        'name'            => 'Morpheme',
        'change_type_id'   => 'change type',
        'created_at'      => '[created]'
    ];
    protected $dontKeepRevisionOf = [
        'id',
        'created_at',
        'updated_at'
    ];

    public function identifiableName()
    {
        return $this->present('link');
    }

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

    public function getGlossAttribute($value)
    {
        return new GlossLine($value ?? '', $this->glosses);
    }

    public function getPhonemicFormAttribute()
    {
        return $this->name;
    }

    public function getUniqueNameAttribute()
    {
        return "{$this->name} (<span class=\"gloss\">".$this->gloss.'</span>)';
    }

    public function getDisplayAttribute()
    {
        return $this->present('unique')->then('language');
    }

    public function getHtmlAttribute()
    {
        return $this->present()->as('unique', 'link')->__toString();
    }

    public function getColourAttribute()
    {
        $colour = '';

        if ($this->slot) {
            $colour = $this->slot->colour;
        }

        return $colour;
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

    public function isVStem()
    {
        return preg_match('/\*?V/', $this->name);
    }

    public function isStem()
    {
        return preg_match('/\*?[VN]/', $this->name);
    }

    public function initialChange($code)
    {
        $this->altName = $this->determineAltName($code);
    }

    protected function determineAltName($code)
    {
        $query = InitialChange::where('morpheme_id', $this->id);

        $pieces = explode('.', $code);
        if (count($pieces) > 1) {
            $query->where('disambiguator', $pieces[1]);
        }
        $results = $query->get();

        if (count($results) == 1) {
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

        if (count($forms) > 0) {
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
        return $this->morphedByMany(Form::class, 'morphemeable', 'morph_morphemeables')->distinct();
    }

    public function getVerbFormsAttribute()
    {
        if ($this->verbFormRepository === null) {
            $this->verbFormRepository = $this->verbForms()->get();
        }

        return $this->verbFormRepository;
    }

    public function loadVerbForms($with = [])
    {
        $this->verbFormRepository = $this->verbForms($with)->get();
    }

    public function loadNominalForms($with = [])
    {
        $this->nominalFormRepository = $this->nominalForms($with)->get();
    }

    public function getNominalFormsAttribute()
    {
        if ($this->nominalFormRepository === null) {
            $this->nominalFormRepository = $this->nominalForms()->get();
        }

        return $this->nominalFormRepository;
    }

    public function verbForms($with = [])
    {
        $query = VerbForm::select('word_forms.*')
            ->join('morph_morphemeables', function ($join) {
                $join->on('word_forms.id', '=', 'morphemeable_id')
                    ->where('morphemeable_type', 'forms');
            })->where('morpheme_id', $this->id);

        foreach ($with as $eagerLoad) {
            $query->with($eagerLoad);
        }

        return $query;
    }

    public function nominalForms($with = [])
    {
        $query = NominalForm::select('word_forms.*')
            ->join('morph_morphemeables', function ($join) {
                $join->on('word_forms.id', '=', 'morphemeable_id')
                    ->where('morphemeable_type', 'forms');
            })->where('morpheme_id', $this->id);

        foreach ($with as $eagerLoad) {
            $query->with($eagerLoad);
        }

        return $query;
    }

    public function examples()
    {
        return $this->morphedByMany(Example::class, 'morphemeable', 'morph_morphemeables')->distinct();
    }

    public function verbExamples()
    {
        return $this->examples()->ofType('verbStructures');
    }

    public function nominalExamples()
    {
        return $this->examples()->ofType('nominalStructures');
    }

    public function glosses()
    {
        return $this->belongsToMany(Gloss::class, 'morph_glosses_morphemes', 'morpheme_id', 'gloss_id');
    }

    public function changeType()
    {
        return $this->belongsTo(ChangeType::class, 'change_type_id');
    }

    public function slot()
    {
        return $this->belongsTo(Slot::class, 'slot_id');
    }

    public function initialChanges()
    {
        return $this->hasMany(InitialChange::class);
    }

    public function renderGloss($colour = true, $showAlert = true)
    {
        $output = '';
        $glosses = explode('.', $this->gloss);
        $colourHTML = '';

        if ($colour) {
            $colourHTML = 'style="color:inherit;" ';
        }

        foreach ($glosses as $glossText) {
            if (strlen($output) > 0) {
                $output .= '.';
            }

            if (strlen($glossText) > 0) {
                if ($glossText{0} == '"') {
                    $currGloss = str_replace('"', '', $glossText);
                    $currGloss = str_replace(' ', '.', $currGloss);

                    $output .= $currGloss;
                } else {
                    $lookup = $this->glosses->where('abv', $glossText);

                    if (count($lookup) > 0) {
                        $currGloss = "<span class='gloss'><a href='/glosses/" . $lookup->first()->id . "' $colourHTML>" . $lookup->first()->abv . "</a></span>";
                    } elseif ($showAlert) {
                        $currGloss = "<span class='gloss'>$glossText</span>" . popupAlert('Gloss missing', "<a href='/glosses/create?abv=$glossText'>Add <span class='gloss'>$glossText</span></a>");
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

        foreach ($this->glosses as $gloss) {
            $description .= $gloss->name . ' ';
        }

        if (strlen($description) > 0) {
            $description = ' ('.trim($description).')';
        }

        return $output.$description;
    }

    public function connectGlosses()
    {
        $this->glosses()->detach();

        $glosses = explode('.', $this->gloss);

        foreach ($glosses as $glossAbv) {
            $gloss = Gloss::where('abv', $glossAbv)->first();

            if ($gloss) {
                $this->glosses()->attach($gloss);
            }
        }
    }

    public function getGlossArray()
    {
        $glosses = explode('.', $this->gloss);
        $array = [];

        foreach ($glosses as $gloss) {
            $array[] = ['name' => $gloss, 'id' => 0];
        }

        return $array;
    }

    public function getMorphType()
    {
        return $this->morphCode ? $this->morphCode : $this->getMorphClass();
    }
}

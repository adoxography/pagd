<?php

namespace App\Models\Morphology;

use Algling\Nominals\Models\Form as NominalForm;
use Algling\Verbals\Models\Form as VerbForm;
use Algling\Words\Models\Example;
use Algling\Words\Models\Form;
use App\BacksUpTrait;
use App\BookmarkableTrait;
use App\ChangeType;
use App\DisambiguatableTrait;
use App\HasChildrenTrait;
use App\HideableTrait;
use App\Language;
use App\Presenters\MorphemePresenter;
use App\ReconstructableTrait;
use App\SourceableTrait;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;
use Laravel\Scout\Searchable;
use Venturecraft\Revisionable\RevisionableTrait;

class Morpheme extends Model
{
    use Searchable, RevisionableTrait, SourceableTrait, ReconstructableTrait, HasChildrenTrait, BacksUpTrait,
        BookmarkableTrait, SoftDeletes, HideableTrait, DisambiguatableTrait;

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
        'usageNotes',
        'translation',
        'privateNotes',
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

        return array_only($array, ['id', 'name', 'allomorphyNotes', 'historicalNotes', 'usageNotes', 'translation', 'comments']);
    }

    protected $disambiguatableFields = ['name', 'language_id'];

    protected $verbFormRepository = null;
    protected $nominalFormRepository = null;

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
        'allomorphyNotes' => 'allomorphy notes',
        'privateNotes'    => 'comments',
        'historicalNotes' => 'historical notes',
        'usageNotes'      => 'usage notes',
        'name'            => 'Morpheme',
        'changeType_id'   => 'change type',
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

    public function getUniqueNameAttribute()
    {
        return "{$this->name} (".$this->renderGloss(false, false).')';
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
        return $this->morphedByMany(Form::class, 'morphemeable', 'Morph_Morphemeables')->distinct();
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
        $query = VerbForm::select('Word_Forms.*')
            ->join('Morph_Morphemeables', function ($join) {
                $join->on('Word_Forms.id', '=', 'morphemeable_id')
                    ->where('morphemeable_type', 'forms');
            })->where('morpheme_id', $this->id);

        foreach ($with as $eagerLoad) {
            $query->with($eagerLoad);
        }

        return $query;
    }

    public function nominalForms($with = [])
    {
        $query = NominalForm::select('Word_Forms.*')
            ->join('Morph_Morphemeables', function ($join) {
                $join->on('Word_Forms.id', '=', 'morphemeable_id')
                    ->where('morphemeable_type', 'forms');
            })->where('morpheme_id', $this->id);

        foreach ($with as $eagerLoad) {
            $query->with($eagerLoad);
        }

        return $query;
    }

    public function examples()
    {
        return $this->morphedByMany(Example::class, 'morphemeable', 'Morph_Morphemeables')->distinct();
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

    public function renderGloss($colour = true, $showAlert = true)
    {
        $output = '';
        $glosses = explode('.', $this->gloss);
        $colourHTML = '';

        if ($colour) {
            $colourHTML = 'style="colour:inherit;" ';
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

    public function present(string $method = 'name')
    {
        return new MorphemePresenter($this, $method);
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
}

<?php
namespace App;

use Algling\Nominals\Traits\HasNominalsTrait;
use App\Models\Phonology\Inventory;
use App\Models\Phonology\Phoneme;
use Algling\SS\Models\Datapoint;
use Algling\SS\Models\Variable;
use Algling\Verbals\Traits\HasVerbsTrait;
use App\Models\Morphology\Morpheme;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;
use Laravel\Scout\Searchable;
use Venturecraft\Revisionable\RevisionableTrait;

/**
 * A natural language
 */
class Language extends Model
{
    use SoftDeletes, Searchable, RevisionableTrait, HasChildrenTrait, BacksUpTrait, BookmarkableTrait, HideableTrait,
        LocatableTrait;
    use HasVerbsTrait, HasNominalsTrait {
        HasVerbsTrait::forms    insteadof HasNominalsTrait;
        HasVerbsTrait::examples insteadof HasNominalsTrait;
        HasVerbsTrait::gaps     insteadof HasNominalsTrait;
    }

    /*
    |--------------------------------------------------------------------------
    | Eloquent variables
    |--------------------------------------------------------------------------
    |
    | These are the basic variables required by Eloquent to manage this model.
    |
    */
    public $table = 'Languages';
    protected $fillable = [
        'alternateNames',
        'name',
        'group_id',
        'parent_id',
        'iso',
        'algoCode',
        'notes',
        'reconstructed',
        'location'
    ];
    public $assets = [
        'forms',
        'examples',
        'morphemes',
        'phonemes',
        'nominalParadigms'
    ];

    public $inventory;

    public function toSearchableArray()
    {
        $array = $this->toArray();

        return array_only($array, ['id', 'alternateNames', 'name', 'iso', 'algoCode', 'notes']);
    }

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
        'algoCode'       => 'algonquianist code',
        'alternateNames' => 'alternate names',
        'iso'            => 'ISO code'
    ];
    protected $dontKeepRevisionOf = [
        'id',
        'position',
        'created_at',
        'updated_at'
    ];

    public function identifiableName()
    {
        return $this->name;
    }

    public function getDisplayAttribute()
    {
        return $this->name;
    }

    /*
    |--------------------------------------------------------------------------
    | Relations
    |--------------------------------------------------------------------------
    */
    public function group()
    {
        return $this->belongsTo(Group::class);
    }

    public function morphemes()
    {
        return $this->hasMany(Morpheme::class);
    }

    public function rules()
    {
        return $this->hasMany(Rule::class);
    }

    public function datapoints()
    {
        return $this->hasMany(Datapoint::class)
            ->with('value')
            ->with('variable');
    }

    public function phonemes()
    {
        return $this->hasMany(Phoneme::class);
    }

    /**
     * Loads all of the unique sources found in all of this languages's forms, morphemes, and examples
     *
     * @return \Illuminate\Database\Eloquent\Relations\BelongsToMany
     */
    public function sources()
    {
        $morphemeSources = $this->loadSources('morphemes');
        $formSources     = $this->loadSources('forms');
        $exampleSources  = $this->loadSources('examples');
        $output = null;

        $sources = $morphemeSources;
        if ($formSources) {
            $sources = $sources->merge($formSources);
        }
        if ($exampleSources) {
            $sources = $sources->merge($exampleSources);
        }
        if ($sources) {
            $output = $sources->sortBy('short');
        }

        return $output;
    }

    /*
    |--------------------------------------------------------------------------
    | Methods
    |--------------------------------------------------------------------------
    */
    protected function loadSources($model)
    {
        $this->load(["$model.generalSources" => function ($query) use (&$sources) {
            $sources = $query->get()->unique();
        }]);

        return $sources;
    }

    protected function respondToHiding()
    {
        foreach ($this->assets as $asset) {
            if ($this->isHidden()) {
                $relation = $this->$asset();
                $relation->unsearchable();
            } else {
                foreach ($this->$asset as $item) {
                    if (!$item->isHidden()) {
                        $item->searchable();
                    }
                }
            }
        }
    }

    public function present(string $method = 'name')
    {
        return new LanguagePresenter($this, $method);
    }

    public function phonology($includeNull = false, $constraint = null)
    {
        if (!isset($this->inventory)) {
            return $this->loadPhonology($includeNull, $constraint);
        }

        return $this->inventory;
    }

    public function loadPhonology($includeNull = false, $constraint = null)
    {
        $this->inventory = new Inventory($this, $includeNull, $constraint);
        return $this->inventory;
    }

    public function hasVariable(Variable $variable)
    {
        return $this->getVariable($variable) != false;
    }

    public function getVariable(Variable $variable)
    {
        $lookup = $this->datapoints->filter(function ($datapoint) use ($variable) {
            return $datapoint->variable_id == $variable->id;
        });

        return $lookup->first();
    }

    public function getAliasesAttribute()
    {
        return $this->alternateNames;
    }

    public function getNullPhoneme()
    {
        return Phoneme::firstOrCreate([
            'language_id' => $this->id,
            'algoName' => '∅'
        ]);
    }
}

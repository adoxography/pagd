<?php
namespace App\Models;

use DB;
use App\Models\Location;
use App\Models\Rules\Rule;
use App\Models\Morphology\Morpheme;
use App\Models\Phonology\Inventory;
use App\Models\Phonology\Phoneme;
use App\Models\StructuralSurvey\Datapoint;
use App\Models\StructuralSurvey\Variable;
use App\Presenters\LanguagePresenter;
use App\Traits\BacksUp;
use App\Traits\Bookmarkable;
use App\Traits\HasChildren;
use App\Traits\Locatable;
use App\Traits\Nominals\HasNominals;
use App\Traits\Verbs\HasVerbs;
use Laravel\Scout\Searchable;
use Venturecraft\Revisionable\RevisionableTrait;

/**
 * A natural language
 */
class Language extends Model
{
    use Searchable, RevisionableTrait, HasChildren, BacksUp, Bookmarkable, Locatable;
    use HasVerbs, HasNominals {
        HasVerbs::forms    insteadof HasNominals;
        HasVerbs::examples insteadof HasNominals;
        HasVerbs::gaps     insteadof HasNominals;
    }

    /*
    |--------------------------------------------------------------------------
    | Eloquent variables
    |--------------------------------------------------------------------------
    |
    | These are the basic variables required by Eloquent to manage this model.
    |
    */
    protected $fillable = [
        'alternate_names',
        'name',
        'group_id',
        'parent_id',
        'iso',
        'algo_code',
        'notes',
        'reconstructed',
        'location_id'
    ];
    public $assets = [
        'forms',
        'examples',
        'morphemes',
        'phonemes',
        'nominalParadigms'
    ];

    protected static $template = [
        'id' => 0,
        'name' => '',
        'alternate_names' => '',
        'algo_code' => '',
        'iso' => '',
        'reconstructed' => 0,
        'notes' => '',
        'group' => Group::class,
        'parent' => Language::class,
        'location' => Location::class
    ];

    public $inventory;

    public function toSearchableArray()
    {
        $array = $this->toArray();

        return array_only($array, ['id', 'alternate_names', 'name', 'iso', 'algo_code', 'notes']);
    }

    public $presenter = LanguagePresenter::class;

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
        'algo_code'       => 'algonquianist code',
        'alternate_names' => 'alternate names',
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
        return $this->alternate_names;
    }

    public function getNullPhoneme()
    {
        return Phoneme::firstOrCreate([
            'language_id' => $this->id,
            'algo_name' => '∅'
        ]);
    }

    public function scopeWithActivity($query) {
        $query->select()
              ->addSelect(DB::raw("(
                  (select count(*) from `Word_Forms` where `Languages`.`id` = `Word_Forms`.`language_id` and `Word_Forms`.deleted_at is null) +
                  (select count(*) from `Word_Examples` where `Languages`.`id` = `Word_Examples`.`language_id` and `Word_Examples`.deleted_at is null) +
                  (select count(*) from `phon_phonemes` where `Languages`.`id` = `phon_phonemes`.`language_id` and `phon_phonemes`.deleted_at is null)
              ) as `activity`"));
        return $query;
    }

    public function getActivityAttribute($activity) {
        $activity = $activity ?: $this->forms()->count() + $this->examples()->count() + $this->phonemes()->count();

        return min(1.0, $activity / 500);
    }

    public static function fieldTemplate($root = true) {
        $template = collect(['fields' => [
            'id' => '0',
            'name' => '',
            'alternate_names' => '',
            'algo_code' => '',
            'iso' => '',
            'reconstructed' => '0',
            'notes' => '',
        ]]);

        if ($root) {
            $template['group'] = Group::fieldTemplate(false);
            $template['parent'] = Language::fieldTemplate(false);
            $template['location'] = Location::fieldTemplate(false);
        }

        return $template;
    }
}

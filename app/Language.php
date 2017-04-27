<?php

namespace App;

use Laravel\Scout\Searchable;
use Algling\Words\Models\Form;
use Algling\SS\Models\Datapoint;
use Algling\Words\Models\Example;
use Algling\Words\Models\EmptyForm;
use Algling\Verbals\Models\Structure;
use Algling\Morphemes\Models\Morpheme;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

/**
 * A natural language
 */
class Language extends Model
{
    use SoftDeletes;
    use Searchable;
    use \Venturecraft\Revisionable\RevisionableTrait;
    use \App\HasChildrenTrait;
    use \App\BacksUpTrait;
    use \App\BookmarkableTrait;
    use \App\HideableTrait;

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
        'reconstructed'
    ];
    protected $assets = [
        'forms',
        'examples',
        'morphemes'
    ];

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
        'algoCode'       => 'Algonquianist Code',
        'alternateNames' => 'Alternate Names',
        'iso'            => 'ISO Code',
        'name'           => 'Name',
        'notes'          => 'Notes',
        'parent_id'      => 'Parent ID',
        'reconstructed'  => 'Reconstructed'
    ];
    protected $dontKeepRevisionOf = [
        'id',
        'position',
        'created_at',
        'updated_at'
    ];

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

    public function forms()
    {
        return $this->hasMany(Form::class, 'language_id');
    }

    public function emptyForms()
    {
        return $this->hasMany(EmptyForm::class, 'language_id');
    }

    public function examples()
    {
        return $this->hasManyThrough(Example::class, Form::class);
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

    /**
     * Loads all of the unique sources found in all of this languages's forms, morphemes, and examples
     * 
     * @return Illuminate\Database\Eloquent\Relations\BelongsToMany
     */
    public function sources()
    {
        $morphemeSources = $this->loadSources('morphemes');
        $formSources     = $this->loadSources('forms');
        $exampleSources  = $this->loadSources('examples');
        $output = null;

        $sources = $morphemeSources;
        if($formSources) {
            $sources = $sources->merge($formSources);
        }
        if($exampleSources) {
            $sources = $sources->merge($exampleSources);
        }
        if($sources) {
            $output = $sources->sortBy('short');
        }

        return $output;
    }

    public function getParadigms()
    {
        $output = [];

        $paradigms = Structure::select('class_id', 'order_id', 'mode_id')
            ->join('Word_Forms as Forms', 'Forms.structure_id', 'Verb_Structures.id')
            ->where('Forms.language_id', $this->id)
            ->groupBy('class_id', 'order_id', 'mode_id')
            ->with(['formClass', 'order', 'mode'])
            ->orderBy('class_id')
            ->orderby('order_id')
            ->orderBy('mode_id')
            ->get();

        foreach($paradigms as $paradigm) {
            $output["{$paradigm->order->name} {$paradigm->mode->name}:"][] = [
                'order' => $paradigm->order,
                'mode'  => $paradigm->mode,
                'class' => $paradigm->formClass
            ];
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
        $this->load(["$model.generalSources" => function ($query) use ( &$sources ) {
            $sources = $query->get()->unique();
        }]);

        return $sources;
    }

    protected function respondToHiding()
    {
        foreach($this->assets as $asset) {
            if($this->isHidden()) {
                $relation = $this->$asset();
                $relation->unsearchable();
            } else {
                foreach($this->$asset as $item) {
                    if(!$item->isHidden()) {
                        $item->searchable();
                    }
                }
            }
        }
    }

    public function renderHTML()
    {
        return "<a href='/languages/{$this->id}'>{$this->name}</a>";
    }
}

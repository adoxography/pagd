<?php

namespace App;

use App\Events\Language\Saved;
use App\Events\Language\Created;
use App\Events\Language\Deleting;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

/**
 * A natural language
 */
class Language extends Model
{
    use \Venturecraft\Revisionable\RevisionableTrait;
    use \App\HasChildrenTrait;
    use \App\BacksUpTrait;

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
        'position'
    ];

    public static function boot() {
        parent::boot();

        static::created(function($model) {
            event(new Created($model));
        });

        static::deleting(function($model) {
            event(new Deleting($model));
        });
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
}

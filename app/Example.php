<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

/**
 * An example of a form
 */
class Example extends Model
{
    use \Venturecraft\Revisionable\RevisionableTrait;
    use \AlgoliaSearch\Laravel\AlgoliaEloquentTrait;
    use \App\SourceableTrait;
    use \App\HasMorphemesTrait;
    use \App\BacksUpTrait;
    use \App\ReconstructableTrait;
    use \App\BookmarkableTrait;
    use SoftDeletes;
    use \App\HideableTrait;

    protected $morphemeTable = 'Examples_Morphemes';

    /*
    |--------------------------------------------------------------------------
    | Eloquent variables
    |--------------------------------------------------------------------------
    |
    | These are the basic variables required by Eloquent to manage this model.
    |
    */
    public $table = 'Examples';
    protected $fillable = ['name','translation','form_id','comments','notes','morphemicForm'];

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
        'name'          => 'Example',
        'translation'   => 'Translation',
        'form_id'       => 'Form ID',
        'comments'      => 'Private Comments',
        'notes'         => 'Public Notes',
        'morphemicForm' => 'Morphemes',
    ];
    protected $dontKeepRevisionOf = [
        'id',
        'complete',
        'created_at',
        'updated_at'
    ];

    public static function boot() {
        parent::boot();
    }

    /*
    |--------------------------------------------------------------------------
    | Algolia
    |--------------------------------------------------------------------------
    */

    public static $perEnvironment = true;

    public function getAlgoliaRecord()
    {
        return array_merge($this->toArray(), [
            'display' => $this->uniqueNameWithLanguage
        ]);
    }

    /*
    |--------------------------------------------------------------------------
    | Attribute Getters
    |--------------------------------------------------------------------------
    */

    /**
     * Shortcut for getting the initial change status of the example
     * 
     * The initial change status is actually stored in the example's form
     * 
     * @return integer|null The initial change status
     */
    public function getInitialChangeAttribute()
    {
        return $this->form->initialChange;
    }

    public function getNameAttribute($value)
    {
        return $this->modifyIfReconstructed($value);
    }

    public function getUniqueNameAttribute()
    {
        return $this->name;
    }

    public function getUniqueNameWithLanguageAttribute()
    {
        return "{$this->uniqueName} ({$this->language->name})";
    }

    public function getLanguageAttribute()
    {
        if(isset($this->form)) {
            return $this->form->language;
        }
    }

    /*
    |--------------------------------------------------------------------------
    | Relations
    |--------------------------------------------------------------------------
    */
    /**
     * An example belongs to exactly one form
     * 
     * @return Illuminate\Database\Eloquent\Relations\BelongsTo
     */
    public function form()
    {
        return $this->belongsTo(Form::class, 'form_id');
    }

    /*
    |--------------------------------------------------------------------------
    | Instance Methods
    |--------------------------------------------------------------------------
    */

    /**
     * Fetches the name of this example that is unique within its language
     * 
     * Only returns the name right now, but will probably be altered in the future.
     * 
     * @return string
     * @deprecated
     */
    public function uniqueName()
    {
        return $this->uniqueName;
    }

    /**
     * Fetches the unique name along with the language
     * 
     * @return string
     * @see Example::uniqueName()
     */
    public function uniqueNameWithLanguage()
    {
        return "{$this->name} ({$this->language->name})";
    }
}

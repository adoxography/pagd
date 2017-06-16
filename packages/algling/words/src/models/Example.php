<?php

namespace Algling\Words\Models;

use App\HasChildrenTrait;
use Laravel\Scout\Searchable;
use Algling\Words\Models\Form;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

/**
 * An example of a form
 */
class Example extends Model
{
    use \Venturecraft\Revisionable\RevisionableTrait;
    use Searchable;
    use \App\SourceableTrait;
    use \Algling\Morphemes\Traits\HasMorphemesTrait;
    use \App\BacksUpTrait;
    use \App\ReconstructableTrait;
    use \App\BookmarkableTrait;
    use SoftDeletes;
    use \App\HideableTrait;
    use HasChildrenTrait;

    /*
    |--------------------------------------------------------------------------
    | Eloquent variables
    |--------------------------------------------------------------------------
    |
    | These are the basic variables required by Eloquent to manage this model.
    |
    */
    public $table = 'Word_Examples';
    protected $fillable = ['id', 'name','translation','form_id','publicNotes','privateNotes','morphemicForm', 'parent_id', 'phonemicForm'];
    protected $appends = ['html'];
    public $uri = '/examples';
    protected $morphCode = 'examples';

    public function toSearchableArray()
    {
        $array = $this->toArray();

        return array_only($array, ['id', 'name', 'translation', 'publicNotes', 'privateNotes']);
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
    protected $revisionFormattedFieldNames = [
        'name'          => 'example',
        'privateNotes'  => 'private comments',
        'publicNotes'   => 'public notes',
        'morphemicForm' => 'morphemes',
        'created_at'    => '[created]'
    ];
    protected $dontKeepRevisionOf = [
        'id',
        'complete',
        'created_at',
        'updated_at'
    ];

    public function identifiableName()
    {
        return $this->renderLink();
    }

    /*
    |--------------------------------------------------------------------------
    | Attribute Getters
    |--------------------------------------------------------------------------
    */
    public function getCommentsAttribute()
    {
        return $this->privateNotes;
    }

    public function getNotesAttribute()
    {
        return $this->publicNotes;
    }

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
        return "{$this->name} ({$this->form->formType->summary})";
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

    public function getHtmlAttribute()
    {
        return $this->renderHTML();
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

    public function renderHTML()
    {
        return "<a href='/examples/{$this->id}'>{$this->name}</a> (".$this->form->structure->renderSummary().")";
    }

    public function renderLink()
    {
        return "<a href='/examples/{$this->id}'>{$this->name}</a>";
    }

    public function renderInNotes()
    {
        return "<blockquote><a href='/examples/{$this->id}'>{$this->name}</a>".$this->printMorphemes()."'{$this->translation}'</blockquote>";
    }

    public function scopeOfType($query, string $type)
    {
        $query->whereHas('form', function($query) use ($type) {
            $query->where('structure_type', $type);
        });
    }
}

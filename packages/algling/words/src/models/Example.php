<?php

namespace Algling\Words\Models;

use Algling\Words\ExamplePresenter;
use App\BacksUpTrait;
use App\BookmarkableTrait;
use App\HasChildrenTrait;
use App\HideableTrait;
use App\ReconstructableTrait;
use App\SourceableTrait;
use App\Traits\HasMorphemesTrait;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;
use Laravel\Scout\Searchable;
use Venturecraft\Revisionable\RevisionableTrait;

/**
 * An example of a form
 */
class Example extends Model
{
    use RevisionableTrait, Searchable, SourceableTrait, HasMorphemesTrait, BacksUpTrait, ReconstructableTrait,
        BookmarkableTrait, SoftDeletes, HideableTrait, HasChildrenTrait;

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
        return $this->present('link');
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

    public function getLanguageAttribute()
    {
        return $this->form->language;
    }

    public function language()
    {
        return $this->form->language();
    }

    public function getHtmlAttribute()
    {
        return $this->present()->as('unique', 'link')->then('structure')->as('summary')->__toString();
    }

    /*
    |--------------------------------------------------------------------------
    | Relations
    |--------------------------------------------------------------------------
    */
    /**
     * An example belongs to exactly one form
     * 
     * @return \Illuminate\Database\Eloquent\Relations\BelongsTo
     */
    public function form()
    {
        return $this->belongsTo(Form::class, 'form_id');
    }

    public function structure()
    {
        return $this->form->structure();
    }

    /*
    |--------------------------------------------------------------------------
    | Instance Methods
    |--------------------------------------------------------------------------
    */

    public function scopeOfType($query, string $type)
    {
        $query->whereHas('form', function($query) use ($type) {
            $query->where('structure_type', $type);
        });
    }

    public function present(string $method = 'name')
    {
        return new ExamplePresenter($this, $method);
    }
}

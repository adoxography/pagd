<?php

namespace App\Models\Words;

use App\Interfaces\Morphemes\HasMorphemesInterface;
use App\Interfaces\PhonemeableInterface;
use App\Models\Language;
use App\Models\Words\Form;
use App\Presenters\Words\ExamplePresenter;
use App\Traits\BacksUp;
use App\Traits\Bookmarkable;
use App\Traits\HasChildren;
use App\Traits\Morphemes\HasMorphemes;
use App\Traits\Phonology\Phonemeable;
use App\Traits\Reconstructable;
use App\Traits\Sourceable;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;
use Laravel\Scout\Searchable;
use Venturecraft\Revisionable\RevisionableTrait;

/**
 * An example of a form
 */
class Example extends Model implements HasMorphemesInterface, PhonemeableInterface
{
    use RevisionableTrait, Searchable, Sourceable, HasMorphemes, BacksUp, Reconstructable,
        Bookmarkable, SoftDeletes, HasChildren, Phonemeable;

    /*
    |--------------------------------------------------------------------------
    | Eloquent variables
    |--------------------------------------------------------------------------
    |
    | These are the basic variables required by Eloquent to manage this model.
    |
    */
    public $table = 'Word_Examples';
    protected $fillable = ['id', 'name','translation','form_id','language_id','publicNotes','privateNotes','morphemicForm', 'parent_id', 'phonemicForm'];
    protected $appends = ['html'];
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

    public function getHtmlAttribute()
    {
        $html = $this->present()->as('unique', 'link');

        if ($this->form) {
            $html->then('structure')->as('summary');
        }

        return $html->__toString();
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

    public function language()
    {
        return $this->belongsTo(Language::class);
    }

    public function getStructureAttribute()
    {
        return optional($this->form)->structure;
    }

    public function structure()
    {
        return optional($this->form)->structure();
    }

    /*
    |--------------------------------------------------------------------------
    | Instance Methods
    |--------------------------------------------------------------------------
    */

    public function scopeOfType($query, string $type)
    {
        $query->whereHas('form', function ($query) use ($type) {
            $query->where('structure_type', $type);
        });
    }

    public function present(string $method = 'name')
    {
        return new ExamplePresenter($this, $method);
    }
}

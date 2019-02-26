<?php

namespace App\Models\Words;

use App\Interfaces\Morphemes\HasMorphemesInterface;
use App\Interfaces\PhonemeableInterface;
use App\Models\ChangeType;
use App\Models\Language;
use App\Models\Model;
use App\Presenters\Words\FormPresenter;
use App\Traits\BacksUp;
use App\Traits\Bookmarkable;
use App\Traits\HasChildren;
use App\Traits\Reconstructable;
use App\Traits\Sourceable;
use App\Traits\Morphemes\HasMorphemes;
use App\Traits\Phonology\Phonemeable;
use Illuminate\Support\Arr;
use Laravel\Scout\Searchable;
use Venturecraft\Revisionable\RevisionableTrait;

/**
 * A verb form
 *
 * @uses \App\Traits\Sourceable
 * @uses \App\HasMorphemes
 * @uses \App\Traits\Reconstructable
 * @uses \App\CognatableTrait
 */
class Form extends Model implements PhonemeableInterface, HasMorphemesInterface
{
    use Searchable, RevisionableTrait, Sourceable, HasMorphemes, Reconstructable, HasChildren,
        BacksUp, Bookmarkable, Phonemeable;

    /*
    |--------------------------------------------------------------------------
    | Eloquent variables
    |--------------------------------------------------------------------------
    |
    | These are the basic variables required by Eloquent to manage this model.
    |
    */
    public $table = 'word_forms';
    public $morphCode = 'forms';

    protected $fillable = [
        'allomorphy_notes',
        'change_type_id',
        'private_notes',
        'structure_id',
        'structure_type',
        'historical_notes',
        'language_id',
        'morphemic_form',
        'parent_id',
        'phonemic_form',
        'name',
        'usage_notes'
    ];

    protected $appends = ['html'];

    public function toSearchableArray()
    {
        $array = $this->toArray();

        return Arr::only($this->toArray(), [
            'id',
            'allomorphy_notes',
            'private_notes',
            'historical_notes',
            'morphemic_form',
            'phonemic_form',
            'name',
            'usage_notes'
        ]);
    }

    public $presenter = FormPresenter::class;

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
        'allomorphy_notes' => 'allomorphy notes',
        'private_notes'    => 'comments',
        'historical_notes' => 'historical notes',
        'morphemic_form'   => 'morphemes',
        'parent_id'       => 'parent',
        'phonemic_form'    => 'phonemic representation',
        'name'            => 'surface form',
        'usage_notes'      => 'usage notes',
        'change_type_id'   => 'change type',
        'created_at'      => '[created]'
    ];
    protected $dontKeepRevisionOf = [
        'id',
        'complete',
        'created_at',
        'updated_at',
        'structure_type'
    ];

    public function identifiableName()
    {
        return $this->present('link');
    }

    /*
    |--------------------------------------------------------------------------
    | Attribute modifiers
    |--------------------------------------------------------------------------
    */

    public function getCommentsAttribute()
    {
        return $this->private_notes;
    }

    /**
     * Modifies the name attribute to include an asterisk if the form belongs to a reconstructed language
     *
     * @return string The modified name attribute
     */
    public function getSurfaceFormAttribute()
    {
        return $this->name;
    }

    public function getNameAttribute($value)
    {
        return $this->modifyIfReconstructed($value);
    }

    /**
     * Modifies the phoneticForm attribute to include an asterisk if the form belongs to a reconstructed language
     *
     * @param string $value the original phoneticForm attribute
     * @return string|null the modified phoneticForm attribute, or null if it doesn't exist
     */
    public function getPhonemicFormAttribute($value)
    {
        return $value ? $this->modifyIfReconstructed($value) : null;
    }

    public function getPhoneticFormAttribute()
    {
        return $this->phonemic_form;
    }

    public function getDisplayAttribute()
    {
        return $this->present('unique')->then('language');
    }

    public function getHtmlAttribute()
    {
        return $this->present()->as('unique', 'link')->__toString();
    }

    /*
    |--------------------------------------------------------------------------
    | Methods
    |--------------------------------------------------------------------------
    */

    public function isStemless()
    {
        if (preg_match('/(^|-)[NV]($|-)/', $this->name)) {
            return false;
        }
        return $this->hasIdenticalExample();
    }

    protected function hasIdenticalExample()
    {
        $examples = $this->examples;

        if ($examples->count() != 1) {
            return false;
        }

        return $this->name == $this->examples->first()->name;
    }

    public function generateExample(string $translation)
    {
        $exampleData = [
            'form_id'       => $this->id,
            'language_id'   => $this->language_id,
            'name'          => str_replace('*', '', $this->name),
            'phonemic_form'  => str_replace('*', '', $this->phonemic_form),
            'morphemic_form' => $this->morphemic_form,
            'translation'   => $translation
        ];

        if ($this->parent_id && $this->parent->examples()->count() > 0) {
            $exampleData['parent_id'] = $this->parent->examples()->first()->id;
        }

        return $this->examples()->create($exampleData);
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

    public function changeType()
    {
        return $this->belongsTo(ChangeType::class, 'change_type_id');
    }

    public function duplicates()
    {
        return $this->belongsToMany(Form::class, 'forms_duplicates', 'form_id', 'duplicate_id');
    }

    public function examples()
    {
        return $this->hasMany(Example::class, 'form_id');
    }

    public function formType()
    {
        return $this->structure();
    }

    public function structure()
    {
        return $this->morphTo();
    }
}

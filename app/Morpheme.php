<?php

namespace App;

use App\Language;
use App\Events\Morpheme\Saved;
use App\Events\Morpheme\Saving;
use App\Events\Morpheme\Created;
use App\Events\Morpheme\Deleted;
use App\Events\Morpheme\Creating;
use App\Events\Morpheme\Deleting;
use Illuminate\Database\Eloquent\Model;

class Morpheme extends Model
{
    use \Venturecraft\Revisionable\RevisionableTrait;
    use \App\SourceableTrait;

    /*
    |--------------------------------------------------------------------------
    | Eloquent variables
    |--------------------------------------------------------------------------
    |
    | These are the basic variables required by Eloquent to manage this model.
    |
    */
    public $table = 'Morphemes';
    protected $fillable = [
        'name',
        'language_id',
        'parent_id',
        'gloss_id',
        'slot_id',
        'allomorphyNotes',
        'historicalNotes',
        'comments'
    ];
    protected $events = [
        'creating' => Creating::class,
        'created'  => Created::class,
        'saving'   => Saving::class,
        'saved'    => Saved::class,
        'deleting' => Deleting::class,
        'deleted'  => Deleted::class
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
        'allomorphyNotes' => 'Allomorphy Notes',
        'comments'        => 'Comments',
        'historicalNotes' => 'Historical Notes',
        'language_id'     => 'Language ID',
        'gloss_id'        => 'Gloss ID',
        'name'            => 'Morpheme',
        'parent_id'       => 'Parent ID',
        'slot_id'         => 'Slot ID',
    ];

    /*
    |--------------------------------------------------------------------------
    | Attribute Modifiers
    |--------------------------------------------------------------------------
    */

    public function getNameAttribute($value)
    {
        $asterisk = "";

        if ($this->language && $this->language->reconstructed && $value != 'V') {
            $asterisk = "*";
        }

        return $asterisk.$value;
    }

    /*
    |--------------------------------------------------------------------------
    | Methods
    |--------------------------------------------------------------------------
    */

    public function cognates()
    {
        return $this->firstAncestor()->load('allChildren');
    }

    protected function firstAncestor()
    {
        if ($this->parent) {
            return $this->parent->firstAncestor();
        } else {
            return $this;
        }
    }

    public function uniqueName()
    {
        return "{$this->name} ({$this->gloss->abv})";
    }

    public function uniqueNameWithLanguage()
    {
        return "{$this->uniqueName()} ({$this->language->name})";
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
        return $this->belongsToMany(Form::class, 'Forms_Morphemes')->distinct();
    }
    
    public function gloss()
    {
        return $this->belongsTo(Gloss::class);
    }

    public function parent()
    {
        return $this->belongsTo(Morpheme::class, 'parent_id');
    }

    public function children()
    {
        return $this->hasMany(Morpheme::class, 'parent_id');
    }

    public function allChildren()
    {
        return $this->children()->with('allchildren');
    }
    
    public function slot()
    {
        return $this->belongsTo(Slot::class);
    }

    public function sources()
    {
        return $this->belongstoMany(Source::class, 'Morphemes_Sources')->withPivot('extraInfo');
    }

}

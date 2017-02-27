<?php

namespace App;

use App\Language;
use App\ChangeType;
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
    use \App\ReconstructableTrait;
    use \App\CognatableTrait;

    protected $sourceableTable = 'Morphemes_Sources';

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
        'alternateName',
        'changeType_id',
        'name',
        'language_id',
        'parent_id',
        'gloss_id',
        'slot_id',
        'allomorphyNotes',
        'historicalNotes',
        'translation',
        'comments'
    ];
    protected $appends = [
        'uniqueNameWithLanguage',
        'uniqueName'
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
        return $this->modifyIfReconstructed($value);
    }

    public function getUniqueNameWithLanguageAttribute()
    {
        return "{$this->uniqueName} ({$this->language->name})";
    }

    public function getUniqueNameAttribute()
    {
        return "{$this->name} ({$this->gloss->abv})";
    }

    public function getAlternateNameAttribute($value)
    {
        if($value) {
            return $value;
        } else {
            return $this->name;
        }
    }

    /*
    |--------------------------------------------------------------------------
    | Methods
    |--------------------------------------------------------------------------
    */

    public function hasAlternateName()
    {
        return $this->name != $this->alternateName;
    }

    public function uniqueName()
    {
        return $this->uniqueName;
    }

    public function uniqueNameWithLanguage()
    {
        return $this->uniqueNameWithLanguage;
    }
    
    public function isVStem()
    {
        return preg_match('/\*?V/', $this->name);
    }

    public function isAffectedByInitialChange()
    {
        return $this->slot->abv === 'V' || $this->slot->abv === 'PV';
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

    public function examples()
    {
        return $this->belongsToMany(Example::class, 'Examples_Morphemes')->distinct();
    }
    
    public function gloss()
    {
        return $this->belongsTo(Gloss::class);
    }

    public function changeType()
    {
        return $this->belongsTo(ChangeType::class, 'changeType_id');
    }

    public function parent()
    {
        return $this->belongsTo(Morpheme::class, 'parent_id');
    }

    public function children()
    {
        return $this->hasMany(Morpheme::class, 'parent_id');
    }
    
    public function slot()
    {
        return $this->belongsTo(Slot::class);
    }

}

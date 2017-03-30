<?php

namespace App;

use App\Events\Morpheme\Saved;
use App\Events\Morpheme\Deleted;
use App\Events\Morpheme\Creating;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Morpheme extends Model
{
    use \Venturecraft\Revisionable\RevisionableTrait;
    use \AlgoliaSearch\Laravel\AlgoliaEloquentTrait;
    use \App\SourceableTrait;
    use \App\ReconstructableTrait;
    use \App\HasChildrenTrait;
    use \App\BacksUpTrait;
    use \App\BookmarkableTrait;
    use SoftDeletes;
    use \App\HideableTrait;

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
    protected $altName;

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
    protected $dontKeepRevisionOf = [
        'id',
        'created_at',
        'updated_at'
    ];

    public static function boot() {
        parent::boot();

        static::creating(function($model) {
            event(new Creating($model));
        });

        static::saved(function($model) {
            event(new Saved($model));
        });

        static::deleted(function($model) {
            event(new Deleted($model));
        });
    }

    /*
    |--------------------------------------------------------------------------
    | Attribute Modifiers
    |--------------------------------------------------------------------------
    */

    public function getNameAttribute($value)
    {
        $name = isset($this->altName) ? $this->altName : $value;
        return $this->modifyIfReconstructed($name);
    }

    public function getUniqueNameWithLanguageAttribute()
    {
        return "{$this->uniqueName} ({$this->language->name})";
    }

    public function getUniqueNameAttribute()
    {
        return "{$this->name} ({$this->gloss->abv})";
    }

    /*
    |--------------------------------------------------------------------------
    | Methods
    |--------------------------------------------------------------------------
    */

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

    public function initialChange($code)
    {
        $this->altName = $this->determineAltName($code);
    }

    protected function determineAltName($code)
    {
        $output;
        $query = InitialChange::where('morpheme_id', $this->id);

        $pieces = explode('.', $code);
        if(count($pieces) > 1) {
            $query->where('disambiguator', $pieces[1]);
        }
        $results = $query->get();

        if(count($results) == 1) {
            $output = $results[0]->change;
        } else {
            $output = "IC.{$this->name}";
        }

        return $output;
    }

    public function initialChanged()
    {
        return isset($this->altName);
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
    
    public function slot()
    {
        return $this->belongsTo(Slot::class);
    }

    public function initialChanges()
    {
        return $this->hasMany(InitialChange::class);
    }

}

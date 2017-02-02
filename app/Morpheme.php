<?php

namespace App;

use App\Language;
use App\Events\Morpheme\Saved;
use App\Events\Morpheme\Saving;
use App\Events\Morpheme\Created;
use App\Events\Morpheme\Deleted;
use App\Events\Morpheme\Deleting;
use Illuminate\Database\Eloquent\Model;

class Morpheme extends Model
{
    use \Venturecraft\Revisionable\RevisionableTrait;

    protected $revisionEnabled = true;
    protected $revisionCreationsEnabled = true;

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
        'created'  => Created::class,
        'saving'   => Saving::class,
        'saved'    => Saved::class,
        'deleting' => Deleting::class,
        'deleted'  => Deleted::class
    ];

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

    public function cognates()
    {
        return $this->firstAncestor()->load('allChildren');
    }

    public function firstAncestor()
    {
        if ($this->parent) {
            return $this->parent->firstAncestor();
        } else {
            return $this;
        }
    }

    public function allChildren()
    {
        return $this->children()->with('allchildren');
    }

    public function getNameAttribute($value)
    {
        $output = "";

        if ($this->language->reconstructed && $value != 'V') {
            $output = "*";
        }

        return $output.$value;
    }

    public function uniqueName()
    {
        return "{$this->name} ({$this->gloss->abv})";
    }

    public function uniqueNameWithLanguage()
    {
        return "{$this->uniqueName()} ({$this->language->name})";
    }
    
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
    
    public function slot()
    {
        return $this->belongsTo(Slot::class);
    }

    public function sources()
    {
        return $this->belongstoMany(Source::class, 'Morphemes_Sources')->withPivot('extraInfo');
    }

    public function connectSources($sources)
    {
        if ($sources) {
            $this->sources()->detach();

            foreach ($sources as $source) {
                $this->sources()->attach($source['id'], ['extraInfo' => $source['extraInfo']]);
            }
        }
    }
}

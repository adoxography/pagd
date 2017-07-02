<?php

namespace Algling\Phonology\Models;

use Algling\Phonology\Models\Allophone;
use Algling\Phonology\PhonemePresenter;
use Algling\Phonology\Traits\HasAllophonesTrait;
use Algling\Phonology\Traits\HasTypeTrait;
use App\BookmarkableTrait;
use App\Language;
use App\ReconstructableTrait;
use App\SourceableTrait;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;
use Laravel\Scout\Searchable;
use Venturecraft\Revisionable\RevisionableTrait;

class Phoneme extends Model
{
    use SoftDeletes;
    use RevisionableTrait;
    use BookmarkableTrait;
    use SourceableTrait;
    use ReconstructableTrait;
    use HasTypeTrait;
    use HasAllophonesTrait;
    use Searchable;

    public $table = 'Phon_Phonemes';
    public $uri = '/phonemes';

    protected $fillable = [
    	'algoName',
    	'ipaName',
    	'orthoName',
    	'phoneticNotes',
    	'orthoNotes',
    	'privateNotes',
    	'isMarginal',
    	'language_id',
    	'phonemeable_type',
    	'phonemeable_id'
    ];

    public function toSearchableArray()
    {
        $array = $this->toArray();

        return array_only($array, ['id', 'algoName', 'ipaName', 'orthoName', 'phoneticNotes', 'orthoNotes', 'privateNotes']);
    }

    protected $revisionCreationsEnabled = true;
    protected $revisionNullString = 'none';
    protected $revisionFormattedFields = [
        'isMarginal' => 'boolean:fully fledged|marginal'
    ];
    protected $revisionFormattedFieldNames = [
        'algoName'         => 'algonquianist transcription',
        'ipaName'          => 'IPA transcription',
        'orthoName'        => 'orthographic transcription',
        'phoneticNotes'    => 'phonetic notes',
        'orthoNotes'       => 'orthography notes',
        'privateNotes'     => 'private notes',
        'isMarginal'       => 'marginal',
        'phonemeable_type' => 'phoneme type'
    ];
    protected $dontKeepRevisionOf = [
        'id',
        'created_at',
        'updated_at'
    ];

    public function identifiableName()
    {
        return $this->name;
    }

    public function getNameAttribute()
    {
    	return $this->algoName;
    }

    public function getAlgoNameAttribute($value)
    {
        return $this->modifyIfReconstructed($value);
    }

    public function getTypeAttribute()
    {
    	return $this->phonemeable->name;
    }

    public function getIpaNameAttribute($value)
    {
        if($value) {
            return preg_replace('`^(/?)([^/\[\]]+)(/?)`', '/$2/', $this->modifyIfReconstructed($value));
        }

        return null;
    }   

    public function language()
    {
    	return $this->belongsTo(Language::class);
    }

    public function features()
    {
    	return $this->morphTo('phonemeable');
    }

    public function phonemeable()
    {
        return $this->features();
    }

    public function allophones()
    {
    	return $this->hasMany(Allophone::class);
    }

    public function reflexes()
    {
        return $this->belongsToMany(
            Phoneme::class,
            with(new Reflex)->getTable(),
            'parent_id',
            'reflex_id'
        )->withPivot(['environment', 'id']);
    }

    public function parents()
    {
        return $this->belongsToMany(
            Phoneme::class,
            with(new Reflex)->getTable(),
            'reflex_id',
            'parent_id'
        )->withPivot(['environment', 'id']);
    }

    public function allParents()
    {
        $model = $this;

        return $this->parents()->with(['parents', 'allParents' => function($query) use ($model) {
            $query->select("{$this->table}.*");
        }]);
    }

    public function allChildren()
    {
        $model = $this;

        return $this->reflexes()->with(['reflexes', 'allChildren' => function($query) use ($model) {
            $query->select("{$this->table}.*");
        }]);
    }

    public function renderLink()
    {
    	return "<a href=\"/phonemes/{$this->id}\">{$this->name}</a>";
    }

    public function scopeOfType($query, $type)
    {
        if(is_array($type)) {
            for($i = 0; $i < count($type); $i++) {
                $currType = $type[$i];

                if(!preg_match('/.Types/', $currType)) {
                    $currType .= 'Types';
                }

                if($i == 0) {
                    $query->where('phonemeable_type', $currType);
                } else {
                    $query->orWhere('phonemeable_type', $currType);
                }
            }
        } else {
            if(!preg_match('/.Types/', $type)) {
                $type .= 'Types';
            }

            $query->where('phonemeable_type', $type);
        }
    }

    public function uniqueNameWithLanguage()
    {
        return "{$this->name} ({$this->language->name})";
    }

    public function present(string $method = 'name')
    {
        return new PhonemePresenter($this, $method);
    }
}

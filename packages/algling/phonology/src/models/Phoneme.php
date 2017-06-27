<?php

namespace Algling\Phonology\Models;

use App\Language;
use App\SourceableTrait;
use App\BookmarkableTrait;
use App\ReconstructableTrait;
use Laravel\Scout\Searchable;
use Algling\Phonology\Models\Allophone;
use Illuminate\Database\Eloquent\Model;
use Algling\Phonology\Traits\HasTypeTrait;
use Illuminate\Database\Eloquent\SoftDeletes;
use Algling\Phonology\Traits\HasAllophonesTrait;
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
    	return $this->getTranscription('algoName');
    }

    public function getTypeAttribute()
    {
    	return $this->features->name;
    }

    public function getTranscription(string $name)
    {
    	if($this->$name) {
    		return $this->modifyIfReconstructed("/{$this->$name}/");
    	} else {
    		return null;
    	}
    }

    public function language()
    {
    	return $this->belongsTo(Language::class);
    }

    public function features()
    {
    	return $this->morphTo('phonemeable');
    }

    public function allophones()
    {
    	return $this->hasMany(Allophone::class);
    }

    public function renderLink()
    {
    	return "<a href=\"/phonemes/{$this->id}\">{$this->name}</a>";
    }

    public function scopeOfType($query, string $type)
    {
		$query->where('phonemeable_type', $type);
    }
}

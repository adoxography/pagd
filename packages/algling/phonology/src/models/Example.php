<?php

namespace Algling\Phonology\Models;

use Algling\Phonology\Models\Phoneme;
use App\AlgPresenter;
use App\BookmarkableTrait;
use App\HasChildrenTrait;
use App\Language;
use App\SourceableTrait;
use Illuminate\Database\Eloquent\Model;

class Example extends Model
{
	use SourceableTrait, BookmarkableTrait, HasChildrenTrait;

    public $table = 'Phon_Examples';

    protected $fillable = ['name', 'phonemicRepresentation', 'language_id', 'parent_id', 'translation', 'publicNotes', 'privateNotes'];

    public function language()
    {
    	return $this->belongsTo(Language::class);
    }

    public function phonemes()
    {
    	return $this->belongsToMany(Phoneme::class);
    }

    public function present(string $method = 'name')
    {
    	return new AlgPresenter($this, $method);
    }
}

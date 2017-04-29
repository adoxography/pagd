<?php

namespace Algling\Morphemes\Models;

use App\Closed;
use Algling\Morphemes\Models\Morpheme;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Gloss extends Closed
{
    use \App\BookmarkableTrait;
    use SoftDeletes;

    public $table = 'Morph_Glosses';

    protected $fillable = ['name', 'abv', 'description'];

    public $relationList = ['morphemes'];
    public $singular = 'Gloss';
    public $plural = 'Glosses';

    public function morphemes()
    {
    	return $this->belongsToMany(Morpheme::class, 'Morph_Glosses_Morphemes', 'gloss_id', 'morpheme_id');
    }

    public function renderHTMl()
    {
        return "<span class='gloss'>{$this->name}</span>";
    }
}

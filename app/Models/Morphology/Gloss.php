<?php

namespace App\Models\Morphology;

use App\Traits\BookmarkableTrait;
use App\Closed;
use Illuminate\Database\Eloquent\SoftDeletes;

class Gloss extends Closed
{
    use BookmarkableTrait, SoftDeletes;

    public $table = 'Morph_Glosses';

    protected $fillable = ['name', 'abv', 'description'];

    public $relationList = ['morphemes'];
    public $singular = 'Gloss';
    public $plural = 'Glosses';

    public function morphemes()
    {
    	return $this->belongsToMany(Morpheme::class, 'Morph_Glosses_Morphemes', 'gloss_id', 'morpheme_id');
    }
}

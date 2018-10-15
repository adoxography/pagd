<?php

namespace App\Models\Morphology;

use App\Traits\Bookmarkable;
use App\Models\Closed;
use Illuminate\Database\Eloquent\SoftDeletes;

class Gloss extends Closed
{
    use Bookmarkable, SoftDeletes;

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

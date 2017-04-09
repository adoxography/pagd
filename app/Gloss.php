<?php

namespace App;

use App\Morpheme;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Gloss extends Closed
{
    use \App\BookmarkableTrait;
    use SoftDeletes;

    public $table = 'Glosses';

    protected $fillable = ['name', 'abv', 'description'];

    public $relationList = ['morphemes'];
    public $singular = 'Gloss';
    public $plural = 'Glosses';

    public function morphemes()
    {
    	return $this->belongsToMany(Morpheme::class, 'Glosses_Morphemes');
    }

    public function renderHTMl()
    {
        return "<span class='gloss'>{$this->name}</span>";
    }
}

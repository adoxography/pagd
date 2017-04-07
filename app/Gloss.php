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

    public function __construct()
    {
    	$this->relationList = ['morphemes'];
    	$this->singular = 'Gloss';
    	$this->plural = 'Glosses';
    }

    public function morphemes()
    {
    	return $this->hasMany(Morpheme::class);
    }

    public function renderHTMl()
    {
        return "<span class='gloss'>{$this->abv}</span>";
    }
}

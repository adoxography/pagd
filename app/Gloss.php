<?php

namespace App;

use App\Morpheme;
use Illuminate\Database\Eloquent\Model;

class Gloss extends Closed
{
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
}

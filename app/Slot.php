<?php

namespace App;

use App\Morpheme;
use Illuminate\Database\Eloquent\Model;

class Slot extends Model
{
    public $table = 'Slots';

    protected $fillable = ['name', 'abv', 'description'];

    public function __construct()
    {
    	$this->relationList = ['morphemes'];
    	$this->singular = 'Slot';
    	$this->plural = 'Slots';
    }

    public function morphemes()
    {
    	return $this->hasMany(Morpheme::class);
    }
}

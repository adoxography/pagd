<?php

namespace App;

use App\Morpheme;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Slot extends Closed
{
    use \App\BookmarkableTrait;
    use SoftDeletes;

    public $table = 'Slots';

    protected $fillable = ['name', 'colour', 'abv', 'description'];

    public $relationList = ['morphemes'];
    public $singular = 'Slot';
    public $plural = 'Slots';

    public function morphemes()
    {
    	return $this->hasMany(Morpheme::class);
    }
}
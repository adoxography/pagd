<?php

namespace Algling\Morphemes\Models;

use App\Closed;
use Algling\Morphemes\Models\Morpheme;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Slot extends Closed
{
    use \App\BookmarkableTrait;
    use SoftDeletes;

    public $table = 'Morph_Slots';

    protected $fillable = ['name', 'colour', 'abv', 'description'];

    public $relationList = ['morphemes'];
    public $singular = 'Slot';
    public $plural = 'Slots';

    public function morphemes()
    {
    	return $this->hasMany(Morpheme::class);
    }
}

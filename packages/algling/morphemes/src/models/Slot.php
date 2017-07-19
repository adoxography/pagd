<?php

namespace Algling\Morphemes\Models;

use Algling\Morphemes\Models\Morpheme;
use Algling\Morphemes\SlotPresenter;
use App\Closed;
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

    public function identifiableName()
    {
        return $this->name;
    }

    public function morphemes()
    {
    	return $this->hasMany(Morpheme::class);
    }

    public function present(string $method = 'abv')
    {
        return new SlotPresenter($this, $method);
    }
}

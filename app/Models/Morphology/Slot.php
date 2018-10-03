<?php

namespace App\Models\Morphology;

use App\Traits\BookmarkableTrait;
use App\Models\Closed;
use App\Presenters\SlotPresenter;
use Illuminate\Database\Eloquent\SoftDeletes;

class Slot extends Closed
{
    use BookmarkableTrait, SoftDeletes;

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

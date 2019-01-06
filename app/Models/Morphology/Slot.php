<?php

namespace App\Models\Morphology;

use App\Models\Closed;
use App\Presenters\SlotPresenter;
use App\Traits\Bookmarkable;

class Slot extends Closed
{
    use Bookmarkable;

    public $table = 'morph_slots';
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

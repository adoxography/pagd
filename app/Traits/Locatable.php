<?php

namespace App\Traits;

use App\Models\Location;

trait Locatable
{
    public function location()
    {
        return $this->belongsTo(Location::class);
    }

    public function getLocationCoordsAttribute()
    {
        return $this->location->position;
    }

    public function getLocationTypeAttribute()
    {
        return $this->location->type;
    }
}

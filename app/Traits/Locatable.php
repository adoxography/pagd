<?php

namespace App\Traits;

use App\Models\Location;

trait Locatable
{
    public static function bootLocatable()
    {
        static::saving(function ($model) {
            if (request()->has('location')
                && request()->location['type'] != null
                && request()->location['position'] != null) {
                if ($model->location) {
                    $model->location->update(request()->location);
                } else {
                    $location = Location::create(request()->location);
                    $model->location_id = $location->id;
                }
            } elseif ($model->location) {
                $model->location->delete();
            }
        });

        static::deleting(function ($model) {
            if ($model->location) {
                $model->location->delete();
            }
        });
    }

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

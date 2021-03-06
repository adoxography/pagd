<?php

namespace App\Models\Nominals;

use App\Models\Words\Feature;
use Illuminate\Database\Eloquent\Builder;

class PronominalFeature extends Feature
{
    public static function boot()
    {
        parent::boot();

        static::addGlobalScope(function (Builder $query) {
            // Only animate features
            $query->where(function ($query) {
                $query->where('person', '<>', 0)
                    ->orWhereNull('obviativeCode');
            })

            // No locative
            ->orWhere('name', 'X');
        });
    }
}

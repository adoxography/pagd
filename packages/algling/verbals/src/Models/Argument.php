<?php

namespace Algling\Verbals\Models;

use App\Models\Words\Feature;
use Illuminate\Database\Eloquent\Builder;

/**
 * An argument of a form or example
 */
class Argument extends Feature
{
    public static function boot() {
        parent::boot();

        // Verb arguments aren't allowed to be locative
        static::addGlobalScope(function(Builder $query) {
            $query->where('name', '<>', 'LOC');
        });
    }
}

<?php

namespace App\Models\Phonology;

use App\Models\Phonology\Phoneme;
use Illuminate\Database\Eloquent\Builder;

class Cluster extends Phoneme
{
    public static function boot()
    {
        parent::boot();

        // Limit scope to only records that have cluster structures
        static::addGlobalScope('cluster', function (Builder $builder) {
            $builder->where('featurable_type', 'clusters');
        });
    }
}

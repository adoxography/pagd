<?php

namespace Algling\Phonology\Models;

use Illuminate\Database\Eloquent\Builder;

class Vowel extends Phoneme
{
    public static function boot()
    {
        parent::boot();

        // Limit scope to only records that have vowel structures
        static::addGlobalScope('vowel', function (Builder $builder) {
            $builder->where('featurable_type', 'vowels');
        });
    }
}

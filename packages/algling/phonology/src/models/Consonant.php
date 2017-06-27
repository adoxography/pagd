<?php

namespace Algling\Phonology\Models;

use Algling\Phonology\Models\Phoneme;
use Illuminate\Database\Eloquent\Builder;

class Consonant extends Phoneme {

    public static function boot()
    {
    	parent::boot();

    	// Limit scope to only records that have consonant structures
    	static::addGlobalScope('consonant', function(Builder $builder) {
    		$builder->where('phonemeable_type', 'consonants');
    	});
    }

}
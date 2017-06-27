<?php

namespace Algling\Phonology\Models;

use Algling\Phonology\Models\Phoneme;
use Illuminate\Database\Eloquent\Builder;

class Cluster extends Phoneme {

    public static function boot()
    {
    	parent::boot();

    	// Limit scope to only records that have cluster structures
    	static::addGlobalScope('cluster', function(Builder $builder) {
    		$builder->where('phonemeable_type', 'clusters');
    	});
    }

}
<?php

namespace Algling\Nominals\Models;

use Illuminate\Database\Eloquent\Builder;
use Algling\Words\Models\Example as WordExample;

class Example extends WordExample
{
    public static function boot() {
    	parent::boot();

    	// static::addGlobalScope(function(Builder $builder) {
    	// 	$builder->whereHas('form', function($query) {
    	// 		$query->where('structure_type', 'nominalStructures');
    	// 	});
    	// });
    }
}

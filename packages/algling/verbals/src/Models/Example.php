<?php

namespace Algling\Verbals\Models;

use App\Models\Words\Example as WordExample;

class Example extends WordExample
{
    public static function boot() {
    	parent::boot();

    	// static::addGlobalScope(function(Builder $builder) {
    	// 	$builder->whereHas('form', function($query) {
    	// 		$query->where('structure_type', 'verbalStructures');
    	// 	});
    	// });
    }
}

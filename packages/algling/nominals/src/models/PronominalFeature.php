<?php

namespace Algling\Nominals\Models;

use Algling\Words\Models\Feature;
use Illuminate\Database\Eloquent\Builder;

class PronominalFeature extends Feature
{
    public static function boot() {
    	parent::boot();

    	static::addGlobalScope(function(Builder $query) {
    		// Only animate features
    		$query->where('person', '<>', '0')

    		// No locative
    		->orWhere('name', 'X');
    	});
    }
}

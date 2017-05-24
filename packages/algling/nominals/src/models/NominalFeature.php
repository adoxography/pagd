<?php

namespace Algling\Nominals\Models;

use Algling\Words\Models\Feature;
use Illuminate\Database\Eloquent\Builder;

class NominalFeature extends Feature
{
    public static function boot() {
    	parent::boot();

    	static::addGlobalScope(function(Builder $query) {
    		$query->whereNotIn('person', ['1', '21', '2'])
    			->orWhere('name', 'LOC');
    	});
    }
}

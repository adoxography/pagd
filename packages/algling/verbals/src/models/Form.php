<?php

namespace Algling\Verbals\Models;

use Algling\Words\Models\Form as WordForm;
use Algling\Verbals\Models\Structure;
use Illuminate\Database\Eloquent\Builder;

class Form extends WordForm
{
    public static function boot()
    {
    	parent::boot();

    	static::addGlobalScope('verb', function(Builder $builder) {
    		$builder->where('structure_type', Structure::class);
    	});
    }
}

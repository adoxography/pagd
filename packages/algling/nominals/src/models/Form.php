<?php

namespace Algling\Nominals\Models;

use Illuminate\Database\Eloquent\Builder;
use Algling\Words\Models\Form as WordForm;
use Algling\Nominals\Traits\HasStructureTrait;

class Form extends WordForm
{
	use HasStructureTrait;

    public static function boot()
    {
    	parent::boot();

    	// Limit scope to only records that have nominal structures
    	static::addGlobalScope('nominal', function(Builder $builder) {
    		$builder->where('structure_type', 'nominalStructures');
    	});
    }
}

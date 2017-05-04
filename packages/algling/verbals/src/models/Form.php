<?php

namespace Algling\Verbals\Models;

use Algling\Verbals\Models\Structure;
use Illuminate\Database\Eloquent\Builder;
use Algling\Words\Models\Form as WordForm;
use Algling\Verbals\Traits\HasStructureTrait;

class Form extends WordForm
{
	use HasStructureTrait;

    public static function boot()
    {
    	parent::boot();

    	// Limit scope to only records that have verb structures
    	static::addGlobalScope('verb', function(Builder $builder) {
    		$builder->where('structure_type', 'verbStructures');
    	});
    }
}

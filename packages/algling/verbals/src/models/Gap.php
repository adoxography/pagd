<?php

namespace Algling\Verbals\Models;

use Illuminate\Database\Eloquent\Model;
use Algling\Words\Models\Gap as WordGap;
use Illuminate\Database\Eloquent\Builder;
use Algling\Verbals\Traits\HasStructureTrait;

class Gap extends WordGap
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

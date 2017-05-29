<?php

namespace Algling\Nominals\Models;

use Algling\Nominals\Models\Structure;
use Illuminate\Database\Eloquent\Builder;
use Algling\Words\Models\Form as WordForm;
use Algling\Nominals\Traits\HasStructureTrait;

class Form extends WordForm
{
	use HasStructureTrait;

	public $uri = '/nominals/forms';

    public static function boot()
    {
    	parent::boot();

    	// Limit scope to only records that have nominal structures
    	static::addGlobalScope('nominal', function(Builder $builder) {
    		$builder->where('structure_type', 'nominalStructures');
    	});
    }

    // public function getUniqueNameAttribute()
    // {
    //     return "{$this->name} ()";
    // }

    public function renderHTML()
    {
        return "<a href='/nominals/forms/{$this->id}'>{$this->name}</a> ({$this->structure->summary})";
    }
}

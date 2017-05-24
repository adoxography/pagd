<?php

namespace Algling\Verbals\Models;

use Algling\Verbals\Models\Structure;
use Illuminate\Database\Eloquent\Builder;
use Algling\Words\Models\Form as WordForm;
use Algling\Verbals\Traits\HasStructureTrait;

class Form extends WordForm
{
	use HasStructureTrait;

	public $uri = '/verbs/forms';

    public static function boot()
    {
    	parent::boot();

    	// Limit scope to only records that have verb structures
    	static::addGlobalScope('verb', function(Builder $builder) {
    		$builder->where('structure_type', 'verbStructures');
    	});
    }

    /**
     * Fetches the name of this example that is unique within its language
     *
     * Adds the arguments to the surfaceForm - while this doesn't guarantee that the name will be unique, it does make it very likely.
     *
     * @return string The surfaceForm followed by the form's arguments
     */
    public function getUniqueNameAttribute()
    {
        return "{$this->surfaceForm} ({$this->structure->renderArguments()})";
    }

    public function renderHTML()
    {
        return "<a href='/forms/{$this->id}'>{$this->surfaceForm}</a> (".$this->structure->renderArguments().")";
    }
}

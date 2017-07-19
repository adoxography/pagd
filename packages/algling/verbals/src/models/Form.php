<?php

namespace Algling\Verbals\Models;

use Algling\Verbals\FormPresenter;
use Algling\Verbals\Models\Structure;
use Algling\Verbals\Traits\HasStructureTrait;
use Algling\Words\Models\Form as WordForm;
use Illuminate\Database\Eloquent\Builder;

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

    public function present(string $method = 'name')
    {
        return new FormPresenter($this, $method);
    }
}

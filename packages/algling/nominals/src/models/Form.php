<?php

namespace Algling\Nominals\Models;

use Algling\Nominals\FormPresenter;
use Algling\Nominals\Models\Structure;
use Algling\Nominals\Traits\HasStructureTrait;
use Algling\Words\Models\Form as WordForm;
use Illuminate\Database\Eloquent\Builder;

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

    public function renderHTML()
    {
        return "<a href='/nominals/forms/{$this->id}'>{$this->name}</a> ({$this->structure->summary})";
    }

    public function present(string $method = 'name')
    {
        return new FormPresenter($this, $method);
    }
}

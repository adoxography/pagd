<?php

namespace Algling\Words\Traits;

use Algling\Words\Models\Gap;
use Algling\Words\Models\Form;
use Algling\Words\Models\Example;

trait HasWordsTrait {

	public function forms()
	{
		return $this->hasMany(Form::class);
	}

	public function gaps()
	{
		return $this->hasMany(Gap::class);
	}

    public function examples()
    {
        return $this->hasManyThrough(Example::class, Form::class);
    }
}
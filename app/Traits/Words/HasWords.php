<?php

namespace App\Traits\Words;

use App\Models\Words\Gap;
use App\Models\Words\Form;
use App\Models\Words\Example;

trait HasWords {

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

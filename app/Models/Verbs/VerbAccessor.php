<?php

namespace App\Models\Verbs;

use App\Models\Language;
use App\Models\Verbs\Gap;
use App\Models\Verbs\Form;

class VerbAccessor implements VerbAccessorInterface {

	protected $model;

	public function __construct(Language $model)
	{
		$this->model = $model;
	}

	// Relations
	public function forms()
	{
		return $this->model->hasMany(Form::class, 'language_id');
	}

	public function gaps()
	{
		return $this->model->hasMany(Gap::class, 'language_id');
	}

	public function examples()
	{
		
	}

	public function paradigms()
	{
		
	}
}

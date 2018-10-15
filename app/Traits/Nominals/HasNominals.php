<?php

namespace App\Traits\Nominals;

use App\Models\Nominals\Form;
use App\Models\Nominals\Paradigm;
use App\Traits\Words\HasWords;
use App\Models\Morphology\Morpheme;

trait HasNominals {

	use HasWords;

	public static function bootHasNominals()
	{
		static::created(function($model) {
			$model->createNStem();
			$model->createInitialParadigms();
		});
	}

	// Relations
	public function nominalParadigms()
	{
		return $this->hasMany(Paradigm::class);
	}

	public function nominalForms()
	{
		return $this->hasMany(Form::class);
	}

	public function nominalExamples()
	{
		return $this->examples()->ofType('nominalStructures');
	}

	public function createInitialParadigms()
	{
		$paradigms = config('nominals.initial_paradigms');

		$this->nominalParadigms()->createMany($paradigms);
	}

	public function createNStem()
	{
		$parent = null;

		if($this->parent_id) {
			$parent = $this->parent->morphemes()->where('name', 'N-')->first()->id;
		}

		$stem = new Morpheme([
			'name' => 'N-',
			'gloss' => 'N',
			'slot_id' => 1,
			'parent_id' => $parent
		]);

		$stem->disableRevisions();
		$this->morphemes()->save($stem);
	}
}

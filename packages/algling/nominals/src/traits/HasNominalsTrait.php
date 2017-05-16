<?php

namespace Algling\Nominals\Traits;

use Algling\Nominals\Models\Paradigm;

trait HasNominalsTrait {

	public static function bootHasNominalsTrait()
	{
		static::created(function($model) {
			$model->createInitialParadigms();
		});
	}

	// Relations
	public function paradigms()
	{
		return $this->nominalParadigms();
	}

	public function nominalParadigms()
	{
		return $this->hasMany(Paradigm::class);
	}

	protected function createInitialParadigms()
	{
		$paradigms = config('nominals.initial_paradigms');

		$this->nominalParadigms()->createMany($paradigms);
	}
}
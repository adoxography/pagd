<?php

namespace Algling\Phonology\Traits;

trait HasAllophonesTrait {

	public static function bootHasAllophonesTrait() {

		static::saved(function($model) {
			$model->updateAllophones();
		});
	}

	public function updateAllophones()
	{
		$data = $this->buildAllophoneArray(
			request()->allophones,
			request()->environments
		);

		$this->allophones()->delete();

		$this->allophones()->createMany($data);
	}

	protected function buildAllophoneArray($allophones, $environments)
	{
		$constrained = [];
		$elsewhere = [];

		for($i = 0; $i < count($allophones); $i++) {
			$allophone   = $allophones[$i];
			$environment = $environments[$i];

			if($allophone) {

				if($environment) {
					$constrained[] = [
						'name' => $allophone,
						'environment' => $environment
					];
				} else {
					$elsewhere[] = [
						'name' => $allophone
					];
				}
			}
		}

		if(count($constrained) + count($elsewhere) == 0) {
			$elsewhere[] = $this->generateDefaultAllophone();
		}

		return array_merge($constrained, $elsewhere);
	}

	protected function generateDefaultAllophone()
	{
		$name = $this->ipaName ?: $this->algoName;

		return ['name' => $name];
	}

}
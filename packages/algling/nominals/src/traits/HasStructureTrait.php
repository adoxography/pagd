<?php

namespace Algling\Nominals\Traits;

trait HasStructureTrait {

	public static function bootHasStructureTrait() {
		static::saving(function($model) {
			dd($model);
		});
	}
}
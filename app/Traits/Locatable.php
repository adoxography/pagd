<?php

namespace App\Traits;

trait Locatable {

	public function getLocation()
	{
		$location = null;

		if($this->location) {
			$location = explode(',', str_replace(['(',')',' '], '', $this->location));
		}

		return $location;
	}

}

<?php

namespace App;

trait LocatableTrait {

	public function getLocation()
	{
		$location = null;

		if($this->location) {
			$location = explode(',', str_replace(['(',')',' '], '', $this->location));
		}

		return $location;
	}

}
<?php

namespace App\Palette;

use Illuminate\Support\Collection;

class Mapper {

	public function map(Collection $collection, array $palette, string $key)
	{
		$map = [];

		foreach($collection as $item) {
			if(!isset($map[$item->$key])) {
				$map[$item->$key] = $palette[count($map)];
			}
		}

		return $map;
	}

}
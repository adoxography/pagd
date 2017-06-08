<?php

namespace App\Palette;

use App\Palette\Generator;
use MikeAlmond\Color\Color;
use Illuminate\Support\Collection;

class Palette {

	const DEFAULT_COLOR = '#FF0000';

	public $baseColor;

	public $palette;

	private $generator;

	public function __construct($color = self::DEFAULT_COLOR)
	{
		$this->baseColor = Color::fromHex($color);
		$this->generator = new Generator;
	}

	public function generate($n = 2)
	{
		$this->palette = $this->generator->generate($this->baseColor, $n);

		return $this->palette;
	}

	public function map(Collection $collection, $key = 'id')
	{
		$map = [];

		if(!isset($this->palette)) {
			$this->generate($collection->count());
		}

		foreach($collection as $item) {
			if(!isset($map[$item->$key])) {
				$map[$item->$key] = $this->palette[count($map)];
			}
		}

		return $map;
	}
}
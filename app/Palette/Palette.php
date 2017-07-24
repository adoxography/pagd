<?php

namespace App\Palette;

use MikeAlmond\Color\Color;
use Illuminate\Support\Collection;

class Palette {

	const DEFAULT_COLOR = '#FF0000';

	public $baseColor;

	public $palette;

	private $generator;

	private $mapper;

	public function __construct($color = self::DEFAULT_COLOR)
	{
		$this->baseColor = Color::fromHex($color);
		$this->generator = new Generator;
		$this->mapper    = new Mapper;
	}

	public function generate($n = 2)
	{
		$this->palette = $this->generator->generate($this->baseColor, $n);

		return $this->palette;
	}

	public function map(Collection $collection, $key = 'id')
	{
		if(!isset($this->palette)) {
			$this->generate($collection->count());
		}

		return $this->mapper->map($collection, $this->palette, $key);
	}
}
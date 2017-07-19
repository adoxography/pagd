<?php

namespace Algling\Morphemes;

use App\AlgPresenter;

class SlotPresenter extends AlgPresenter
{
	public function abv()
	{
		return $this->model->abv;
	}

	public function link(string $addon = '', string $format = '')
	{
		if(strlen($addon) > 0) {
			$addon = '/' . $addon;
		}

		$colour = '';

		if(strpos($format, 'coloured') !== false) {
			$colour = "style=\"color: {$this->model->colour};\"";
		}

		return sprintf(
			'<a href="/%s/%d%s" %s >%s</a>',
			$this->getURI(),
			$this->model->id,
			$addon,
			$colour,
			$this->model->present()
		);	
	}
}
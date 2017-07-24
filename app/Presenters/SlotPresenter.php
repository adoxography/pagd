<?php

namespace App\Presenters;

use App\AlgPresenter;

class SlotPresenter extends AlgPresenter
{
    /**
     * @return mixed
     */
    public function abv()
	{
		return $this->model->abv;
	}

    /**
     * @param string $addon
     * @param string $format
     * @return string
     */
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
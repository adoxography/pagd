<?php

namespace App\Presenters\Verbs;

use App\Presenters\AlgPresenter;
use App\Models\Verbs\Structure;

class StructurePresenter extends AlgPresenter {

	public function __construct(Structure $model, string $method = 'summary')
	{
		parent::__construct($model, $method);
	}

	public function summary()
	{
		return $this->arguments() . '&nbsp' . $this->model->formClass->present() . '&nbsp' . $this->model->order->present() . '&nbsp' . $this->model->mode->present();
	}

	public function arguments(string $format = '')
	{
		$args = $this->model->renderArguments();

		if(strlen($format) > 0) {
			$args = $this->format($args, $format);
		}

		return $args;
	}
}

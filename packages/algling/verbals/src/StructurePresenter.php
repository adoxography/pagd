<?php

namespace Algling\Verbals;

use Algling\Verbals\Models\Structure;
use App\AlgPresenter;

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
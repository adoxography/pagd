<?php

namespace Algling\Verbals;

use App\AlgPresenter;

class GapPresenter extends AlgPresenter {

	protected $uri = 'verbs/gaps';

	public function name(string $format = '')
	{
		return 'No form';
	}
}
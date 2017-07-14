<?php

namespace Algling\Nominals;

use Algling\Nominals\Paradigm;
use App\AlgPresenter;

class ParadigmPresenter extends AlgPresenter
{
	public function table()
	{
		$paradigm = new Paradigm($this->model->forms);

		$html = '<table style="display: block"><thead><tr><th>Arguments</th><th>Form</th></thead>';

		$html .= '</table>';

		return $html;
	}	
}
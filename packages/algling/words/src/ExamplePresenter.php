<?php

namespace Algling\Words;

use App\AlgPresenter;

class ExamplePresenter extends AlgPresenter
{
	public function name(string $format = '')
	{
		$name = parent::name($format);

		return preg_replace('/[^A-Z]+/', '<em>$0</em>', $name);
	}

	public function phonemicForm(string $format = '')
	{
		if(!$this->model->phonemicForm) {
			return $this->name();
		} else {
			return preg_replace('/[^A-Z]+/', '<em>$0</em>', $this->model->phonemicForm);
		}
	}

	public function stub()
	{
        $name = $this->model->present('phonemicForm');
        $uri = $this->getURI();

        return "<blockquote><a href='/$uri/{$this->model->id}'>$name</a>{$this->model->printMorphemes()}<span>{$this->model->translation}</span></blockquote>";
	}
}
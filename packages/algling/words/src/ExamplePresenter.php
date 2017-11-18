<?php

namespace Algling\Words;

use App\AlgPresenter;
use App\Presenters\PhonemeablePresentation;

class ExamplePresenter extends AlgPresenter
{
    use PhonemeablePresentation;

    public function name(string $format = '')
    {
        $name = parent::name($format);

        return preg_replace('/[^A-Z]+/', '<em>$0</em>', $name);
    }

    public function phonemicForm(string $format = '')
    {
        if (!$this->model->phonemicForm) {
            return $this->name();
        } else {
            return $this->convertToPhonemes('phonemicForm');
        }
    }

    public function stub()
    {
        $name = $this->model->present('phonemicForm');
        $uri = $this->getURI();

        return "<blockquote><a href='/$uri/{$this->model->id}'>$name</a>{$this->model->printMorphemes()}<span>{$this->model->translation}</span></blockquote>";
    }

    public function unique(string $method = 'name', string $format = '')
    {
        return $this->$method . "&nbsp'{$this->model->translation}'";
    }
}

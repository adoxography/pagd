<?php

namespace App\Presenters\Words;

use App\Presenters\AlgPresenter;
use App\Presenters\MorphemeablePresentation;
use App\Presenters\PhonemeablePresentation;

class ExamplePresenter extends AlgPresenter
{
    use PhonemeablePresentation, MorphemeablePresentation;

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

        return "<blockquote><a href='/$uri/{$this->model->id}'>$name</a>{$this->model->present('morphemes')}<span>{$this->model->translation}</span></blockquote>";
    }

    public function unique(string $method = 'name', string $format = '')
    {
        return $this->$method . "&nbsp'{$this->model->translation}'";
    }
}

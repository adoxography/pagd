<?php

namespace Algling\Words;

use App\AlgPresenter;
use App\Presenters\PhonemeablePresentation;

class FormPresenter extends AlgPresenter
{
    use PhonemeablePresentation;

    public function unique()
    {
        return $this->name();
    }

    public function name(string $format = '')
    {
        $name = parent::name($format);

        return preg_replace('/[^A-Z]+/', '<i>$0</i>', $name);
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

        return "<blockquote><a href='/{$this->getURI()}/{$this->model->id}'>$name</a>".$this->model->printMorphemes().'</blockquote>';
    }
}

<?php

namespace App\Presenters\Words;

use App\Presenters\AlgPresenter;
use App\Presenters\MorphemeablePresentation;
use App\Presenters\PhonemeablePresentation;

class FormPresenter extends AlgPresenter
{
    use PhonemeablePresentation, MorphemeablePresentation;

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
        if (!$this->model->phonemic_form) {
            return $this->name();
        }
        return $this->convertToPhonemes('phonemic_form');
    }

    public function stub()
    {
        $name = $this->model->phonemicForm ?: $this->name();

        return "<blockquote><a href='/{$this->getURI()}/{$this->model->id}'>$name</a>".$this->model->present('morphemes').'</blockquote>';
    }
}

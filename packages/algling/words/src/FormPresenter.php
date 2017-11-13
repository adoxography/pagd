<?php

namespace Algling\Words;

use App\AlgPresenter;

class FormPresenter extends AlgPresenter
{
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
            $phonemes = $this->model->phonemes;
            $pattern = '';

            $phonemes->each(function ($phoneme) use (&$pattern) {
                if (strlen($pattern) > 0) {
                    $pattern .= '|';
                }

                $pattern .= str_replace('*', '', $phoneme->algoName);
            });

            $output = preg_replace('/[^A-Z*-]+/', '<i>$0</i>', $this->model->phonemicForm);

            return preg_replace_callback("/(?<!<)(?:$pattern)(?!>)/", function ($symbol) use ($phonemes) {
                $phoneme = $phonemes->filter(function ($phoneme) use ($symbol) {
                    return str_replace('*', '', $phoneme->algoName) == $symbol[0];
                })->first();
                return str_replace('*', '', $phoneme->present('link'));
            }, $output);
        }
    }

    public function stub()
    {
        $name = $this->model->present('phonemicForm');

        return "<blockquote><a href='/{$this->getURI()}/{$this->model->id}'>$name</a>".$this->model->printMorphemes().'</blockquote>';
    }
}

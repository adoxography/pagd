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
            $output = '';
            $i = 0;

            while ($i < strlen($this->model->phonemicForm)) {
                $phoneme = $this->model->lookupPhoneme($i);

                if ($phoneme) {
                    $output .= "<i><a href=\"/phonemes/{$phoneme->id}\">{$phoneme->algoName}</a></i>";
                    $i += strlen($phoneme->algoName);
                } else {
                    $glyph = $this->model->phonemicForm{$i};

                    if (!preg_match('/[A-Z]/', $glyph)) {
                        $glyph = "<i>$glyph</i>";
                    }

                    $output .= $glyph;

                    $i += 1;
                }
            }

            return $output;
        }
    }

    public function stub()
    {
        $name = $this->model->present('phonemicForm');

        return "<blockquote><a href='/{$this->getURI()}/{$this->model->id}'>$name</a>".$this->model->printMorphemes().'</blockquote>';
    }
}

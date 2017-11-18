<?php

namespace App\Presenters;

use App\PhonemeableInterface;
use Illuminate\Support\Collection;

trait PhonemeablePresentation
{
    protected function convertToPhonemes(string $field)
    {
        if (!$this->model instanceof PhonemeableInterface) {
            $class = get_class($this->model);
            throw new \Exception("Cannot convert \"$field\" to phonemes because \"$class\" is not phonemeable.");
        }

        if (!$this->model->$field) {
            throw new \Exception("Cannot convert phonemes of null");
        }

        $output = preg_replace('/[^A-Z*-]+/', '<i>$0</i>', $this->model->$field);
        $phonemes = $this->model->phonemes;

        if ($phonemes->count() > 0) {
            $pattern = $this->model->getPhonemePattern();
            $output = $this->charsToPhonemes($output, $pattern, $phonemes);
        }

        return $output;
    }

    protected function charsToPhonemes(string $str, string $pattern, Collection $phonemes)
    {
        return preg_replace_callback("/(?<!<)(?:$pattern)(?!>)/", function ($symbol) use ($phonemes) {
            $phoneme = $phonemes->filter(function ($phoneme) use ($symbol) {
                return str_replace('*', '', $phoneme->algoName) == $symbol[0];
            })->first();
            return str_replace('*', '', $phoneme->present('link'));
        }, $str);
    }
}

<?php

namespace Algling\Words\Traits;

trait ConvertsMorphemes
{
    protected function convertMorphemes()
    {
        $morphemicForm = null;
        $morphemes = request()->morphemes;

        if (count($morphemes) > 0) {
            $firstTime = true;

            foreach ($morphemes as $morpheme) {
                if ($firstTime) {
                    $firstTime = false;
                } else {
                    $morphemicForm .= '-';
                }

                if ($morpheme['ic'] != null && $morpheme['ic'] >= 0) {
                    $morphemicForm .= "IC";
                    if ($morpheme['ic'] > 0) {
                        $morphemicForm .= '.' . $morpheme['ic'];
                    }
                    $morphemicForm .= "|";
                }

                $morphemicForm .= str_replace(['*', '-'], '', $morpheme['name']);

                if ($morpheme['disambiguator']) {
                    $morphemicForm .= '.' . $morpheme['disambiguator'];
                }
            }

            return $morphemicForm;
        }
    }
}

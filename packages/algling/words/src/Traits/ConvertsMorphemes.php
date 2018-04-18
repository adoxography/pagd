<?php

namespace Algling\Words\Traits;

trait ConvertsMorphemes
{
    /**
     * Converts the data collected from a morpheme input field into a string representation
     *
     * @return mixed  A string representation of the morphemes in the request if there were morphemes, or null otherwise
     */
    protected function convertMorphemes()
    {
        $morphemicForm = null;
        $morphemeData = request()->morphemes;
        $morphemes = [];

        if ($morphemeData && count($morphemeData) > 0) {
            foreach ($morphemeData as $data) {
                if ($data['id'] > 0) {
                    $morphemes[] = $this->convertOldMorpheme($data);
                } else {
                    $morphemes[] = $this->convertNewMorpheme($data);
                }
            }

            $morphemicForm = implode('-', $morphemes);
        }

        return $morphemicForm;
    }

    /**
     * Converts an existing morpheme into a string representation
     *
     * @param array $data  An array of data concerning the morpheme
     * @return string      A string representation of the morpheme
     */
    protected function convertOldMorpheme(array $data) : string
    {
        return $data['id'] . $this->convertInitialChange($data);
    }

    /**
     * Converts a new morpheme into a string representation
     *
     * @param array $data  An array of data concerning the morpheme
     * @return string      A string representation of the morpheme
     */
    protected function convertNewMorpheme(array $data) : string
    {
        return str_replace(['*', '-'], '', $data['name']) . $this->convertInitialChange($data);
    }

    /**
     * Converts information about initial change into a string
     *
     * @param array $data  An array of data concerning a morpheme
     * @return string      A string representation of the initial change
     */
    protected function convertInitialChange(array $data) : string
    {
        if ($data['ic'] !== null) {
            return '.' . $data['ic'];
        }

        return '';
    }
}

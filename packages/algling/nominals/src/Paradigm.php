<?php

namespace Algling\Nominals;

class Paradigm
{
    public $forms;

    public $rows;

    protected $dictionary = ['1', '1s', '2', '2s', '1p', '21', '2p', '3s', '3p', '3\'s', '3\'p', '0s', '0p', 'LOC', ''];

    public function __construct($forms)
    {
        $this->forms = $forms;

        $this->sortForms();

        $this->createRows();
    }

    protected function sortForms()
    {
        $dictionary = $this->dictionary;

        $this->forms = $this->forms->sortBy(function($form) use ($dictionary) {
                return $form->structure->paradigm_id
                    . array_search($form->structure->pronominalFeature ? $form->structure->pronominalFeature->name : '', $dictionary)
                    . array_search($form->structure->nominalFeature ? $form->structure->nominalFeature->name : '', $dictionary);
            });
    }

    public function createRows()
    {
        $rows = [];

        foreach($this->forms as $form) {

            if (!isset($rows[$form->structure->paradigm->name][$form->structure->present('features')->__toString()])) {
                $rows[$form->structure->paradigm->name][$form->structure->present('features')->__toString()] = [];
            }
            $rows[$form->structure->paradigm->name][$form->structure->present('features')->__toString()][] = $form;
        }

        $this->rows = $rows;
    }

    public function isEmpty()
    {
    	return count($this->forms) == 0;
    }
}
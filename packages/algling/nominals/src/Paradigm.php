<?php

namespace Algling\Nominals;

class Paradigm
{
    public $forms;

    public $rows;

    public $sources;

    protected $dictionary = ['1', '1s', '2', '2s', '1p', '21', '2p', '3s', '3p', '3\'', '3\'s', '3\'p', '3\'\'', '3\'\'s', '3\'\'p', '0s', '0p', 'LOC', ''];

    public function __construct($forms)
    {
        $this->forms = $forms;

        $this->sortForms();

        $this->createRows();

        $this->extractSources();
    }

    protected function sortForms()
    {
        $dictionary = $this->dictionary;

        $this->forms = $this->forms->sortBy(function ($form) use ($dictionary) {
            return $form->structure->paradigm_id
                    . array_search($form->structure->pronominalFeature ? $form->structure->pronominalFeature->name : '', $dictionary)
                    . array_search($form->structure->nominalFeature ? $form->structure->nominalFeature->name : '', $dictionary);
        });
    }

    public function createRows()
    {
        $rows = [];

        foreach ($this->forms as $form) {
            if (!isset($rows[$form->structure->paradigm->name][$form->structure->present('features')->__toString()])) {
                $rows[$form->structure->paradigm->name][$form->structure->present('features')->__toString()] = [];
            }
            $rows[$form->structure->paradigm->name][$form->structure->present('features')->__toString()][] = $form;
        }

        $this->rows = $rows;
    }

    protected function extractSources()
    {
        $this->sources = $this->forms->pluck('sources')
            ->flatten(1)
            ->unique('id')
            ->sortBy('disambiguator')
            ->sortByDesc('year')
            ->sortBy('name');
    }

    public function isEmpty()
    {
        return count($this->forms) == 0;
    }

    public function hasSources()
    {
        return count($this->sources) > 0;
    }
}

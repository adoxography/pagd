<?php

namespace App\Observers;

use App\Form;
use App\FormType;

class FormObserver {

	public function saved(Form $form)
	{
		$this->connectDuplicates($form);
	}

	public function deleting(Form $form)
	{
		$this->destroyExamples($form);
		$this->disconnectDuplicates($form);
	}

    protected function connectDuplicates(Form $form)
    {
        // Unlink all of the form's duplicates
        $form->duplicates()->detach();

        // Get rid of all the disambiguators from the morphemic form
        $morphemicForm = $this->sanitize($form->morphemicForm);

        //Get all of the duplicates that aren't the form itself
        $duplicates = Form::where('morphemicForm', $morphemicForm)
                          ->where('language_id', $form->language_id)
                          ->where('id', '<>', $form->id)
                          ->get();

        //Add a link from each duplicate to the new form, and from the new form to each duplicate
        foreach ($duplicates as $duplicate) {
            $duplicate->duplicates()->attach($form->id);
            $form->duplicates()->attach($duplicate->id);
        }
    }

    protected function sanitize($morphemicForm)
    {
        $output = '';
        $firstTime = true;

        // Split the morphemic form up into individual morphemes
        $morphemes = explode('-', $morphemicForm);

        // Split each morpheme into name and disambiguator, then only take the name
        foreach ($morphemes as $morpheme) {
            if ($firstTime) {
                $firstTime = false;
            } else {
            	 	$output .= '-';
            }
            $chunks = explode('.', $morpheme);
            $output .= $chunks[0];
        }

        return $output;
    }

    protected function destroyExamples(Form $form)
    {
        $examples = $form->examples;

        if($examples) {
            foreach ($examples as $example) {
                $example->delete();
            }
        }	
    }

    protected function disconnectDuplicates(Form $form)
    {
        $duplicates = $form->duplicates;

        if($duplicates) {
            foreach($duplicates as $duplicate){
                $duplicate->duplicates()->detach($form->id);
            }

            $form->duplicates()->detach();
        }
    }
}
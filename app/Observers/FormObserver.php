<?php

namespace App\Observers;

use App\Form;
use App\FormType;

class FormObserver {

	public function saving(Form $form)
	{
        /**
         * Only attempt to assign the form type if the data from a create or edit form
         * is present. (The LangFormRequest will have guaranteed that it is.) Skip
         * this otherwise - i.e. when the form is being disambiguated. That means that
         * the form already has a type, and it won't be altered anyway.
         */
		if(request()->subject_id) {
			$this->assignFormType($form);
		}
	}

	public function saved(Form $form)
	{
		$this->connectDuplicates($form);
	}

	public function deleting(Form $form)
	{
		$this->destroyExamples($form);
		$this->disconnectDuplicates($form);
	}

	protected function assignFormType(Form $form)
	{
        $form->formType_id = $this->getType();
	}

    private function getType()
    {
        $data = $this->parseFormTypeData(request()->all());
        $type = null;

        //Try to find the type in the database
        $rules = $this->convertToRules($data);
        $type = FormType::where($data)->first();

        //If it's not there, create a new one
        if (!$type) {
            $type = FormType::create(array_filter($data, 'strlen'));
        }

        return $type->id;
    }

    private function parseFormTypeData($attributes)
    {
        $data['subject_id']         = $attributes['subject_id'];
        $data['primaryObject_id']   = $attributes['primaryObject_id'];
        $data['secondaryObject_id'] = $attributes['secondaryObject_id'];
        $data['mode_id']            = $attributes['mode_id'];
        $data['class_id']           = $attributes['class_id'];
        $data['order_id']           = $attributes['order_id'];
        $data['isNegative']         = $attributes['isNegative'] ? 1 : 0;
        $data['isDiminutive']       = $attributes['isDiminutive'] ? 1 : 0;
        $data['isAbsolute']         = $attributes['isAbsolute'];
        $data['head']               = $attributes['head'];

        return $data;
    }

    private function convertToRules($data)
    {
        $rules = array();

        foreach ($data as $key => $value) {
            if ($value === "") {
                $value = null;
            }
            array_push($rules, [$key, $value]);
        }

        return $rules;
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
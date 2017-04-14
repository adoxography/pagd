<?php

namespace App;

trait HasFormTypeTrait {

	public static function bootHasFormTypeTrait() {
		static::saving(function($model) {
        	/**
        	 * Only attempt to assign the form type if the data from a create or edit form
        	 * is present. (The LangFormRequest will have guaranteed that it is.) Skip
        	 * this otherwise - i.e. when the form is being disambiguated. That means that
        	 * the form already has a type, and it won't be altered anyway.
        	 */
			if(request()->subject_id) {
				$model->assignFormType();
			}
		});
	}

    public function formType()
    {
        return $this->belongsTo(FormType::class, 'formType_id');
    }

	protected function assignFormType()
	{
        $this->formType_id = $this->getType();
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
}
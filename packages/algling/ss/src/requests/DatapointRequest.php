<?php

namespace Algling\SS\Requests;

use Illuminate\Support\Facades\Auth;
use Illuminate\Foundation\Http\FormRequest;

class DatapointRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        return Auth::user() && Auth::user()->permissions->canEdit;
    }

    public function all()
    {
        $attributes = parent::all();

        foreach(parent::all() as $key => $value) {
            if(is_array($value)) {
                foreach($value as $subKey => $subValue) {
                    $attributes["{$key}_{$subKey}"] = $subValue;
                }
            }
        }

        $this->replace($attributes);

        return parent::all();
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules() {
    	$rules = [
    		'language.text' => ['required'],
    		'language.id'   => ['required', 'integer', 'exists:Languages,id'],
    		'variable.text' => ['required'],
    		'variable.id'   => ['required', 'integer', 'exists:SS_Variables,id'],
    		'value_id'      => ['required', 'integer', 'exists:SS_Values,id']
    	];

    	return $rules;
    }
}
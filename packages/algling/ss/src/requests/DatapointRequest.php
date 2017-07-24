<?php

namespace Algling\SS\Requests;

use Auth;
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

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules() {
    	$rules = [
    		'language'    => ['required'],
    		'language_id' => ['required', 'integer', 'exists:Languages,id'],
    		'variable'    => ['required'],
    		'variable_id' => ['required', 'integer', 'exists:SS_Variables,id'],
    		'value_id'    => ['required', 'integer', 'exists:SS_Values,id']
    	];

    	return $rules;
    }
}
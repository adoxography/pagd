<?php

namespace App\Http\Requests\Nominals;

use Auth;
use App\Http\Requests\Words\FormRequest as WordFormRequest;

class FormRequest extends WordFormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        return Auth::user() && Auth::user()->hasPermissionTo('add content');
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {
        $rules = parent::rules();

        if(!preg_match('/(^|-)[NV]($|-)/', request()->name)) {
            $rules += ['translation' => 'required'];
        }

        $rules += [
            'pronominalFeature'    => ['nullable'],
            'pronominalFeature_id' => ['nullable','exists:word_features,id'], 
            'nominalFeature'       => ['nullable'],
            'nominalFeature_id'    => ['nullable','exists:word_features,id'],
            'paradigm'             => ['required'],
            'paradigm_id'          => ['required','exists:nom_paradigms,id'], 
        ];

        return $rules;
    }
}

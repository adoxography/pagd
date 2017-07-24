<?php

namespace Algling\Nominals\Http\Requests;

use Auth;
use Algling\Words\Http\Requests\FormRequest as WordFormRequest;

class FormRequest extends WordFormRequest
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
    public function rules()
    {
        $rules = parent::rules();

        if(request()->morphemicForm && !preg_match('/N|V/', request()->morphemicForm)) {
            $rules += ['translation' => 'required'];
        }

        $rules += [
            'pronominalFeature'    => ['nullable'],
            'pronominalFeature_id' => ['nullable','exists:Word_Features,id'], 
            'nominalFeature'       => ['nullable'],
            'nominalFeature_id'    => ['nullable','exists:Word_Features,id'],
            'paradigm'             => ['required'],
            'paradigm_id'          => ['required','exists:Nom_Paradigms,id'], 
        ];

        return $rules;
    }
}

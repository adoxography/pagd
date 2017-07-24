<?php

namespace Algling\Nominals\Http\Requests;

use Auth;
use Illuminate\Foundation\Http\FormRequest;

class ParadigmRequest extends FormRequest
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
        $rules = [
            'language'        => ['required'],
            'language_id'     => ['required','integer','exists:Languages,id'],
            'paradigmType'    => ['required'],
            'paradigmType_id' => ['required','integer','exists:Nom_ParadigmTypes,id'],
            'name'            => ['required']
        ];

        // Check for duplicate paradigms

        return $rules;
    }
}

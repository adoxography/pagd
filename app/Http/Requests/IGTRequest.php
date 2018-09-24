<?php

namespace App\Http\Requests;

use Auth;
use Illuminate\Foundation\Http\FormRequest;

class IGTRequest extends FormRequest
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
        $rules = [
            'language'        => ['required'],
            'language_id'     => ['required','integer','exists:Languages,id'],
            'lines.*.type_id' => ['required','integer','exists:IGTLineTypes,id'],
            'lines.*.text'    => ['required']
        ];

        return $rules;
    }

    public function messages()
    {
        return [
            'language.required'    => 'Please enter a language.',
            'language_id.required' => 'There is no language by that name in the database.'
        ];
    }
}

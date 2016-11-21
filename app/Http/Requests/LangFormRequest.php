<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class LangFormRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {
        $rules = [
            'formData'               => ['required'],
            'formData.surfaceForm'   => ['required'],
            'formData.phoneticForm'  => ['nullable'],
            'formData.morphemicForm' => ['required'],
            'formData.language_id'   => ['required','integer','exists:Languages,id'],
            'formData.parent_id'     => ['nullable','integer','exists:Forms,id']
        ];

        return $rules;
    }
}

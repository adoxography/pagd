<?php

namespace App\Http\Requests;

use Illuminate\Support\Facades\Auth;
use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Contracts\Validation\Validator;

class LangFormRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        return Auth::user();
    }

    protected function formatErrors(Validator $validator)
    {
        return $validator->errors()->all();
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {
        $form = $this->route('form');

        $rules = [
            //Base form info
            'surfaceForm'        => ['required'],
            'phoneticForm'       => ['nullable'],
            'morphemicForm'      => ['nullable','has:V'],

            //Language Info
            'language_id'        => ['required','integer','exists:Languages,id'],
            'parent_id'          => ['nullable','exists:Forms,id',"different:{$form->id}"],
            'formData'           => ['required'],
            'subject_id'         => ['required','exists:Arguments,id'],           
            'primaryObject_id'   => ['nullable','integer','exists:Arguments,id'],
            'secondaryObject_id' => ['nullable','integer','exists:Arguments,id'],
            'class_id'           => ['required','integer','exists:Classes,id'],
            'order_id'           => ['required','integer','exists:Orders,id'],
            'mode_id'            => ['required','exists:Modes,id'],

            'isNegative'         => ['boolean'],
            'isDiminutive'       => ['boolean']
        ];

        return $rules;
    }

    public function messages(){
        return [
            'surfaceForm.required' => 'Please enter a surface form.',
            'morphemicForm.has'    => 'The morphemic form must include a placeholder for the Vstem.',
        ];
    }
    
}

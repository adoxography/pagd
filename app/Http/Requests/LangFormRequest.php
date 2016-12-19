<?php

namespace App\Http\Requests;

use Illuminate\Contracts\Validation\Validator;
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

    protected function formatErrors(Validator $validator)
    {
        //dd($validator);
        return $validator->errors()->all();
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {
        $rules = [
            //Base form info
            'surfaceForm'                   => ['required'],
            'phoneticForm'                  => ['nullable'],
            'morphemicForm'                 => ['nullable','has:V','morphemesExist:language_id'],

            //Language Info
            'language.name'                 => ['required','exists:Languages,name'],
            'language_id'                   => ['required','integer','exists:Languages,id'],
            'parent.name'                   => ['nullable','exists:Langauges,name'],
            'parent_id'                     => ['nullable','exists:Forms,id'],

            //Type info
            'formData'                      => ['required'],

            //Argument info
            'formType.subject.name'         => ['required','exists:Arguments,name'],
            'formType.subject_id'           => ['required','exists:Arguments,id'],
            'formType.primaryObject.name'   => ['nullable','exists:Arguments,name'],            
            'formType.primaryObject_id'     => ['nullable','integer','exists:Arguments,id'],
            'formType.secondaryObject.name' => ['nullable','exists:Arguments,name'],
            'formType.secondaryObject_id'   => ['nullable','integer','exists:Arguments,id'],

            //These are entered via radio button - no name is submitted
            'formType.class_id'             => ['required','integer','exists:Classes,id'],
            'formType.order_id'             => ['required','integer','exists:Orders,id'],

            'formType.mode.name'            => ['required','exists:Modes,name'],
            'formType.mode_id'              => ['required','exists:Modes,id'],

            'formType.isNegative'           => ['boolean'],
            'formType.isDiminutive'         => ['boolean']
        ];

        return $rules;
    }

    public function messages(){
        return [
            'surfaceForm.required'                 => 'Please enter a surface form.',
            'morphemicForm.has'                    => 'The morphemic form must include a placeholder for the Vstem.',
            'morphemicForm.morphemesExist'         => 'Not all of the morphemes could be found. Please validate the morphemic form.',
            'language.name.required'               => 'Please enter a language.',
            'language.name.exists'                 => 'There is no language by that name in the database.',
            'parent.name.exists'                   => 'There is no parent form by that name in the database.',
            'formType.subject.name.required'       => 'Please enter a subject.',
            'formType.subject.name.exists'         => 'There is no subject by that name in the database',            
            'formType.primaryObject.name.exists'   => 'There is no primary object by that name in the database',            
            'formType.secondaryObject.name.exists' => 'There is no secondary object by that name in the database',
            'formType.mode.name.required'          => 'Please enter a mode.',
            'formType.mode.name.exists'            => 'There is no mode by that name in the database.'
        ];
    }
    
}

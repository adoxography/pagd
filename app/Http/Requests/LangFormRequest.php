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
            'formData'                      => ['required'],
            'surfaceForm'                   => ['required'],
            'phoneticForm'                  => ['nullable'],
            'morphemicForm'                 => ['required','has:V'],
            'language.name'                 => ['required','exists:Languages,name'],
            'parent.name'                   => ['nullable','exists:Forms,surfaceForm'],
            'formType.subject.name'         => ['required','exists:Arguments,name'],            
            'formType.primaryObject.name'   => ['nullable','exists:Arguments,name'],            
            'formType.secondaryObject.name' => ['nullable','exists:Arguments,name'],
            'formType.class.name'           => ['required','exists:Classes,name'],
            'formType.mood.name'            => ['required','exists:Moods,name'],

            'language_id'         => ['required','integer','exists:Languages,id'],
            'formData.parent_id'  => ['nullable','integer','exists:Forms,id'],
            'subject_id'          => ['required','integer','exists:Arguments,id'],
            'primaryObject_id'    => ['nullable','integer','exists:Arguments,id'],
            'secondaryObject_id'  => ['nullable','integer','exists:Arguments,id'],
            'class_id'            => ['required','integer','exists:Classes,id'],
            'formType.order.id'   => ['required','integer','exists:Orders,id'],
            'mood_id'             => ['required','integer','exists:Moods,id'],
            'formType.tense.id'   => ['required','integer','exists:Tenses,id'],
            'formType.isAbsolute' => ['nullable'],
        ];

        return $rules;
    }

    public function messages(){
        return [
            'surfaceForm.required'                 => 'Please enter a surface form.',
            'morphemicForm.required'               => 'Please enter a morphemic form.',
            'morphemicForm.has'                    => 'The morphemic form must include a placeholder for the Vstem.',
            'language.name.required'               => 'Please enter a language.',
            'language.name.exists'                 => 'There is no language by that name in the database.',
            'parent.name.exists'                   => 'There is no parent form by that name in the database.',
            'formType.subject.name.required'       => 'Please enter a subject.',
            'formType.subject.name.exists'         => 'There is no subject by that name in the database',            
            'formType.primaryObject.name.exists'   => 'There is no primary object by that name in the database',            
            'formType.secondaryObject.name.exists' => 'There is no secondary object by that name in the database',
            'formType.class.name.required'         => 'Please enter a class.',
            'formType.class.name.exists'           => 'There is no class by that name in the database.',
            'formType.mood.name.required'          => 'Please enter a mood.',
            'formType.mood.name.exists'            => 'There is no mood by that name in the database.'
        ];
    }
    
}

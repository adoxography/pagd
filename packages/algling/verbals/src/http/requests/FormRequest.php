<?php

namespace Algling\Verbals\Http\Requests;

use Illuminate\Support\Facades\Auth;
use Illuminate\Foundation\Http\FormRequest as Request;
use Illuminate\Contracts\Validation\Validator;

class FormRequest extends Request
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
            //Base form info
            'surfaceForm'        => ['required_without:empty'],
            'phoneticForm'       => ['nullable'],
            'morphemicForm'      => ['nullable','has:V'],

            //Language Info
            'language'           => ['required'],
            'language_id'        => ['required','integer','exists:Languages,id'],
            'parent_id'          => ['nullable','exists:Forms,id'],
            'subject'            => ['required'],
            'subject_id'         => ['required','exists:Arguments,id'],  
            'primaryObject'      => ['nullable','exists:Arguments,name'],         
            'primaryObject_id'   => ['nullable','integer','exists:Arguments,id'],
            'secondaryObject'    => ['nullable','exists:Arguments,name'],  
            'secondaryObject_id' => ['nullable','integer','exists:Arguments,id'],
            'verbClass'          => ['required'],
            'verbClass_id'       => ['required','integer','exists:Classes,id'],
            'order'              => ['required'],
            'order_id'           => ['required','integer','exists:Orders,id'],
            'mode'               => ['required'],
            'mode_id'            => ['required','exists:Modes,id'],
            'isAbsolute'         => ['nullable']
        ];

        switch($this->method()){
            case 'POST':
                break;
            case 'PATCH':
                    $form = $this->route('form');

                    $rules['parent_id'][] = "nomatch:{$form->id}";
                break;
            default:
                break;
        }//switch

        return $rules;
    }

    public function messages(){
        return [
            'surfaceForm.required' => 'Please enter a surface form.',
            'surfaceForm.required_without' => 'Please enter a surface form.',
            'language.required' => 'Please enter a language.',
            'language_id.required'   => 'There is no language by that name in the database.',
            'subject.required' => 'Please enter a subject.',
            'subject_id.required' => 'There is no subject by that name in the database.',
            'primaryObject.exists' => 'There is no primary object by that name in the database',
            'secondaryObject.exists' => 'There is no secondary object by that name in the database',
            'class.required' => 'Please enter a class.',
            'class_id.required'   => 'There is no class by that name in the database.',
            'order.required' => 'Please enter a order.',
            'order_id.required'   => 'There is no order by that name in the database.',
            'mode.required' => 'Please enter a mode.',
            'mode_id.required'   => 'There is no mode by that name in the database.',

            'morphemicForm.has'    => 'Please inclue a placeholder for the Vstem.',
            'parent_id.nomatch'    => 'A form cannot be its own parent!'
        ];
    }
    
}

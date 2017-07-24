<?php

namespace Algling\Verbals\Http\Requests;

use Algling\Words\Http\Requests\FormRequest as Request;

class FormRequest extends Request
{
    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {
        $rules = parent::rules();

        $rules += [
            'morphemicForm' => ['nullable','has:V'],
            
            'subject'            => ['required'],
            'subject_id'         => ['required','exists:Word_Features,id'],  
            'primaryObject'      => ['nullable','exists:Word_Features,name'],         
            'primaryObject_id'   => ['nullable','integer','exists:Word_Features,id'],
            'secondaryObject'    => ['nullable','exists:Word_Features,name'],  
            'secondaryObject_id' => ['nullable','integer','exists:Word_Features,id'],
            'verbClass'          => ['required'],
            'verbClass_id'       => ['required','integer','exists:Verb_Classes,id'],
            'order'              => ['required'],
            'order_id'           => ['required','integer','exists:Verb_Orders,id'],
            'mode'               => ['required'],
            'mode_id'            => ['required','exists:Verb_Modes,id'],
            'isAbsolute'         => ['nullable']
        ];

        return $rules;
    }

    public function messages(){
        $messages = parent::messages();

        $messages += [
            'subject.required' => 'Please enter a subject.',
            'subject_id.required' => 'There is no subject by that name in the database.',
            'primaryObject.exists' => 'There is no primary object by that name in the database',
            'secondaryObject.exists' => 'There is no secondary object by that name in the database',
            'class.required' => 'Please enter a class.',
            'class_id.required'   => 'There is no class by that name in the database.',
            'order.required' => 'Please enter a order.',
            'order_id.required'   => 'There is no order by that name in the database.',
            'mode.required' => 'Please enter a mode.',
            'mode_id.required'   => 'There is no mode by that name in the database.'
        ];

        return $messages;
    }
    
}

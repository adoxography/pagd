<?php

namespace Algling\Verbals\Http\Requests;

use Illuminate\Support\Facades\Auth;
use Algling\Words\Http\Requests\FormRequest as Request;
use Illuminate\Contracts\Validation\Validator;

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

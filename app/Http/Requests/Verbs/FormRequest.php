<?php

namespace App\Http\Requests\Verbs;

use App\Http\Requests\Words\FormRequest as Request;

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
            'subject_id'         => ['required','exists:word_features,id'],
            'primary_object_id'   => ['nullable','integer','exists:word_features,id'],
            'secondary_object_id' => ['nullable','integer','exists:word_features,id'],
            'verb_class_id'       => ['required','integer','exists:verb_classes,id'],
            'order'              => ['required'],
            'order_id'           => ['required','integer','exists:verb_orders,id'],
            'mode'               => ['required'],
            'mode_id'            => ['required','exists:verb_modes,id'],
            'is_absolute'         => ['nullable']
        ];

        return $rules;
    }

    public function messages()
    {
        $messages = parent::messages();

        $messages += [
            'subject.required' => 'Please enter a subject.',
            'subject_id.required' => 'There is no subject by that name in the database.',
            'class_id.required'   => 'There is no class by that name in the database.',
            'order_id.required'   => 'There is no order by that name in the database.',
            'mode_id.required'   => 'There is no mode by that name in the database.'
        ];

        return $messages;
    }
}

<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class MorphemeRequest extends FormRequest
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
        return [
            'name'            => ['required'],
            'gloss_id'        => ['required','integer','exists:Glosses,id'],
            'slot_id'         => ['required','integer','exists:Slots,id'],
            'language_id'     => ['required','integer','exists:Languages,id'],
            'parent_id'       => ['nullable','integer'],
            'allomorphyNotes' => ['nullable'],
            'historicalNotes' => ['nullable'],
            'comments'        => ['nullable']
        ];
    }
}

<?php

namespace Algling\Words\Http\Requests;

use Auth;
use Illuminate\Foundation\Http\FormRequest;

class ExampleRequest extends FormRequest
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
        return [
            'language'      => ['required','exists:Languages,name'],
            'language_id'   => ['required','exists:Languages,id'],
            'form'          => ['required'],
            'form_id'       => ['required','exists:Word_Forms,id'],
            'name'          => ['required'],
            'translation'   => ['required'],
            'comments'      => ['nullable'],
            'notes'         => ['nullable'],
            'morphemicForm' => ['nullable', 'notHas:V']
        ];
    }

    public function messages()
    {
        return [
            'morphemicForm.not_has' => 'Please replace the vStem placeholder with a morpheme.'
        ];
    }
}

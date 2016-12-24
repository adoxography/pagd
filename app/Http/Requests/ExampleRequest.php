<?php

namespace App\Http\Requests;

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
            'language.name' => ['required','exists:Languages,name'],
            'language_id'   => ['required','exists:Languages,id'],
            'form'          => ['required'],
            'form_id'       => ['required','exists:Forms,id'],
            'name'          => ['required'],
            'translation'   => ['required'],
            'comments'      => ['nullable']
        ];
    }
}

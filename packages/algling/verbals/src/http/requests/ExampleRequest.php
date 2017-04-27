<?php

namespace Algling\Verbals\Http\Requests;

use Illuminate\Support\Facades\Auth;
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

    public function all()
    {
        $attributes = parent::all();

        foreach(parent::all() as $key => $value) {
            if(is_array($value)) {
                foreach($value as $subKey => $subValue) {
                    $attributes["{$key}_{$subKey}"] = $subValue;
                }
            }
        }

        $this->replace($attributes);

        return parent::all();
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {
        return [
            'language.text' => ['required','exists:Languages,name'],
            'language.id'   => ['required','exists:Languages,id'],
            'form.text'     => ['required'],
            'form.id'       => ['required','exists:Forms,id'],
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

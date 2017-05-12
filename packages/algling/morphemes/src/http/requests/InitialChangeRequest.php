<?php

namespace Algling\Morphemes\Http\Requests;

use Illuminate\Support\Facades\Auth;
use Illuminate\Foundation\Http\FormRequest;

class InitialChangeRequest extends FormRequest
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
            'language.text'   => ['required'],
            'language.id'     => ['required','integer','exists:Languages,id'],
            'morpheme.text'   => ['required'],
            'morpheme.id'     => ['required','integer','exists:Morph_Morphemes,id'],
            'change'          => ['required','isMorpheme']
        ];
    }

    public function messages()
    {
        return [
            'language.text.required' => 'Please enter a language.',
            'language.id.required'   => 'There is no language by that name in the database.',
            'morpheme.text.required' => 'Please enter a morpheme.',
            'morpheme.id.required'   => 'There is no morpheme by that name in the database.',
        ];
    }
}

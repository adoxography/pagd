<?php

namespace Algling\Morphemes\Http\Requests;

use Illuminate\Support\Facades\Auth;
use Illuminate\Database\QueryException;
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
        return Auth::user();
    }

    public function all()
    {
        $attributes = parent::all();

        if(!isset($attributes['modified'])) {
            foreach(parent::all() as $key => $value) {
                if(is_array($value)) {
                    foreach($value as $subKey => $subValue) {
                        $attributes["{$key}_{$subKey}"] = $subValue;
                    }
                }
            }

            $attributes['modified'] = true;

            $this->replace($attributes);
        }

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
            'name'            => ['required','isMorpheme'],
            'alternateName'   => ['nullable','isMorpheme'],
            'gloss'           => ['required'],
            'slot.text'       => ['required'],
            'slot.id'         => ['required','integer','exists:Slots,id'],
            'language.text'   => ['required'],
            'language.id'     => ['required','integer','exists:Languages,id'],
            'parent.id'       => ['nullable','integer'],
            'allomorphyNotes' => ['nullable'],
            'historicalNotes' => ['nullable'],
            'comments'        => ['nullable']
        ];
    }

    public function messages(){
        return [
            'gloss.required'         => 'Please enter a gloss.',
            'slot.text.required'     => 'Please enter a slot.',
            'slot.id.required'       => 'There is no slot by that name in the database.',            
            'language.text.required' => 'Please enter a language.',
            'language.id.required'   => 'There is no language by that name in the database.',
        ];
    }
}

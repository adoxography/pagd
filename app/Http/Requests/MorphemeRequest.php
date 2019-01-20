<?php

namespace App\Http\Requests;

use Auth;
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
        return Auth::user() && Auth::user()->hasPermissionTo('add content');
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
            'gloss'           => ['required'],
            'slot'            => ['required'],
            'slot_id'         => ['required','integer','exists:morph_slots,id'],
            'language'        => ['required'],
            'language_id'     => ['required','integer','exists:languages,id'],
            'parent_id'       => ['nullable','integer','exists:morph_morphemes,id'],
            'allomorphyNotes' => ['nullable'],
            'historicalNotes' => ['nullable'],
            'privateNotes'    => ['nullable']
        ];
    }

    public function messages(){
        return [
            'gloss.required'       => 'Please enter a gloss.',
            'slot.required'        => 'Please enter a slot.',
            'slot_id.required'     => 'There is no slot by that name in the database.',
            'language.required'    => 'Please enter a language.',
            'language_id.required' => 'There is no language by that name in the database.',
        ];
    }
}

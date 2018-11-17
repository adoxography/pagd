<?php

namespace App\Http\Requests\Phonology;

use Auth;
use Illuminate\Foundation\Http\FormRequest;

class ReflexRequest extends FormRequest
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
            'environment' => ['nullable'],
            'publicNotes' => ['nullable'],
            'privateNotes' => ['nullable'],
            'language' => ['required', 'exists:Languages,name'],
            'language_id' => ['required', 'integer', 'exists:Languages,id'],
            'parent' => ['required'],
            'parent_id' => ['required', 'integer', 'exists:Phon_Phonemes,id'],
            'reflex' => ['nullable', 'required_without:deleted'],
            'reflex_id' => ['nullable', 'required_without:deleted', 'integer', 'exists:Phon_Phonemes,id']
        ];
    }
}

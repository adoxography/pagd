<?php

namespace Algling\Phonology\Http\Requests;

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
            'parent' => ['required'],
            'parent_id' => ['required', 'integer', 'exists:Phon_Phonemes,id'],
            'reflex' => ['nullable', 'required_without:deleted'],
            'reflex_id' => ['nullable', 'required_without:deleted', 'integer', 'exists:Phon_Phonemes,id']
        ];
    }
}

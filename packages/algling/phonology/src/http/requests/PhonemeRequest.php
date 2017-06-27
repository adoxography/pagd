<?php

namespace Algling\Phonology\Http\Requests;

use Auth;
use Illuminate\Validation\Rule;
use Illuminate\Foundation\Http\FormRequest;

class PhonemeRequest extends FormRequest
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
        $rules = [
            // General phoneme rules
            'algoName'         => ['required'],
            'language'         => ['required', 'exists:Languages,name'],
            'language_id'      => ['required', 'integer', 'exists:Languages,id'],
            'phonemeable_type' => ['required', Rule::in(['vowelTypes', 'consonantTypes', 'clusterTypes'])],

            // Vowel rules
            'height'      => ['required_if:phonemeable_type,vowels', 'exists:Phon_Heights,name'],
            'height_id'   => ['required_if:phonemeable_type,vowels', 'integer', 'exists:Phon_Heights,id'],
            'backness'    => ['required_if:phonemeable_type,vowels', 'exists:Phon_Backnesses,name'],
            'backness_id' => ['required_if:phonemeable_type,vowels', 'integer', 'exists:Phon_Backnesses,id'],
            'length'      => ['nullable', 'exists:Phon_Lengths,name'],
            'length_id'   => ['nullable', 'exists:Phon_Lengths,id'],

            // Consonant rules
            'place'      => ['required_if:phonemeable_type,consonants', 'exists:Phon_Places,name'],
            'place_id'   => ['required_if:phonemeable_type,consonants', 'integer', 'exists:Phon_Places,id'],
            'manner'     => ['required_if:phonemeable_type,consonants', 'exists:Phon_Manners,name'],
            'manner_id'  => ['required_if:phonemeable_type,consonants', 'integer', 'exists:Phon_Manners,id'],
            'voicing'    => ['nullable', 'exists:Phon_Voicings,name'],
            'voicing_id' => ['nullable', 'exists:Phon_Voicings,id'],

            // Cluster rules
            'firstSegment'     => ['required_if:phonemeable_type,clusters'],
            'firstSegment_id'  => ['required_if:phonemeable_type,clusters', 'integer', 'exists:Phon_Phonemes,id'],
            'secondSegment'    => ['required_if:phonemeable_type,clusters'],
            'secondSegment_id' => ['required_if:phonemeable_type,clusters', 'integer', 'exists:Phon_Phonemes,id'],   
        ];

        return $rules;
    }
}

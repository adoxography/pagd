<?php

namespace App\Http\Requests\Phonology;

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
        return Auth::user() && Auth::user()->hasPermissionTo('add content');
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
            'algo_name'        => ['required'],
            'language'         => ['required', 'exists:Languages,name'],
            'language_id'      => ['required', 'integer', 'exists:Languages,id'],
            'featureable_type' => ['required'],
            'isArchiphoneme'   => ['boolean'],
            'archiphonemeDescription' => ['required_with:isArchiphoneme'],

            // Vowel rules
            'length'      => ['nullable', 'exists:Phon_Lengths,name'],
            'length_id'   => ['nullable', 'exists:Phon_Lengths,id'],

            // Consonant rules
            'voicing'    => ['nullable', 'exists:Phon_Voicings,name'],
            'voicing_id' => ['nullable', 'exists:Phon_Voicings,id'],

            // Cluster rules
            'firstSegment'      => ['required_if:featureable_type,clusters'],
            'first_segment_id'  => ['required_if:featureable_type,clusters', 'integer', 'exists:Phon_Phonemes,id'],
            'secondSegment'     => ['required_if:featureable_type,clusters'],
            'second_segment_id' => ['required_if:featureable_type,clusters', 'integer', 'exists:Phon_Phonemes,id'],
        ];

        if (!request()->isArchiphoneme) {
            $rules = array_merge($rules, [
                'height'      => ['required_if:featureable_type,vowels', 'exists:Phon_Heights,name'],
                'height_id'   => ['required_if:featureable_type,vowels', 'integer', 'exists:Phon_Heights,id'],
                'backness'    => ['required_if:featureable_type,vowels', 'exists:Phon_Backnesses,name'],
                'backness_id' => ['required_if:featureable_type,vowels', 'integer', 'exists:Phon_Backnesses,id'],

                'place'     => ['required_if:featureable_type,consonants', 'exists:Phon_Places,name'],
                'place_id'  => ['required_if:featureable_type,consonants', 'integer', 'exists:Phon_Places,id'],
                'manner'    => ['required_if:featureable_type,consonants', 'exists:Phon_Manners,name'],
                'manner_id' => ['required_if:featureable_type,consonants', 'integer', 'exists:Phon_Manners,id'],
            ]);

            $rules['featureable_type'][] = Rule::in(['vowelTypes', 'consonantTypes', 'clusterTypes']);
        } else {
            $rules['featureable_type'][] = Rule::in(['vowelTypes', 'consonantTypes']);
        }

        return $rules;
    }
}

<?php

namespace App\Http\Requests;

use Auth;
use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Validation\Rule;

class AudioRequest extends FormRequest
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
            'language' => ['required','exists:Languages,name'],
            'language_id' => ['required', 'integer', 'exists:Languages,id'],
            'comments' => 'nullable',
            'name' => [
                'required',
                'string',
                Rule::unique('Audio', 'name')->where(function ($query) {
                    $query->where('language_id', request()->language_id);
                })
            ],
            'clip' => ['file', 'mimetypes:audio/*']
        ];

        switch (request()->method()) {
            case 'post':
                $rules['clip'][] = 'required';
                break;

            case 'patch':
                $rules['clip'][] = 'nullable';
            
            default:
                break;
        }

        return $rules;
    }
}

<?php

namespace App\Http\Requests;

use Illuminate\Validation\Rule;
use Auth;
use Illuminate\Foundation\Http\FormRequest;

class LanguageRequest extends FormRequest
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
            'group'         => ['required'],
            'group_id'      => ['required','integer','exists:groups,id'],
            'parent'        => ['nullable','exists:languages,name'],
            'parent_id'     => ['nullable','integer','exists:languages,id'],
            'reconstructed' => ['required','in:true,false'],
            'name'          => ['required'],
            'iso'           => ['nullable', 'size:3'],
            'algo_code'     => ['required', 'between:1,5'],
            'location.type' => ['nullable', 'in:point,area'],
            'location.position' => ['nullable', 'json']
        ];

        switch ($this->method()) {
            case 'POST':
                    $rules['name'][]     = 'unique:languages,name';
                    $rules['iso'][]      = 'unique:languages,iso';
                    $rules['algo_code'][] = 'unique:languages,algo_code';
                break;
            case 'PATCH':
                    $language = $this->route('language');

                    $rules['name'][]      = Rule::unique('languages', 'name')->ignore($language->id);
                    $rules['iso'][]       = Rule::unique('languages', 'iso')->ignore($language->id);
                    $rules['algo_code'][]  = Rule::unique('languages', 'algo_code')->ignore($language->id);
                    $rules['parent_id'][] = "nomatch:{$language->id}";
                break;
            default:
                break;
        }

        return $rules;
    }

    public function messages()
    {
        return [
            'group.required'      => 'Please enter a group.',
            'group_id.required'   => 'There is no group by that name in the database.',
            'parent.exists'       => 'There is no language by that name in the databse.',
            'parent_id.nomatch'   => 'A language cannot be its own parent!',
            'iso.unique'          => 'That ISO is already in use.',
            'algo_code.unique'     => 'That algonquianist code is already in use.',
        ];
    }
}

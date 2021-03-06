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
            'group_id'      => ['required','integer','exists:Groups,id'],
            'parent'        => ['nullable','exists:Languages,name'],
            'parent_id'     => ['nullable','integer','exists:Languages,id'],
            'reconstructed' => ['required','boolean'],
            'name'          => ['required'],
            'iso'           => ['nullable', 'size:3'],
            'algoCode'      => ['required', 'between:1,5'],
            'location.type' => ['nullable', 'in:point,area'],
            'location.position' => ['nullable', 'json']
        ];

        switch ($this->method()) {
            case 'POST':
                    $rules['name'][]     = 'unique:Languages,name';
                    $rules['iso'][]      = 'unique:Languages,iso';
                    $rules['algoCode'][] = 'unique:Languages,algoCode';
                break;
            case 'PATCH':
                    $language = $this->route('language');

                    $rules['name'][]      = Rule::unique('Languages', 'name')->ignore($language->id);
                    $rules['iso'][]       = Rule::unique('Languages', 'iso')->ignore($language->id);
                    $rules['algoCode'][]  = Rule::unique('Languages', 'algoCode')->ignore($language->id);
                    $rules['parent_id'][] = "nomatch:{$language->id}";
                break;
            default:
                break;
        }//switch

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
            'algoCode.unique'     => 'That algonquianist code is already in use.',
        ];
    }
}

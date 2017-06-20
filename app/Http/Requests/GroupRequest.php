<?php

namespace App\Http\Requests;

use \Auth;
use Illuminate\Validation\Rule;
use Illuminate\Foundation\Http\FormRequest;

class GroupRequest extends FormRequest
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
            'name'      => ['required'],
            'parent'    => ['nullable','exists:Groups,name'],
            'parent_id' => ['nullable','integer','exists:Groups,id'],
        ];

        switch($this->method()){
            case 'POST':
                $rules['name'][] = 'unique:Groups,name';
                break;
            case 'PATCH':
                $group = $this->route('group');

                $rules['name'][]      = Rule::unique('Groups','name')->ignore($group->id);
                $rules['parent_id'][] = "nomatch:{$group->id}";
                break;
            default:
                break;
        }

        return $rules;
    }

    public function messages()
    {
        return [
            'parent.exists'       => 'There is no language by that name in the databse.',
            'parent_id.nomatch'   => 'A language cannot be its own parent!'
        ];
    }
}

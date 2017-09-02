<?php

namespace App\Http\Requests;

use Auth;
use Illuminate\Foundation\Http\FormRequest;

class RuleRequest extends FormRequest
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
        $id = 'NULL';
        $language_id = request()->get('language_id');

        if ($this->method() == 'PATCH') {
            $id = $this->route('rule')->id;
        }

        $rules = [
            'name'        => ['required', "unique:Rules,name,$id,id,language_id,$language_id"],
            'abv'         => ['required', "unique:Rules,abv,$id,id,language_id,$language_id"],
            'language'    => ['required', 'exists:Languages,name'],
            'language_id' => ['required', 'integer', 'exists:Languages,id'],
            'type'        => ['required', 'exists:RuleTypes,name'],
            'type_id'     => ['required', 'integer', 'exists:RuleTypes,id']
        ];

        return $rules;
    }

    public function messages()
    {
        return [
            'language.exists' => 'There is no language by that name in the database',
            'language_id.required' => 'There is no language by that name in the database.',
            'type.exists' => 'There is no type by that name in the database',
            'type_id.required' => 'There is no type by that name in the database.',
        ];
    }
}

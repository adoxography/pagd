<?php

namespace App\Http\Requests;

use Illuminate\Validation\Rule;
use Auth;
use Illuminate\Foundation\Http\FormRequest;

class VariableRequest extends FormRequest
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
            'name' => ['required'],
            'type_id' => ['required', 'integer', 'exists:SS_Types,id'],
            'description' => ['required'],
            'values' => ['required','array','min:2']
        ];

        switch($this->method()) {
            case 'POST':
                $rules['name'][] = 'unique:SS_Variables,name';
                break;
            case 'PATCH':
                $variable = $this->route('variable');

                $rules['name'][] = Rule::unique('SS_Variables','name')->ignore($variable->id);
                break;
            default:
                break;
        }

        return $rules;
    }
}

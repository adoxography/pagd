<?php

namespace App\Http\Requests;

use Illuminate\Validation\Rule;
use Illuminate\Support\Facades\Auth;
use Illuminate\Foundation\Http\FormRequest;

class RuleRequest extends FormRequest
{
    public function all()
    {
        $attributes = parent::all();

        foreach(parent::all() as $key => $value) {
            if(is_array($value)) {
                foreach($value as $subKey => $subValue) {
                    $attributes["{$key}_{$subKey}"] = $subValue;
                }
            }
        }

        $this->replace($attributes);

        return parent::all();
    }

    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        return Auth::user();
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

        if($this->method() == 'PATCH') {
            $id = $this->route('rule')->id;
        }

        $rules = [
            'name' => ['required', "unique:Rules,name,$id,id,language_id,$language_id"],
            'abv'  => ['required', "unique:Rules,abv,$id,id,language_id,$language_id"],
            'language.text' => ['required', 'exists:Languages,name'],
            'language.id' => ['required', 'integer', 'exists:Languages,id']
        ];

        return $rules;
    }

    public function messages(){
        return [
            'language.text.exists' => 'There is no language by that name in the database',
            'language.id.required' => 'There is no language by that name in the database.'
        ];
    }
}

<?php

namespace App\Http\Requests;

use App\Language;
use Illuminate\Validation\Rule;
use Illuminate\Support\Facades\Log;
use Illuminate\Support\Facades\Auth;
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
        return Auth::user();
    }

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
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {
        $rules = [
            'group.text'    => ['required'],
            'group.id'      => ['required','integer','exists:Groups,id'],
            'parent.text'   => ['nullable','exists:Languages,name'],
            'parent.id'     => ['nullable','integer','exists:Languages,id'],
            'reconstructed' => ['required','boolean'],
            'name'          => ['required'],
            'iso'           => ['required', 'size:3'],
            'algoCode'      => ['required', 'between:1,5']
        ];

        switch($this->method()){
            case 'POST':
                    $rules['name'][]     = 'unique:Languages,name';
                    $rules['iso'][]      = 'unique:Languages,iso';
                    $rules['algoCode'][] = 'unique:Languages,algoCode';
                break;
            case 'PATCH':
                    $language = $this->route('language');

                    $rules['name'][]      = Rule::unique('Languages','name')->ignore($language->id);
                    $rules['iso'][]       = Rule::unique('Languages','iso')->ignore($language->id);
                    $rules['algoCode'][]  = Rule::unique('Languages','algoCode')->ignore($language->id);
                    $rules['parent_id'][] = "nomatch:{$language->id}";
                break;
            default:
                break;
        }//switch

        return $rules;
    }

    public function withValidator($validator) 
    {
        Log::debug(['validator result' => $validator->attributes()]);

        $validator->after(function ($validator) {            
            foreach($validator->errors()->get('group.text') as $error) {
                $validator->errors()->add('group', $error);
            }            
            foreach($validator->errors()->get('group.id') as $error) {
                $validator->errors()->add('group', $error);
            }

            foreach($validator->errors()->get('parent.text') as $error) {
                $validator->errors()->add('parent', $error);
            }
            foreach($validator->errors()->get('parent.id') as $error) {
                $validator->errors()->add('parent', $error);
            }
        });
    }

    public function messages(){
        return [
            'group.text.required' => 'Please enter a group.',
            'group.id.required'   => 'There is no group by that name in the database.',
            'parent.text.exists'  => 'There is no language by that name in the databse.',
            'parent.id.nomatch'   => 'A language cannot be its own parent!',
            'iso.unique' => 'That ISO is already in use.',
            'algoCode.unique' => 'That algonquianist code is already in use.',
        ];
    }
}

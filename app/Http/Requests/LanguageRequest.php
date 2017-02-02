<?php

namespace App\Http\Requests;

use App\Language;
use Illuminate\Validation\Rule;
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

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {
        $rules = [
            'group_id'      => ['required','integer','exists:Groups,id'],
            'parent_id'     => ['nullable','integer','exists:Languages,id'],
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

    public function messages(){
        return [
            'parent_id.nomatch'    => 'A language cannot be its own parent!'
        ];
    }
}

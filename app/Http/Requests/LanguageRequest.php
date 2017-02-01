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
            'group_id'  => ['required','integer','exists:Groups,id'],
            'parent_id' => ['nullable','integer','exists:Languages,id'],
            'reconstructed' => ['required','boolean']
        ];

        switch($this->method()){
            case 'POST':
                    $rules['name']     = ['required','unique:Languages,name'];
                    $rules['iso']      = ['required','unique:Languages,iso','size:3'];
                    $rules['algoCode'] = ['required','unique:Languages,algoCode','between:1,5'];
                break;
            case 'PATCH':
                    $language = $this->route('language');

                    $rules['name']     = ['required', Rule::unique('Languages','name')->ignore($language->id)];
                    $rules['iso']      = ['required', Rule::unique('Languages','iso')->ignore($language->id), 'size:3'];
                    $rules['algoCode'] = ['required', Rule::unique('Languages','algoCode')->ignore($language->id), 'between:1,5'];
                break;
            default:
                break;
        }//switch

        return $rules;
    }
}

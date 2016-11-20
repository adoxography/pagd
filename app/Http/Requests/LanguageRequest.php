<?php

namespace App\Http\Requests;

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
        return true;
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
        ];

        switch($this->method()){
            case 'GET':
                    $rules['name']     = ['required','unique:Languages,name'];
                    $rules['iso']      = ['required','unique:Languages,iso','size:3'];
                    $rules['algoCode'] = ['required','unique:Languages,algoCode','size:3'];
                break;
            case 'PATCH':
                    $rules['name']     = ['required'];
                    $rules['iso']      = ['required','size:3'];
                    $rules['algoCode'] = ['required','size:3'];
                break;
            default:
                break;
        }//switch

        return $rules;
    }
}

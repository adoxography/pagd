<?php

namespace Algling\Words\Http\Requests;

use Illuminate\Support\Facades\Auth;
use Illuminate\Foundation\Http\FormRequest as Request;
use Illuminate\Contracts\Validation\Validator;

class FormRequest extends Request
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
            //Base form info
            'name'          => ['required_without:empty'],
            'phoneticForm'  => ['nullable'],

            //Language Info
            'language'    => ['required'],
            'language_id' => ['required','integer','exists:Languages,id'],
            'parent_id'   => ['nullable','exists:Word_Forms,id']
        ];

        switch($this->method()){
            case 'POST':
                break;
            case 'PATCH':
                if($this->route('verbForm')) {
                    $form = $this->route('verbForm');
                } else {
                    $form = $this->route('nominalForm');
                }

                $rules['parent_id'][] = "nomatch:{$form->id}";
                break;
            default:
                break;
        }//switch

        return $rules;
    }

    public function messages(){
        return [
            'name.required'         => 'Please enter a surface form.',
            'name.required_without' => 'Please enter a surface form.',
            'language.required'     => 'Please enter a language.',
            'language_id.required'  => 'There is no language by that name in the database.',
            'morphemicForm.has'     => 'Please inclue a placeholder for the Vstem.',
            'parent_id.nomatch'     => 'A form cannot be its own parent!'
        ];
    }
    
}

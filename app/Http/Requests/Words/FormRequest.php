<?php

namespace App\Http\Requests\Words;

use Auth;
use Illuminate\Foundation\Http\FormRequest as Request;

class FormRequest extends Request
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
            //Base form info
            'name'          => ['required_without:empty'],
            'phoneticForm'  => ['nullable'],

            //Language Info
            'language'    => ['required'],
            'language_id' => ['required','integer','exists:languages,id'],
            'parent_id'   => ['nullable','exists:word_forms,id']
        ];

        switch ($this->method()) {
            case 'POST':
                break;
            case 'PATCH':
                if ($this->route('verbForm')) {
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

    public function messages()
    {
        return [
            'name.required'         => 'Please enter a surface form.',
            'name.required_without' => 'Please enter a surface form.',
            'language.required'     => 'Please enter a language.',
            'language_id.required'  => 'There is no language by that name in the database.',
            'parent_id.nomatch'     => 'A form cannot be its own parent!'
        ];
    }
}

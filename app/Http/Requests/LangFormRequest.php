<?php

namespace App\Http\Requests;

use App\FormType;
use Illuminate\Support\Facades\Auth;
use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Contracts\Validation\Validator;

class LangFormRequest extends FormRequest
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

        $attributes['formType_id'] = $this->getType($attributes);

        $this->replace($attributes);

        return parent::all();
    }

    private function getType($attributes)
    {
        $data = $this->parseFormTypeData($attributes);
        $type = null;

        //Try to find the type in the database
        $rules = $this->convertToRules($data);
        $type = FormType::where($data)->first();

        //If it's not there, create a new one
        if (!$type) {
            $type = FormType::create(array_filter($data, 'strlen'));
        }

        return $type->id;
    }

    private function parseFormTypeData($attributes)
    {
        $data['subject_id']         = $attributes['subject_id'];
        $data['primaryObject_id']   = $attributes['primaryObject_id'];
        $data['secondaryObject_id'] = $attributes['secondaryObject_id'];
        $data['mode_id']            = $attributes['mode_id'];
        $data['class_id']           = $attributes['class_id'];
        $data['order_id']           = $attributes['order_id'];
        $data['isNegative']         = $attributes['isNegative'] ? 1 : 0;
        $data['isDiminutive']       = $attributes['isDiminutive'] ? 1 : 0;
        $data['isAbsolute']         = $attributes['isAbsolute'];
        $data['head']               = $attributes['head'];

        return $data;
    }

    private function convertToRules($data)
    {
        $rules = array();

        foreach ($data as $key => $value) {
            if ($value === "") {
                $value = null;
            }
            array_push($rules, [$key, $value]);
        }

        return $rules;
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
            'surfaceForm'          => ['required_without:empty'],
            'phoneticForm'         => ['nullable'],
            'morphemicForm'        => ['nullable','has:V'],

            //Language Info
            'language.text'        => ['required'],
            'language.id'          => ['required','integer','exists:Languages,id'],
            'parent.id'            => ['nullable','exists:Forms,id'],
            'subject.text'         => ['required'],
            'subject.id'           => ['required','exists:Arguments,id'],  
            'primaryObject.text'   => ['nullable','exists:Arguments,name'],         
            'primaryObject.id'     => ['nullable','integer','exists:Arguments,id'],
            'secondaryObject.text' => ['nullable','exists:Arguments,name'],  
            'secondaryObject.id'   => ['nullable','integer','exists:Arguments,id'],
            'class.text'           => ['required'],
            'class.id'             => ['required','integer','exists:Classes,id'],
            'order.text'           => ['required'],
            'order.id'             => ['required','integer','exists:Orders,id'],
            'mode.text'            => ['required'],
            'mode.id'              => ['required','exists:Modes,id'],

            'isNegative'           => ['boolean'],
            'isDiminutive'         => ['boolean'],
            'isAbsolute'           => ['nullable', 'boolean']
        ];

        switch($this->method()){
            case 'POST':
                break;
            case 'PATCH':
                    $form = $this->route('form');

                    $rules['parent.id'][] = "nomatch:{$form->id}";
                break;
            default:
                break;
        }//switch

        return $rules;
    }

    public function messages(){
        return [
            'surfaceForm.required' => 'Please enter a surface form.',
            'language.text.required' => 'Please enter a language.',
            'language.id.required'   => 'There is no language by that name in the database.',
            'subject.text.required' => 'Please enter a subject.',
            'subject.id.required' => 'There is no subject by that name in the database.',
            'primaryObject.text.exists' => 'There is no primary object by that name in the database',
            'secondaryObject.text.exists' => 'There is no secondary object by that name in the database',
            'class.text.required' => 'Please enter a class.',
            'class.id.required'   => 'There is no class by that name in the database.',
            'order.text.required' => 'Please enter a order.',
            'order.id.required'   => 'There is no order by that name in the database.',
            'mode.text.required' => 'Please enter a mode.',
            'mode.id.required'   => 'There is no mode by that name in the database.',

            'morphemicForm.has'    => 'Please inclue a placeholder for the Vstem.',
            'parent.id.nomatch'    => 'A form cannot be its own parent!'
        ];
    }
    
}

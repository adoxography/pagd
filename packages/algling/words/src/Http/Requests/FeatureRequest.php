<?php

namespace Algling\Words\Http\Requests;

use Auth;
use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Validation\Rule;

class FeatureRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        return Auth::user() && Auth::user()->hasAnyRole(['developer', 'leader']);
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {
        return [
            'name' => 'required',
            'person' => ['nullable', Rule::in(['0','1','2','21'])],
            'number' => ['nullable', 'gt:0', 'lte:3'],
            'obviative' => ['nullable', 'gt:0', 'lte:2']
        ];
    }

    protected function prepareForValidation()
    {
        $input = array_map('strtolower', $this->all());

        if (isset($input['number'])) {
            switch ($input['number']) {
                case 's':
                case 'sg':
                case 'singular':
                    $input['number'] = 1;
                    break;
                case 'd':
                case 'du':
                case 'dual':
                    $input['number'] = 2;
                    break;
                case 'p':
                case 'pl':
                case 'plural':
                    $input['number'] = 3;
                    break;
            }
        }

        if (isset($input['obviativeCode'])) {
            switch ($input['obviativeCode']) {
                case 'obviative':
                case '\'':
                    $input['obviativeCode'] = 1;
                    break;
                case 'double obviative':
                case '\'\'':
                case '"':
                    $input['obviativeCode'] = 2;
                    break;
            }
        }

        $this->replace($input);
    }
}

<?php

namespace App\Http\Middleware;

use App\FormType;
use Closure;
use Validator;

class ParseLangFormRequest
{
    /**
     * Handle an incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \Closure  $next
     * @return mixed
     */
    public function handle($request, Closure $next)
    {
        if (!isset($request->formData)) {
            $request['formData'] = $this->parseFormData($request);
        }

        return $next($request);
    }

    private function parseFormData($request)
    {
        $data = array_filter($request->only([
            'surfaceForm',
            'phoneticForm',
            'morphemicForm',
            'language_id',
            'parent_id',
            'historicalNotes',
            'allomorphyNotes',
            'usageNotes',
            'comments'
        ]), 'strlen');

        $data['formType_id'] = $this->getType($request);

        return $data;
    }

    private function getType($request)
    {
        $data = $this->parseFormTypeData($request);
        $type = null;

        //Try to find the type in the database
        $rules = $this->convertToRules($data);
        $type = FormType::where($rules)->first();

        //If it's not there, create a new one
        if (!$type) {
            $type = FormType::create(array_filter($data, 'strlen'));
        }

        return $type->id;
    }

    private function parseFormTypeData($request)
    {
        $data = $request->only([
            'subject_id',
            'primaryObject_id',
            'secondaryObject_id',
            'mode_id',
            'isAbsolute',
            'class_id',
            'order_id',
            'isNegative',
            'isDiminutive'
        ]);

        $data['isNegative']   = $this->handleCheck($data,'isNegative');
        $data['isDiminutive'] = $this->handleCheck($data,'isDiminutive');
        if($data['isAbsolute'] === 'null'){
            $data['isAbsolute'] = null;
        }

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

    private function handleCheck($request, $field){
        return isset($request[$field]) ? 1 : 0;
    }
    
}

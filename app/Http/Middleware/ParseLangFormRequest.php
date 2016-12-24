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
        // This might have already been set if morphemes were missing.
        // Don't worry about re-parsing if this is the case.
        if (!isset($request->formData)) {
            //$request['formTypeData'] = $this->parseFormTypeData($request);
            $request['formData']     = $this->parseFormData($request);
            // $request['sourceData']   = $this->parseSourceData($request);
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
            'parent_id'
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
            'formType.subject_id',
            'formType.primaryObject_id',
            'formType.secondaryObject_id',
            'formType.mode_id',
            'formType.isAbsolute',
            'formType.class_id',
            'formType.order_id',
            'formType.isNegative',
            'formType.isDiminutive'
        ]);
        $data = $data['formType'];

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

    // private function parseSourceData($request)
    // {
    //     $data = $request->only([
    //         'source_id',
    //         'extraInfo'
    //     ]);

    //     return $data;
    // }

    private function handleCheck($request, $field){
        return isset($request[$field]) ? 1 : 0;
    }
    
}

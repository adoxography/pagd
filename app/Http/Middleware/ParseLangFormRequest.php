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
            $request['isNegative'] = $this->handleCheck($request,'isNegative');
            $request['isDiminutive'] = $this->handleCheck($request,'isDiminutive');

            $request['formTypeData'] = $this->parseFormTypeData($request);
            $request['formData']     = $this->parseFormData($request);
        }

        return $next($request);
    }

    private function parseFormData($request)
    {
        return array_filter($request->only([
            'surfaceForm',
            'phoneticForm',
            'morphemicForm',
            'language_id',
            'parent_id'
        ]), 'strlen');
    }

    private function parseFormTypeData($request)
    {
        // Pull out the easy stuff
        $data = $request->only([
            'subject_id',
            'primaryObject_id',
            'secondaryObject_id',
            'class_id',
            'mode_id',
            'isAbsolute',
            'isNegative',
            'isDiminutive'
        ]);

        // Pull out the radio data
        $data['order_id'] = $request['formType']['order_id'];
        $data['class_id'] = $request['formType']['class_id'];

        return $data;
    }

    private function handleCheck($request, $field){
        return isset($request[$field]) ? 1 : 0;
    }
    
}

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
            // The form type information - these ones can go straight in
            //dd($request);
            $formTypeData = $request->only([
                'subject_id',
                'primaryObject_id',
                'secondaryObject_id',
                'class_id',
                'mood_id',
                'tense_id',
                'isAbsolute',
                'isNegative',
                'isDiminutive'
            ]);

            $formTypeData['order_id'] = $request['formType']['order']['id'];
            $formTypeData['tense_id'] = $request['formType']['tense']['id'];

            // Handle empty checkboxes so SQL can recognize them
            if (!$formTypeData['isNegative']) {
                $formTypeData['isNegative'] = 0;
            }
            if (!$formTypeData['isDiminutive']) {
                $formTypeData['isDiminutive'] = 0;
            }

            // Create a set of rules for looking up the form type
            $formTypeRules = array();
            foreach ($formTypeData as $key => $value) {
                if ($value === '') {
                    $value = null;
                }//if
                $formTypeRules += [$key => $value];
            }//foreach

            // Look up the form type, and create it if it's not already in the database
            $type = FormType::where($formTypeRules)->first();
            if (!$type) {
                $type = FormType::create(array_filter($formTypeData, 'strlen'));
            }//if
            //dd($type);

            // Pull out the regular form information and bundle it into its own array
            $formData = array_filter($request->only([
                'surfaceForm',
                'phoneticForm',
                'morphemicForm',
                'language_id',
                'parent_id'
            ]), 'strlen');
            $formData['formType_id'] = $type->id;
            $request['formData'] = $formData;
        }

        return $next($request);
    }
}

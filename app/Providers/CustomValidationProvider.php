<?php

namespace App\Providers;

use App\Morpheme;
use Illuminate\Support\Facades\Validator;
use Illuminate\Support\ServiceProvider;

class CustomValidationProvider extends ServiceProvider
{
    /**
     * Bootstrap the application services.
     *
     * @return void
     */
    public function boot()
    {
        Validator::extend('has', function($attribute, $value, $parameters, $validator) {
            $components = explode('-', $value);
            $lookup     = $parameters[0];
            $found = false;

            for($i = 0; $i < count($components) && !$found; $i++)
            {
                $found = strtolower($components[$i]) === strtolower($lookup);
            }

            return $found;
        });

        Validator::replacer('has', function($message, $attribute, $rule, $parameters) {
            return str_replace(':lookup',$parameters[0],$message);
        });

        Validator::extend('morphemesExist', function($attribute, $value, $parameters, $validator){
            $morphemes = explode('-', $value);
            $language = array_get($validator->getData(), $parameters[0]);
            $valid = true;
            $query;

            for($i = 0; $i < count($morphemes) && $valid; $i++){
                if($morphemes[$i] !== ''){
                    $query = Morpheme::where('name', $morphemes[$i])
                                     ->where('language_id', $language)
                                     ->get();
                    $valid = count($query) > 0;
                }
            }

            return $valid;
        });
    }

    /**
     * Register the application services.
     *
     * @return void
     */
    public function register()
    {
        //
    }
}

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

        Validator::extend('isMorpheme', function($attribute, $value, $parameters, $validator) {
            $str = $value;
            $hyphenAtEnd = false; // Either end will do
            $result = false;

            // If there's a hyphen at the beginning, remove it
            if($str{0} == '-') {
                $str = substr($str, 1);
                $hyphenAtEnd = true;
            }

            // If there's a hyphen at the end, remove it
            if($str{strlen($str) - 1} == '-') {
                $str = substr($str, 0, count($str) - 2);
                $hyphenAtEnd = true;
            }

            if($hyphenAtEnd) { // Don't bother doing this if there was no hyphen
                $result = !strpos($str, '-'); // Result is false if there is still a hyphen in the string
            }

            return $result;
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

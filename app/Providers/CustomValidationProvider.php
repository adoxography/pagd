<?php

namespace App\Providers;

use App\Morpheme;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Config;
use Illuminate\Support\ServiceProvider;
use Illuminate\Support\Facades\Validator;

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
            return $this->contains($value, $parameters[0]);
        });

        Validator::extend('notHas', function($attribute, $value, $parameters, $validator) {
            return !$this->contains($value, $parameters[0]);
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

        Validator::extend('verified', function($attribute, $value, $parameters, $validator) {
            return $value === Config::get('constants.verification');
        });

        Validator::extend('nomatch', function($attribute, $value, $parameters, $validator) {
            return $value != $parameters[0];
        });
    }

    protected function contains($schematic, $lookup) 
    {
        $components = explode('-', $schematic);
        $found = false;

        for($i = 0; $i < count($components) && !$found; $i++)
        {
            $found = strtolower($this->extract($components[$i])) === strtolower($lookup);
        }

        return $found;       
    }

    protected function extract($segment)
    {
        $pieces = explode('|', $segment);
        return $pieces[count($pieces) - 1];   
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

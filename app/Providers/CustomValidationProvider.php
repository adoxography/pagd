<?php

namespace App\Providers;

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
                if($components[$i] === $lookup)
                {
                    $found = true;
                }
            }

            return $found;
        });

        Validator::replacer('has', function($message, $attribute, $rule, $parameters) {
            return str_replace(':lookup',$parameters[0],$message);
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

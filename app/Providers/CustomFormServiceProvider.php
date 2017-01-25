<?php

namespace App\Providers;

//use Form;
use Illuminate\Support\ServiceProvider;

class CustomFormServiceProvider extends ServiceProvider
{
    /**
     * Bootstrap the application services.
     *
     * @return void
     */
    public function boot()
    {
        Form::macro('autofill', function ($name, $textValue = null, $hiddenValue = null, $textOptions = [], $hiddenOptions = []) {
            return $this->toHtmlString(
                $this->text(
                    $name.'[name]',
                    $textValue,
                    ['id' => $name] + $textOptions
                ) .

                $this->hidden(
                    $name.'_id',
                    $hiddenValue,
                    ['id' => $name.'_id'] + $hiddenOptions
                )
            );
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

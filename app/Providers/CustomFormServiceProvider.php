<?php

namespace App\Providers;

use Form;
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
        Form::macro('autofill',function($name, $textValue = null, $hiddenValue = null, $textOptions = [], $hiddenOptions = []){
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

        Form::macro('datalist',function($name,$choices,$values = [], $options = []){
            $output = "";
            $textValue     = isset($values['visible'])  ? $values['visible']  : null;
            $hiddenValue   = isset($values['hidden'])   ? $values['hidden']   : null;
            $textOptions   = isset($options['visible']) ? $options['visible'] : [];
            $hiddenOptions = isset($options['hidden'])  ? $options['hidden']  : [];

            $inputName = $name.'[name]';
            if(isset($textOptions['name'])){
                $inputName = $textOptions['name'];
                unset($textOptions['name']);
            }//if

            $output .= $this->text(
                $inputName,
                $textValue,
                ['id' => $name, 'list' => $name.'-datalist', 'autocomplete' => 'off'] + $textOptions
            );
            $output .= "<datalist id='$name-datalist'>";
            foreach($choices as $choice){
                $output .= "<option data-value = '$choice->id'>$choice->value</option>";
            }//foreach
            $output .= '</datalist>';
            $output .= $this->hidden(
                $name.'_id',
                $hiddenValue,
                ['id' => $name.'_id'] + $hiddenOptions
            );

            return $this->toHtmlString($output);
        });

        Form::macro('radioList', function($name, $choices, $selected = null, $options = []){
            $legend = isset($options['legend']) ? $options['legend'] : ucfirst($name);

            $output = '<fieldset class = "radio"><legend>'.$legend.'</legend>';

            for($i = 0; $i < count($choices); $i++)
            {
                $choice = $choices[$i];
                $output .= $this->radio($name, $choice['id'], $selected === $choice['id'], $options);
                $output .= $choice['value'];
            }

            $output .= '</fieldset>';

            return $this->toHtmlString($output);
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

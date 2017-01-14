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
        Form::macro('algLabel', function ($id, $display = null, $options = []) {
            return $this->label($id, $display, $options + ['class' => 'label']);
        });

        Form::macro('algText', function ($id, $value = null, $options = []) {
            return $this->toHtmlString(
                "<p class=\"control\">" .
                    $this->text($id, $value, $options + ['class' => 'input']) .
                "</p>"
            );
        });

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

        Form::macro('datalist', function ($name, $choices, $values = [], $options = []) {
            $textInput = '';
            $datalist = '';
            $hiddenInput = '';

            $textValue     = isset($values['visible'])  ? $values['visible']  : null;
            $hiddenValue   = isset($values['hidden'])   ? $values['hidden']   : null;
            $textOptions   = isset($options['visible']) ? $options['visible'] : [];
            $hiddenOptions = isset($options['hidden'])  ? $options['hidden']  : [];

            $inputName = $name.'[name]';
            $default = null;

            if (isset($textOptions['name'])) {
                $inputName = $textOptions['name'];
                unset($textOptions['name']);
            }//if
            if (isset($textOptions['default'])) {
                $default = $textOptions['default'];
                unset($textOptions['default']);
            }
            
            //Make the textbox
            $textInput = "<p class='control'>".$this->text(
                $inputName,
                $textValue,
                ['id' => $name, 'list' => $name.'-datalist', 'autocomplete' => 'off', 'class' => 'input'] + $textOptions
            )."</p>";

            //Make the datalist
            foreach ($choices as $choice) {
                $datalist .= "<option ";
                if ($choice->value == $default) {
                    $datalist .= "data-default = 'true' ";
                }
                $datalist .= "data-value = '$choice->id'>$choice->value</option>";
            }//foreach
            $datalist = "<datalist id='$name-datalist'>$datalist</datalist>";

            //Make the hidden input to store the ID
            $hiddenInput = $this->hidden(
                $name.'_id',
                $hiddenValue,
                ['id' => $name.'_id'] + $hiddenOptions
            );

            return $this->toHtmlString($textInput.$datalist.$hiddenInput);
        });

        Form::macro('radioList', function ($name, $choices, $selected = null, $options = []) {
            $legend = isset($options['legend']) ? $options['legend'] : ucfirst($name);

            $output = '<fieldset class = "radio"><legend>'.$legend.'</legend>';

            for ($i = 0; $i < count($choices); $i++) {
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

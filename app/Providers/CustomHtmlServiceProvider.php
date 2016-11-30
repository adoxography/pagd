<?php

namespace App\Providers;

use Html;
use Illuminate\Support\ServiceProvider;

class CustomHtmlServiceProvider extends ServiceProvider
{
    /**
     * Bootstrap the application services.
     *
     * @return void
     */
    public function boot()
    {
        Html::macro('field', function($label,$value,$link = null){
            if($link){
                $value = "<a href='$link'>$value</a>";
            }

            return $this->toHtmlString("<li><span class = 'label'>$label</span><span class = 'value'>$value</span></li>");
        });

        Html::macro('multi', function($label, $array, $link = null, $field = 'name'){
            $entries = "";

            if(count($array) > 0)
            {
                foreach($array as $item){
                    $value = $item->getAttribute($field);
    
                    if($link){
                        $value = "<a href='$link/".$item->id."'>$value</a>";
                    }
    
                    $entries .= "<li>$value</li>";
                }

                return $this->toHtmlString("<li><span class = 'label'>$label</span><ul class = 'multi-value'>$entries</ul></li>");
            }
            else
            {
                return $this->field($label,'Unknown');
            }

        });

        Html::macro('para', function($label, $value, $parser){
            return $this->toHtmlString("<li><span class = 'label'>$label</span><div class = 'paragraph'>".$parser->setRestricted(true)->parse($value)."</div>");
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

<?php

namespace App\Listeners\Morpheme;

use App\Form;
use App\Example;
use App\Morpheme;
use Illuminate\Queue\InteractsWithQueue;
use Illuminate\Contracts\Queue\ShouldQueue;

class ReconnectForms
{
    /**
     * Create the event listener.
     *
     * @return void
     */
    public function __construct()
    {
        //
    }

    /**
     * Handle the event.
     *
     * @param  Morpheme\Deleted|Morpheme\Saved  $event
     * @return void
     */
    public function handle($event)
    {
        $morpheme = $event->model;
        $morphemeName = str_replace(['*', '-'], '', $morpheme->name);

        $forms = Form::where('language_id', $morpheme->language_id)
                     ->where('morphemicForm', 'LIKE', "%$morphemeName%")
                     ->get();
        $examples = Example::whereHas('form', function ($query) use ($morpheme, $morphemeName) {
            $query->where('language_id', $morpheme->language_id)
                  ->where('morphemicForm', 'LIKE', "%$morphemeName%");
        })->get();

        foreach($forms as $form) {
            $form->dontConnectSources();
            $form->connectMorphemes();
        }
        foreach($examples as $example) {
            $example->dontConnectSources();
            $example->connectMorphemes();
        }
    }
}

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

        $forms = Form::where('language_id', $morpheme->language_id)->get();
        $examples = Example::whereHas('form', function ($query) use ($morpheme) {
            $query->where('language_id', $morpheme->language_id);
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

<?php

namespace App\Listeners;

use App\Form;
use App\Events\FormSaved;
use Illuminate\Queue\InteractsWithQueue;
use Illuminate\Contracts\Queue\ShouldQueue;

class ConnectDuplicatesToForm
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
     * @param  FormSaved  $event
     * @return void
     */
    public function handle(FormSaved $event)
    {
        $form = $event->form;

        // Unlink all of the form's duplicates
        $form->duplicates()->detach();

        // Get rid of all the disambiguators from the morphemic form
        $morphemicForm = $this->sanitize($form->morphemicForm);

        //Get all of the duplicates that aren't the form itself
        $duplicates = Form::where('morphemicForm', $morphemicForm)
                          ->where('language_id', $form->language_id)
                          ->where('id', '<>', $form->id)
                          ->get();

        //Add a link from each duplicate to the new form, and from the new form to each duplicate
        foreach ($duplicates as $duplicate) {
            $duplicate->duplicates()->attach($form->id);
            $form->duplicates()->attach($duplicate->id);
        }
    }

    protected function sanitize($morphemicForm)
    {
        $output = '';

        // Split the morphemic form up into individual morphemes
        $morphemes = explode('-', $morphemicForm);

        // Split each morpheme into name and disambiguator, then only take the name
        foreach($morphemes as $morpheme) {
            $chunks = explode('.', $morpheme);
            $output .= $chunks[0];
        }

        return $output;
    }
}

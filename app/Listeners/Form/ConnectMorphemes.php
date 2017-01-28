<?php

namespace App\Listeners\Form;

use App\Morpheme;
use App\Events\Form\Saved;
use Illuminate\Queue\InteractsWithQueue;
use Illuminate\Contracts\Queue\ShouldQueue;

class ConnectMorphemes
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
    public function handle(Saved $event)
    {
        $form = $event->form;
        $morphemes = explode('-', $form->morphemicForm);

        $chunk;  // Will hold an array, where index 0 is the morpheme name, and index 1 is the disambiguator
        $query;
        $lookup;

        // Unlink all of the existing morphemes
        $form->morphemes()->detach();

        // Check each morpheme against the database
        foreach ($morphemes as $index => $morpheme) {
            $chunk = explode('.', $morpheme);

            if (count($chunk) > 0) {
                $query = Morpheme::whereIn('name', [
                    $chunk[0],
                    '-'.$chunk[0],
                    '-'.$chunk[0].'-',
                    $chunk[0].'-',
                ])->where('language_id', $form->language_id);

                if (count($chunk) > 1) { // Chunk has a disambiguator
                    $query->where('disambiguator', $chunk[1]);
                }

                // Execute the query
                $lookup = $query->get();

                // Connect the morpheme if exactly one result was returned
                if (count($lookup) == 1) {
                    $form->morphemes()->attach($lookup[0]->id, ['position' => $index + 1]);
                }
            }
        }
    }
}

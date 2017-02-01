<?php

namespace App\Listeners\Language;

use App\Morpheme;
use App\Events\Language\Created;
use Illuminate\Queue\InteractsWithQueue;
use Illuminate\Contracts\Queue\ShouldQueue;

class AddVStem
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
     * @param  LanguageSaved  $event
     * @return void
     */
    public function handle(Created $event)
    {
        // Extract the language from the event
        $language = $event->model;

        // Create the vStem
        $vStem = new Morpheme([
            'name'        => 'V',
            'language_id' => $language->id,
            'gloss_id'    => 1, // V
            'slot_id'     => 1, // V
        ]);

        // If the language has a parent, set the vStem's parent the to parent language's vStem
        if($language->parent) {
            $vStem->parent_id = $language->parent->morphemes->where('name','V')->first()->id;
        }

        $vStem->save();
    }
}

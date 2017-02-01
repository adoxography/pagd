<?php

namespace App\Listeners\Language;

use App\Events\Language\Deleting;
use Illuminate\Queue\InteractsWithQueue;
use Illuminate\Contracts\Queue\ShouldQueue;

class DestroyMorphemes
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
     * @param  LanguageDeleting  $event
     * @return void
     */
    public function handle(Deleting $event)
    {
        $language  = $event->model;
        $morphemes = $language->morphemes;

        if(count($morphemes) > 0) {
            foreach ($morphemes as $morpheme) {
                $morpheme->delete();
            }
        }
    }
}

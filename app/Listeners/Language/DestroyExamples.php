<?php

namespace App\Listeners\Language;

use App\Events\Language\Deleting;
use Illuminate\Queue\InteractsWithQueue;
use Illuminate\Contracts\Queue\ShouldQueue;

class DestroyExamples
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
        $language = $event->model;
        $examples = $language->examples;

        if(count($examples) > 0) {
            foreach ($examples as $example) {
                $example->delete();
            }
        }
    }
}

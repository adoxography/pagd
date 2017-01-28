<?php

namespace App\Listeners;

use App\Events\MorphemeDeleting;
use Illuminate\Queue\InteractsWithQueue;
use Illuminate\Contracts\Queue\ShouldQueue;

class DisconnectSourcesFromMorpheme
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
     * @param  MorphemeDeleted  $event
     * @return void
     */
    public function handle(MorphemeDeleting $event)
    {
        $morpheme = $event->morpheme;

        $morpheme->sources()->detach();
    }
}

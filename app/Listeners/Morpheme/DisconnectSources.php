<?php

namespace App\Listeners\Morpheme;

use App\Events\Morpheme\Deleting;
use Illuminate\Queue\InteractsWithQueue;
use Illuminate\Contracts\Queue\ShouldQueue;

class DisconnectSources
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
    public function handle(Deleting $event)
    {
        $morpheme = $event->morpheme;

        $morpheme->sources()->detach();
    }
}

<?php

namespace App\Listeners\Morpheme;

use App\Events\Morpheme\Deleting;
use Illuminate\Queue\InteractsWithQueue;
use Illuminate\Contracts\Queue\ShouldQueue;

class DisconnectChildren
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
     * @param  MorphemeDeleting  $event
     * @return void
     */
    public function handle(Deleting $event)
    {
        $morpheme = $event->morpheme;
        $children = $morpheme->children;

        if(count($children) > 0) {
            foreach ($children as $child) {
                $child->parent_id = $morpheme->parent->id;
                $child->save();
            }
        }
    }
}

<?php

namespace App\Listeners\Language;

use App\Events\Language\Deleting;
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
     * @param  LanguageDeleting  $event
     * @return void
     */
    public function handle(Deleting $event)
    {
        $language = $event->model;
        $children = $language->children;

        if(count($children) > 0) {
            foreach ($children as $child) {
                $child->parent_id = $language->parent->id;
                $child->save();
            }
        }
    }
}

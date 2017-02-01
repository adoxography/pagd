<?php

namespace App\Listeners\Revision;

use Illuminate\Queue\InteractsWithQueue;
use Illuminate\Contracts\Queue\ShouldQueue;

class HandleSaving
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
     * @param  Saving  $event
     * @return void
     */
    public function handle($event)
    {
        $model = $event->model;
        $model->preSave();
    }
}

<?php

namespace App\Listeners\Revision;

use Illuminate\Queue\InteractsWithQueue;
use Illuminate\Contracts\Queue\ShouldQueue;

class HandleDeleted
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
     * @param  Deleted  $event
     * @return void
     */
    public function handle($event)
    {
        $model = $event->model;
        $model->preSave();
        $model->postDelete();
    }
}

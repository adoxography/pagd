<?php

namespace App\Listeners\Form;

use App\Events\Form\Deleting;
use Illuminate\Queue\InteractsWithQueue;
use Illuminate\Contracts\Queue\ShouldQueue;

class DisconnectDuplicates
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
     * @param  Deleting  $event
     * @return void
     */
    public function handle(Deleting $event)
    {
        $form       = $event->model;
        $duplicates = $form->duplicates;

        if($duplicates) {
            foreach($duplicates as $duplicate){
                $duplicate->duplicates()->detach($form->id);
            }//foreach

            $form->duplicates()->detach();
        }
    }
}

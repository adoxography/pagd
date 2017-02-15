<?php

namespace App\Listeners\Form;

use App\Morpheme;
use App\Events\Form\Saved;
use Illuminate\Queue\InteractsWithQueue;
use Illuminate\Contracts\Queue\ShouldQueue;

class ConnectMorphemes
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
     * @param  FormSaved  $event
     * @return void
     */
    public function handle(Saved $event)
    {
        $form = $event->model;
        $form->connectMorphemes();
    }
}

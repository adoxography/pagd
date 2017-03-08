<?php

namespace App\Listeners\InitialChange;

use App\InitialChange;
use App\Events\InitialChange\Creating;
use Illuminate\Queue\InteractsWithQueue;
use Illuminate\Contracts\Queue\ShouldQueue;

class AssignDisambiguator
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
     * @param  Creating  $event
     * @return void
     */
    public function handle(Creating $event)
    {
        $change = $event->model;

        $duplicates = InitialChange::where('morpheme_id', $change->morpheme_id)
                                ->orderBy('disambiguator')
                                ->get();

        $change->disambiguator = $this->firstOpenSpace($duplicates);
    }

    protected function firstOpenSpace($changes)
    {
        $found = false;
        $i = 1;

        while($i <= count($changes) && !$found) {
            $found = $i != $changes[$i - 1]->disambiguator;

            if(!$found) {
                $i++;
            }
        }

        return $i;
    }
}

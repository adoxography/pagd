<?php

namespace App\Listeners\Morpheme;

use App\Events\Morpheme\Deleted;
use Illuminate\Queue\InteractsWithQueue;
use Illuminate\Contracts\Queue\ShouldQueue;

class ReassessDuplicates
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
    public function handle(Deleted $event)
    {
        $morpheme = $event->model;

        $nameNoHyphens = str_replace(['-','*'], '', $morpheme->name);

        $duplicates = Morpheme::whereIn('name', [
                $nameNoHyphens,
            '-'.$nameNoHyphens,
            '-'.$nameNoHyphens.'-',
                $nameNoHyphens.'-',
        ])->where('language_id', $morpheme->language_id)
          ->orderBy('disambiguator')
          ->get();

        if(count($duplicates) == 1) {
            $duplicates[0]->hasDuplicates = false;
            $duplicates[0]->save();
        }
    }
}

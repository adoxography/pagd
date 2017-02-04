<?php

namespace App\Listeners\Morpheme;

use App\Morpheme;
use App\Events\Morpheme\Creating;
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

        $morpheme->disambiguator = $this->firstOpenSpace($duplicates);
    }

    protected function firstOpenSpace($morphemes)
    {
        $found = false;
        $i = 1;

        while($i <= count($morphemes) && !$found) {
            $found = $i != $morphemes[$i - 1]->disambiguator;

            if(!$found) {
                $i++;
            }
        }

        return $i;
    }
}

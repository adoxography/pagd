<?php

namespace App\Listeners;

use Illuminate\Support\Facades\Config;
use Illuminate\Support\Facades\Artisan;
use Illuminate\Support\Facades\Storage;
use Illuminate\Queue\InteractsWithQueue;
use Illuminate\Contracts\Queue\ShouldQueue;

class Backup
{
    protected $interval;

    /**
     * Create the event listener.
     *
     * @return void
     */
    public function __construct()
    {
        $this->interval = Config::get('constants.backup_interval');
    }

    /**
     * Handle the event.
     *
     * @param  Saved  $event
     * @return void
     */
    public function handle($event)
    {
        $numEvents;

        // Check how many save events have taken place
        try {
            $numEvents = Storage::get('SavedEvents.txt');
        } catch (FileNotFoundException $e) {
            $numEvents = 0;
        }

        // If transactions is divisible by 5, backup the database.
        if ($numEvents % $this->interval == 0) {
            Artisan::call('algling:backup');
        }

        // Record transaction
        Storage::put('SavedEvents.txt', $numEvents + 1);
    }
}

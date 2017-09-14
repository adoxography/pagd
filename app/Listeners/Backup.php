<?php

namespace App\Listeners;

use App;
use Cache;
use Config;
use Artisan;
use Illuminate\Contracts\Queue\ShouldQueue;

class Backup implements ShouldQueue
{
    protected $changeInterval;
    protected $timeInterval;

    /**
     * Create the event listener.
     */
    public function __construct()
    {
        // Load in the constants
        $this->changeInterval = Config::get('constants.backup_change_interval');
        $this->timeInterval   = Config::get('constants.backup_time_interval');
    }

    /**
     * Handle the event.
     *
     * @param  $event
     * @return void
     */
    public function handle()
    {
        if (App::environment() == 'website') {
            $numBackups = Cache::get('num_backups');

            if ($this->shouldBackup()) {
                Artisan::call('algling:backup');
                Cache::put('num_backups', 1, $this->timeInterval);
            } else {
                Cache::increment('num_backups');
            }
        }
    }

    protected function shouldBackup()
    {
        $numBackups = Cache::get('num_backups');

        return !$numBackups || $numBackups > $this->changeInterval;
    }
}

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
        $this->key            = Config::get('constants.backup_cache_key');
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
        if ($this->shouldBackup()) {
            $this->backup();
            Cache::put($this->key, 1, $this->timeInterval);
        } else {
            Cache::increment($this->key);
        }
    }

    protected function shouldBackup()
    {
        $numBackups = cache($this->key);

        return !$numBackups || $numBackups >= $this->changeInterval;
    }

    protected function backup()
    {
        if (App::environment() == 'website') {
            Artisan::call('algling:backup');
        }
    }
}

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
        $rc = false;

        if (app()->environment() == 'website') {
            $numBackups = cache($this->key);
            $rc = !$numBackups || $numBackups >= $this->changeInterval;
        }

        return $rc;
    }

    protected function backup()
    {
        Artisan::call('algling:backup', ['--folder' => 'incremental']);
    }
}

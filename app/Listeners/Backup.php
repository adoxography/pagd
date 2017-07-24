<?php

namespace App\Listeners;

use Carbon\Carbon;
use App;
use Config;
use Artisan;
use Storage;
use Illuminate\Contracts\Queue\ShouldQueue;

class Backup implements ShouldQueue
{
    protected $fileName;
    protected $changeInterval;
    protected $timeInterval;
    protected $changes;
    protected $time;

    /**
     * Create the event listener.
     */
    public function __construct()
    {
        // Load in the constants
        $this->fileName       = Config::get('constants.backup_file_name');
        $this->changeInterval = Config::get('constants.backup_change_interval');
        $this->timeInterval   = Config::get('constants.backup_time_interval');

        // Set the default values in case the file is missing
        $this->changes = 0;
        $this->time = '0000-00-00 00:00:00.000000';
    }

    /**
     * Handle the event.
     *
     * @param  $event
     * @return void
     */
    public function handle()
    {
        // Only backup on the website environment.
        if(App::environment() == 'website') {

            // Get the contents from the file, or use the default ones for now
            $this->readFile();

            // Backup the database
            if($this->shouldBackup()) {
                $this->backup();
            }

            // Update the file
            $this->writeToFile();
        }
    }

    /**
     * Open the file and read the data from it
     * 
     * The first line is the datetime of the last backup, and the second line is the number of changes since the last backup.
     */
    protected function readFile()
    {
        if(Storage::exists($this->fileName)) {
            $file = Storage::get($this->fileName);
            $components = explode("\n", $file);

            $this->time    = $components[0];
            $this->changes = $components[1];
        }
    }

    /**
     * Write the updated data out to the file
     */
    protected function writeToFile()
    {
        Storage::put($this->fileName, $this->time . "\n" . ($this->changes + 1));
    }

    /**
     * @return true if the number of changes have exceeded the cap, and the current time is past the time delay, and false otherwise
     */
    protected function shouldBackup()
    {
        return $this->isPastChangeInterval() && $this->isPastTimeInterval();
    }

    /**
     * @return true if the number of changes have exceeded the cap, and false otherwise
     */
    protected function isPastChangeInterval()
    {
        return $this->changes > $this->changeInterval;
    }

    /**
     * @return true if the current time is past the time delay, and false otherwise
     */
    protected function isPastTimeInterval()
    {
        // Create a carbon instance of the last backup time
        $nextBackupTime = new Carbon($this->time);

        // Advance that time however long the delay is set to
        $nextBackupTime->addMinutes($this->timeInterval);

        // Compare it against the current time
        return Carbon::now()->gt($nextBackupTime);
    }

    /**
     * Perform the backup
     * 
     * Updates the last backup time and resets the change counter
     */
    protected function backup()
    {
        Artisan::call('algling:backup');
        $this->time = Carbon::now()->toDateTimeString();
        $this->changes = 0;
    }
}

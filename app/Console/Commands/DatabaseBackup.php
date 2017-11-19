<?php

namespace App\Console\Commands;

use Carbon\Carbon;
use Illuminate\Console\Command;

class DatabaseBackup extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'algling:backup {--folder=special}';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Backup the database to dropbox';

    /**
     * Create a new command instance.
     */
    public function __construct()
    {
        parent::__construct();
    }

    /**
     * Execute the console command.
     *
     * @return mixed
     */
    public function handle()
    {
        $folder = $this->option('folder');
        $environment = app()->environment();

        $this->call(
            'db:backup',
            [
                '--database' => 'mysql',
                '--destination' => 'dropbox',
                '--destinationPath' => "/{$environment}/{$folder}/{$this->createFileName()}",
                '--compression' => 'gzip'
            ]
        );
        $this->info("Database backed up successfully");
        return null;
    }

    /**
     * Generates an appropriate file name for the backup file
     *
     * @return string
     */
    protected function createFileName()
    {
        $date = Carbon::now()->format('Y-m-d-H-i-s');
        $environment = app()->environment();

        return "algling_{$environment}_{$date}";
    }
}

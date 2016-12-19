<?php

namespace App\Console\Commands;

use Carbon\Carbon;
use Illuminate\Console\Command;
use Illuminate\Support\Facades\Artisan;

class DatabaseBackup extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'algling:backup';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Backup the database to dropbox';

    /**
     * Create a new command instance.
     *
     * @return void
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
        $date = Carbon::now()->format('Y-m-d-H-i-s');
        $environment = env('APP_ENV');

        Artisan::call('db:backup',['--database' => 'mysql', '--destination' => 'dropbox', '--destinationPath' => "/{$environment}/algling_{$environment}_{$date}", '--compression' => 'gzip']);
        $this->info("Database backed up successfully");
    }
}

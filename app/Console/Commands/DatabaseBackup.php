<?php

namespace App\Console\Commands;

use Artisan;
use App\InteractsAcrossFilesystems;
use Carbon\Carbon;
use Illuminate\Console\Command;

class DatabaseBackup extends Command
{
    use InteractsAcrossFilesystems;

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
        $environment = app()->environment();
        Artisan::call(
            'db:backup',
            [
                '--database' => 'mysql',
                '--destination' => 'dropbox',
                '--destinationPath' => "/{$environment}/algling_{$environment}_{$date}",
                '--compression' => 'gzip'
            ]
        );
        $this->info("Database backed up successfully");
        return null;
    }

    protected function save()
    {
        $name = $this->createFileName();
        $path = storage_path("app/$name");
        $database = config('database.connections.mysql.database');
        $username = config('database.connections.mysql.username');
        $password = config('database.connections.mysql.password');
        $host     = config('database.connections.mysql.host');

        exec("mysqldump --user=\"$username\" --password=\"$password\" --host=\"$host\" $database 2>/dev/null | gzip > $path");

        return $name;
    }

    protected function transfer(string $fileName)
    {
        $environment = app()->environment();
        $path = "backups/$environment/$fileName";

        $this->move($fileName, 'local', 'dropbox', $path);
    }

    protected function createFileName()
    {
        $date = Carbon::now()->format('Y-m-d-H-i-s');
        $environment = app()->environment();

        return "algling_{$environment}_{$date}.gz";
    }
}

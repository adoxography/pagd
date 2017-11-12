<?php

namespace App\Console\Commands;

use App\InteractsAcrossFilesystems;
use Illuminate\Console\Command;
use Storage;

class DatabaseRestore extends Command
{
    use InteractsAcrossFilesystems;

    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'algling:restore {--last|l}';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Restore the database from dropbox';

    /**
     * Execute the console command.
     *
     * @return mixed
     */
    public function handle()
    {
        $backup = $this->getLastBackup();

        $this->restore($backup);

        $file = array_last(explode('/', $backup));

        $this->delete($file, 'local');
        $this->flush();

        return null;
    }

    protected function restore($backup)
    {
        $username = config('database.connections.mysql.username');
        $password = config('database.connections.mysql.password');
        $database = config('database.connections.mysql.database');
        $host     = config('database.connections.mysql.host');

        exec("mysql --user=\"$username\" --password=\"$password\" --host=\"$host\" $database < $backup 2>/dev/null");
    }

    protected function getLastBackup()
    {
        $files = Storage::disk('dropbox')->allFiles('backups/website');

        $path = array_last($files);

        $file = array_last(explode('/', $path));

        $this->copy($path, 'dropbox', 'local', $file);

        $path = storage_path('app/' . $file);

        exec("gzip -d $path");

        return str_replace('.gz', '', $path);
    }

    protected function flush()
    {
        $this->call('cache:forget', ['key' => 'spatie.permission.cache']);
    }
}

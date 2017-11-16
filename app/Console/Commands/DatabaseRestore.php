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

    protected $options = ['--database' => 'mysql', '--source' => 'dropbox', '--compression' => 'gzip'];

    public function __construct()
    {
        parent::__construct();
        try {
            $this->options['--sourcePath'] = $this->getLastBackup();
        } catch (\Exception $e) {
            var_dump('Could not restore the database.');
        }
    }

    /**
     * Execute the console command.
     *
     * @return mixed
     */
    // public function handle()
    // {
    //     $backup = $this->getLastBackup();

    //     $this->restore($backup);

    //     $file = array_last(explode('/', $backup));

    //     $this->delete($file, 'local');
    //     $this->flush();

    //     return null;
    // }
    public function handle()
    {
        $this->call('db:restore', $this->options);
        $this->call('cache:forget', ['key' => 'spatie.permission.cache']);
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
        $file = array_last($files);
        return str_replace('backups', '', $file);
    }

    // protected function getLastBackup()
    // {
    //     $files = Storage::disk('dropbox')->allFiles('backups/website');

    //     $path = array_last($files);

    //     $file = array_last(explode('/', $path));

    //     $this->copy($path, 'dropbox', 'local', $file);

    //     $path = storage_path('app/' . $file);

    //     exec("gzip -d $path");

    //     return str_replace('.gz', '', $path);
    // }

    protected function flush()
    {
        $this->call('cache:forget', ['key' => 'spatie.permission.cache']);
    }
}

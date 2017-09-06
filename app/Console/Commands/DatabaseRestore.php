<?php

namespace App\Console\Commands;

use Storage;
use Illuminate\Console\Command;

class DatabaseRestore extends Command
{
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

    /**
     * Create a new command instance.
     */
    public function __construct()
    {
        parent::__construct();

        // if ($this->option('last')) {
        try {
            $this->options['--sourcePath'] = $this->getLastBackup();
        } catch (\Exception $e) {
            var_dump('Could not restore the database.');
        }
        // }
    }

    protected function getLastBackup()
    {
        $files = Storage::disk('dropbox')->allFiles('backups/website');

        $file = array_last($files);

        return str_replace('backups', '', $file);
    }

    /**
     * Execute the console command.
     *
     * @return mixed
     */
    public function handle()
    {
        $this->call('db:restore', $this->options);

        $this->call('cache:forget', ['key' => 'spatie.permission.cache']);

        return null;
    }
}

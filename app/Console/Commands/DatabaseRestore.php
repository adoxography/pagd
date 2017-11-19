<?php

namespace App\Console\Commands;

use Illuminate\Console\Command;
use Storage;

class DatabaseRestore extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'algling:restore {--last|l} {--environment=website}';

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
    }

    /**
     * Execute the console command.
     *
     * @return mixed
     */
    public function handle()
    {
        try {
            $this->options['--sourcePath'] = $this->getLastBackup();
            $this->call('db:restore', $this->options);
            $this->flush();
        } catch (\Exception $e) {
            var_dump('Could not restore the database.');
        }

        return null;
    }

    /**
     * Retrieves the last backup from the filesystem
     *
     * @return string
     */
    protected function getLastBackup()
    {
        $environment = $this->option('environment');
        $files = collect(Storage::disk('dropbox')->allFiles("backups/$environment"))
                ->sortByDesc(function ($file) {
                    return array_last(explode('_', $file));
                });

        return str_replace('backups', '', $files->first());
    }

    /**
     * Flushes the permission cache
     */
    protected function flush()
    {
        $this->call('cache:forget', ['key' => 'spatie.permission.cache']);
    }
}

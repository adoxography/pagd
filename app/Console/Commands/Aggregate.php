<?php

namespace App\Console\Commands;

use App\Traits\InteractsAcrossFilesystems;
use Illuminate\Console\Command;
use Storage;

class Aggregate extends Command
{
    use InteractsAcrossFilesystems;

    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'algling:aggregate';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Command description';

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
        $backups = Storage::disk('dropbox')->allFiles('backups/website');

        foreach ($backups as $backup) {
            $file = $this->prepareBackup($backup);

            exec("mysql algling < $file");

            exec("mysqldump --skip-add-drop-table --no-create-info --insert-ignore --skip-add-locks algling Sourceables >> aggregate.sql");

            $this->delete(array_last(explode('/', $file)), 'local');
        }
    }

    protected function prepareBackup($path)
    {
        $file = array_last(explode('/', $path));

        $this->copy($path, 'dropbox', 'local', $file);

        $path = storage_path('app/' . $file);

        exec("gzip -d $path");

        return str_replace('.gz', '', $path);
    }
}

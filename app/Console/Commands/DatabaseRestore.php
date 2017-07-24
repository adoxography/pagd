<?php

namespace App\Console\Commands;

use Illuminate\Console\Command;

class DatabaseRestore extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'algling:restore';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Restore the database from dropbox';

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
        $this->call('db:restore', ['--database' => 'mysql', '--source' => 'dropbox', '--compression' => 'gzip']);

        return null;
    }
}

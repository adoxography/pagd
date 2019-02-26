<?php

namespace App\Console\Commands;

use Storage;
use Illuminate\Console\Command;
use Illuminate\Support\Arr;

class PruneFileSystem extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'algling:prune {--disk=dropbox} {--max=1000} {--environment=}';

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
        $environment = $this->option('environment') ?: app()->environment();
        $max = $this->option('max');
        $disk = Storage::disk($this->option('disk'));
        $files = collect($disk->files("backups/$environment/incremental"))
                ->sortBy(function ($file) {
                    return Arr::last(explode('_', $file));
                });

        $numToDelete = count($files) - $max;
        $toDelete = $files->slice(0, $numToDelete);
        $disk->delete($toDelete->all());

        return null;
    }
}

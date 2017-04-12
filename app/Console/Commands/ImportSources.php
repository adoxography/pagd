<?php

namespace App\Console\Commands;

use Illuminate\Console\Command;
use Illuminate\Support\Facades\File;
use Illuminate\Support\Facades\Storage;

class ImportSources extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'algling:import {file}';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Import sources';

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
        $fileName = $this->argument('file');
        $file = null;
        $sources = [];

        if(Storage::exists($fileName)) {
            $file = Storage::get($fileName);
            $lines = mb_split("\n", $file);

            $this->line("File found. Loading sources...");

            foreach($lines as $line) {
                $sources[] = $this->organizeSource($line);
            }

            $this->line("All sources loaded. Inserting to the database...");

            \App\Source::insert($sources);
        }

        $this->line("All sources added to the database. Disambiguating...");

        $this->disambiguate();

        $this->line("All done!");
    }

    protected function disambiguate()
    {
        $sources = \App\Source::whereNull('disambiguator')->get();

        foreach($sources as $source) {
            if(!isset($source->disambiguator) && !$this->isFirst($source, $sources)) {
                $source->assignDisambiguator();

                if($source->isDirty('disambiguator')) {
                    $source->save();
                }
            }
        }
    }

    protected function isFirst($source, $insertedSources)
    {
        $duplicates = $insertedSources->where('author', $source->author)->where('year', $source->year);

        $found = false;

        foreach($duplicates as $duplicate) {
            $found = $duplicate->id < $source->id;

            if($found) {
                break;
            }
        }

        return !$found;
    }

    protected function organizeSource(string $line)
    {
        $csv = str_getcsv($line);

        $source = [];

        $source['author'] = $csv[0];
        $source['year'] = $csv[1];
        $source['long'] = $csv[4];

        if(strlen($csv[3]) > 0) {
            $source['url'] = $csv[3];
        } else {
            $source['url'] = null;
        }

        return $source;
    }
}

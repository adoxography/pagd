<?php

namespace App\Console\Commands;

use App\Language;
use App\Source;
use Illuminate\Console\Command;

class SourceAll extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'algling:source {language} {source}';

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
        $language = $this->getLanguage();
        $source = $this->getSource();

        foreach ($language->assets as $asset) {
            $items = $language->{$asset}()->whereDoesntHave('sources')->get();

            foreach ($items as $item) {
                $item->connectSource($source);
            }

            $this->info("$asset complete");
        }
    }

    protected function getLanguage()
    {
        $name = $this->argument('language');

        return Language::where('name', $name)->first();
    }

    protected function getSource()
    {
        $name = $this->argument('source');
        $matches = [];

        preg_match('/(.+) (\d+)(\w)?/', $name, $matches);

        $query = Source::where('author', $matches[1])->where('year', $matches[2]);

        if (isset($matches[3])) {
            $query->where('disambiguator', ord($matches[3]) - 96);
        }

        return $query->first();
    }
}

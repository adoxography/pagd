<?php

namespace App\Console\Commands;

use Illuminate\Console\Command;
use Algling\Verbals\Models\Form;
use Algling\Words\Models\Example;
use Algling\Morphemes\Models\Morpheme;
use Illuminate\Support\Facades\Artisan;

class IndexSearchableModels extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'algling:index';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Index all of the searchable models';

    /**
     * The models to index
     *
     * @var array
     */
    protected $models = [
        \App\Source::class,
        \App\Language::class,
        Morpheme::class,
        Form::class,
        Example::class
    ];

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
        foreach($this->models as $model) {
            Artisan::call("scout:import", ['model' => $model]);
            echo "$model indexed successfully\n";
        }
    }
}

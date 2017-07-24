<?php

namespace App\Console\Commands;

use App\Language;
use App\Models\Morphology\Morpheme;
use App\Source;
use Illuminate\Console\Command;
use Algling\Words\Models\Form;
use Algling\Words\Models\Example;
use Artisan;

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
        Source::class,
        Language::class,
        Morpheme::class,
        Form::class,
        Example::class
    ];

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
        foreach($this->models as $model) {
            Artisan::call("scout:import", ['model' => $model]);
            echo "$model indexed successfully\n";
        }

        return null;
    }
}

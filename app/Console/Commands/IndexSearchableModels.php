<?php

namespace App\Console\Commands;

use Artisan;
use App\Models\Language;
use App\Models\Morphology\Morpheme;
use App\Models\Words\Form;
use App\Models\Words\Example;
use App\Models\Source;
use Illuminate\Console\Command;

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

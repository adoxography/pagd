<?php

namespace App\Console\Commands;

use Algling\Words\Models\Example;
use Algling\Words\Models\Form;
use App\Models\Morphology\Morpheme;
use Illuminate\Console\Command;

class ConnectData extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'algling:connect';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Connect all the morphemes and glosses';

    protected $morphemes;
    protected $forms;
    protected $examples;

    /**
     * Create a new command instance.
     *
     * @return void
     */
    public function __construct()
    {
        parent::__construct();

        $this->morphemes = Morpheme::all();
        $this->forms = Form::whereHas('language')->get();
        $this->examples = Example::whereHas('language')->whereNotNull('morphemicForm')->get();
    }

    /**
     * Execute the console command.
     *
     * @return mixed
     */
    public function handle()
    {
        $this->morphemes->each(function ($morpheme) {
            $morpheme->connectGlosses();
        });

        $this->forms->each(function ($form) {
            $form->connectMorphemes();
        });

        $this->examples->each(function ($example) {
            $example->connectMorphemes();
        });
    }
}

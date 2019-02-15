<?php

namespace App\Console\Commands;

use App\Models\Words\Example;
use App\Models\Words\Form;
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

    /**
     * Execute the console command.
     *
     * @return mixed
     */
    public function handle()
    {
        $morphemes = Morpheme::all();
        $forms = Form::whereNotNull('language_id')
                           ->whereNotNull('morphemic_form')
                           ->get();
        $examples = Example::whereNotNull('language_id')
                                 ->whereNotNull('morphemic_form')
                                 ->get();

        $morphemes->each(function ($morpheme) {
            $morpheme->connectGlosses();
        });

        $forms->each(function ($form) {
            $form->connectMorphemes();
        });

        $examples->each(function ($example) {
            $example->connectMorphemes();
        });
    }
}

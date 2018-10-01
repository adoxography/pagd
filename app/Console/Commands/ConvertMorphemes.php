<?php

namespace App\Console\Commands;

use App\Models\Words\Example;
use App\Models\Words\Form;
use App\Models\Morphology\Morpheme;
use Illuminate\Console\Command;

class ConvertMorphemes extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'algling:convert-morphemes';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Command description';

    protected $types = [Form::class, Example::class];
    protected $ids = ['1785', '1786', '1791', '1792', '1795', '1797', '4491', '4492', '4493', '4494', '4495', '4496', '4497', '4498', '4499'];

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
        // foreach ($this->types as $type) {
        // $models = $type::whereNotNull('morphemicForm')->get();

        foreach ($this->ids as $id) {
            $model = Form::find($id);
            $slots = explode('-', $model->morphemicForm);

            for ($i = 0; $i < count($slots); $i++) {
                $slot = $slots[$i];
                $newSlot = null;
                preg_match('/(?:(?<ic>IC)(?:\.(?<icnum>[^|]+))?\|)?(?<morpheme>[^\.]+)(?:\.(?<disambiguator>\d+))?/', $slot, $matches);

                if (isset($matches['disambiguator'])) {
                    $name = $matches['morpheme'];

                    $lookup = Morpheme::where('language_id', $model->language_id)
                            ->where('disambiguator', $matches['disambiguator'])
                            ->whereIn('name', ["$name", "-$name", "$name-", "-$name-"])
                            ->get();

                    if ($lookup->count() == 1) {
                        $newSlot = $lookup->first()->id;
                    }
                }

                $newSlot = $newSlot ?: $matches['morpheme'];

                if ($matches['ic']) {
                    $ic = $matches['icnum'] ?: 0;
                    $newSlot .= '.' . $ic;
                }

                $slots[$i] = $newSlot;
            }

            $model->morphemicForm = implode('-', $slots);
            $model->save();
        }
        // }
    }
}

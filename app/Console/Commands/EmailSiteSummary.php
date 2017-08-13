<?php

namespace App\Console\Commands;

use Algling\Phonology\Models\Phoneme;
use Algling\Words\Models\Example;
use Algling\Words\Models\Form;
use App\Language;
use App\Mail\SiteSummary;
use App\Models\Morphology\Morpheme;
use App\User;
use Carbon\Carbon;
use Illuminate\Console\Command;
use Mail;

class EmailSiteSummary extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'algling:email-site-summary';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Email a summary site activity for the past week';

    protected $leaders;

    protected $data = [];

    protected $dataTypes = [
        'users'     => User::class,
        'languages' => Language::class,
        'forms'     => Form::class,
        'examples'  => Example::class,
        'morphemes' => Morpheme::class,
        'phonemes'  => Phoneme::class
    ];

    /**
     * Create a new command instance.
     *
     */
    public function __construct()
    {
        parent::__construct();

        $this->leaders = User::where('receiveSiteSummary', true)->get();

        foreach ($this->dataTypes as $key => $class) {
            $this->data[$key] = [
                'newData' => $this->loadData($class),
                'count'   => $this->getCount($class)
            ];
        }
    }

    protected function loadSortedData(string $class)
    {
        $data = $this->loadData($class);

        if (method_exists($class, 'language')) {
            $data = $data->sortBy(function ($item) {
                return $item->language->id;
            });
        }

        return $data;
    }

    protected function loadData(string $class)
    {
        $query = $class::where('created_at', '>=', Carbon::now()->subWeek());

        if (method_exists($class, 'language')) {
            $query->with('language');
        }

        if (method_exists($class, 'structure')) {
            $query->with('structure');
        }

        return $query->get();
    }

    protected function getCount(string $class)
    {
        return $class::count();
    }

    /**
     * Execute the console command.
     *
     * @return mixed
     */
    public function handle()
    {
        foreach ($this->leaders as $leader) {
            Mail::to($leader)->send(new SiteSummary($this->data, $leader));
        }
    }
}

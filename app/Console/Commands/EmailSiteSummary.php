<?php

namespace App\Console\Commands;

use App\Models\Phonology\Phoneme;
use App\Models\Words\Example;
use App\Models\Words\Form;
use App\Models\Language;
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
        $this->leaders = User::where('receiveSiteSummary', true)->get();

        foreach ($this->dataTypes as $key => $class) {
            $this->data[$key] = [
                'newData' => $this->loadData($class),
                'count'   => $this->getCount($class)
            ];
        }

        foreach ($this->leaders as $leader) {
            Mail::to($leader)->send(new SiteSummary($this->data, $leader));
        }
    }
}

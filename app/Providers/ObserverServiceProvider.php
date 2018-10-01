<?php

namespace App\Providers;

use Algling\Nominals\Models\Form as NominalForm;
use App\Obervers\ReflexObserver;
use App\Observers\PhonemeObserver;
use Algling\SS\Models\Datapoint;
use Algling\SS\Models\Observers\VariableObserver;
use Algling\SS\Models\Variable;
use Algling\SS\Observers\DatapointObserver;
use Algling\Verbals\Models\Form as VerbForm;
use Algling\Words\Models\Form as WordForm;
use Algling\Words\Models\Observers\FormObserver;
use App\Group;
use App\IGT;
use App\Language;
use App\Models\Morphology\Gloss;
use App\Models\Morphology\Morpheme;
use App\Models\Phonology\Phoneme;
use App\Models\Phonology\Reflex;
use App\Observers\GlossObserver;
use App\Observers\GroupObserver;
use App\Observers\LanguageObserver;
use App\Observers\MorphemeObserver;
use App\Observers\IGTObserver;
use Illuminate\Support\ServiceProvider;


class ObserverServiceProvider extends ServiceProvider
{
    protected $observations = [
        Language::class    => LanguageObserver::class,
        Group::class       => GroupObserver::class,
        Gloss::class       => GlossObserver::class,
        Morpheme::class    => MorphemeObserver::class,
        WordForm::class    => FormObserver::class,
        VerbForm::class    => FormObserver::class,
        NominalForm::class => FormObserver::class,
        Variable::class    => VariableObserver::class,
        Reflex::class      => ReflexObserver::class,
        Datapoint::class   => DatapointObserver::class,
        Phoneme::class     => PhonemeObserver::class,
        IGT::class         => IGTObserver::class
    ];

    /**
     * Bootstrap the application services.
     *
     * @return void
     */
    public function boot()
    {
        foreach ($this->observations as $model => $observer) {
            $model::observe($observer);
        }
    }

    /**
     * Register the application services.
     *
     * @return void
     */
    public function register()
    {
        //
    }
}

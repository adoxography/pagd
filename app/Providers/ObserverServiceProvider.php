<?php

namespace App\Providers;

use App\Models\Nominals\Form as NominalForm;
use App\Models\Verbs\Form as VerbForm;
use App\Models\Words\Form as WordForm;
use App\Models\Words\Observers\FormObserver;
use App\Models\Group;
use App\Models\IGT\IGT;
use App\Models\Language;
use App\Models\Morphology\Gloss;
use App\Models\Morphology\Morpheme;
use App\Models\Phonology\Phoneme;
use App\Models\Phonology\Reflex;
use App\Models\StructuralSurvey\Datapoint;
use App\Models\StructuralSurvey\Variable;
use App\Observers\DatapointObserver;
use App\Observers\GlossObserver;
use App\Observers\GroupObserver;
use App\Observers\IGTObserver;
use App\Observers\LanguageObserver;
use App\Observers\MorphemeObserver;
use App\Observers\ReflexObserver;
use App\Observers\VariableObserver;
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
}

<?php

namespace App\Providers;

use Illuminate\Support\ServiceProvider;

class ObserverServiceProvider extends ServiceProvider
{
    protected $observations = [
        \App\Language::class => \App\Observers\LanguageObserver::class,
        \App\Group::class => \App\GroupObserver::class,
        \Algling\Morphemes\Models\Gloss::class => \Algling\Morphemes\Models\Observers\GlossObserver::class,
        \Algling\Morphemes\Models\Morpheme::class => \Algling\Morphemes\Models\Observers\MorphemeObserver::class,
        \Algling\Words\Models\Form::class => \Algling\Words\Models\Observers\FormObserver::class,
        \Algling\Verbals\Models\Form::class => \Algling\Words\Models\Observers\FormObserver::class,
        \Algling\Nominals\Models\Form::class => \Algling\Words\Models\Observers\FormObserver::class,
        \Algling\SS\Models\Variable::class => \Algling\SS\Models\Observers\VariableObserver::class
    ];

    /**
     * Bootstrap the application services.
     *
     * @return void
     */
    public function boot()
    {
        foreach($this->observations as $model => $observer) {
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

<?php

namespace App\Providers;

use App\Language;
use Algling\Words\Models\Form;
use Algling\SS\Models\Variable;
use Algling\Morphemes\Models\Gloss;
use App\Observers\LanguageObserver;
use Laravel\Dusk\DuskServiceProvider;
use Algling\Morphemes\Models\Morpheme;
use Illuminate\Support\ServiceProvider;
use Algling\Words\Models\Observers\FormObserver;
use Algling\SS\Models\Observers\VariableObserver;
use Algling\Morphemes\Models\Observers\GlossObserver;
use Algling\Morphemes\Models\Observers\MorphemeObserver;

class AppServiceProvider extends ServiceProvider
{
    /**
     * Bootstrap any application services.
     *
     * @return void
     */
    public function boot()
    {
        Language::observe(LanguageObserver::class);
        Gloss::observe(GlossObserver::class);
        Morpheme::observe(MorphemeObserver::class);
        Form::observe(FormObserver::class);
        Variable::observe(VariableObserver::class);
    }

    /**
     * Register any application services.
     *
     * @return void
     */
    public function register()
    {
        if ($this->app->environment('local', 'testing')) {
            $this->app->register(DuskServiceProvider::class);
        }
    }
}

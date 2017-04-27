<?php

namespace App\Providers;

use App\Form;
use App\Gloss;
use App\Language;
use App\Morpheme;
use App\Observers\FormObserver;
use App\Observers\GlossObserver;
use App\Observers\LanguageObserver;
use App\Observers\MorphemeObserver;
use Laravel\Dusk\DuskServiceProvider;
use Illuminate\Support\ServiceProvider;

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
        // Form::observe(FormObserver::class);
        // Morpheme::observe(MorphemeObserver::class);
        // Gloss::observe(GlossObserver::class);
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

<?php

namespace Algling\Words;

use Algling\Words\Models\Form;
use Algling\Words\Commands\Transfer;
use Illuminate\Support\ServiceProvider;
use Algling\Words\Models\Observers\FormObserver;

class WordServiceProvider extends ServiceProvider
{
    /**
     * Bootstrap the application services.
     *
     * @return void
     */
    public function boot()
    {
        $this->loadMigrationsFrom(__DIR__.'/migrations');

        Form::observe(FormObserver::class);

        if($this->app->runningInConsole()) {
            $this->commands([Transfer::class]);
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

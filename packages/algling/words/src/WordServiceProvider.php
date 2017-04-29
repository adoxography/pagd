<?php

namespace Algling\Words;

use Algling\Words\Models\Form;
use Algling\Words\Commands\Transfer;
use Illuminate\Support\Facades\Route;
use Illuminate\Support\ServiceProvider;
use Algling\Words\Models\Observers\FormObserver;

class WordServiceProvider extends ServiceProvider
{
    protected $connections = [
        \Algling\Words\Models\Example::class => 'example',
        \Algling\Words\Models\Gap::class => 'emptyform'
    ];

    /**
     * Bootstrap the application services.
     *
     * @return void
     */
    public function boot()
    {
        $this->loadMigrationsFrom(__DIR__.'/migrations');
        $this->bootObservers();
        $this->bootCommands();
        $this->bootRouteModelBindings();
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

    protected function bootObservers()
    {
        Form::observe(FormObserver::class);
    }

    protected function bootCommands()
    {
        if($this->app->runningInConsole()) {
            $this->commands([Transfer::class]);
        }
    }

    protected function bootRouteModelBindings()
    {
        foreach($this->connections as $model => $binding) {
            Route::bind($binding, function($value) use ($model) {
                return $model::find($value);
            });
        }
    }
}

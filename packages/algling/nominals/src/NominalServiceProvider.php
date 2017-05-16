<?php

namespace Algling\Nominals;

use Illuminate\Support\Facades\Route;
use Illuminate\Support\ServiceProvider;

class NominalServiceProvider extends ServiceProvider
{
    /**
     * Bootstrap the application services.
     *
     * @return void
     */
    public function boot()
    {
        $this->loadMigrationsFrom(__DIR__.'/migrations');
        $this->loadViewsFrom(__DIR__.'/resources/views', 'nom');
        $this->publishes([
            __DIR__.'/config/nominals.php' => config_path('nominals.php')
        ]);
    }

    /**
     * Register the application services.
     *
     * @return void
     */
    public function register()
    {
        Route::group([
            'middleware' => 'web',
            'namespace' => 'Algling\Nominals\Http\Controllers',
        ], function ($router) {
            require __DIR__.'/routes.php';
        });
    }
}

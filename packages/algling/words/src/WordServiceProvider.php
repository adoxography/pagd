<?php

namespace Algling\Words;

use App\Language;
use Algling\Words\Models\Form;
use Algling\Words\Commands\Transfer;
use Illuminate\Support\Facades\Route;
use Illuminate\Support\ServiceProvider;
use Algling\Words\Models\Observers\FormObserver;

class WordServiceProvider extends ServiceProvider
{
    protected $connections = [
        \Algling\Words\Models\Form::class => 'form',
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
        $this->loadViewsFrom(__DIR__.'/resources/views', 'word');
        $this->bootRouteModelBindings();
        $this->composeViews();
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
            'namespace' => 'Algling\Words\Http\Controllers',
        ], function ($router) {
            require __DIR__.'/routes.php';
        });
    }

    protected function bootRouteModelBindings()
    {
        foreach($this->connections as $model => $binding) {
            Route::bind($binding, function($value) use ($model) {
                return $model::find($value);
            });
        }
    }

    protected function composeViews()
    {
        $this->composeExampleForm();
    }

    private function composeExampleForm()
    {
        view()->composer(['word::examples.create', 'word::examples.edit'], function($view)
        {
            $data = [
                'languages' => Language::select('id', 'name')->get()
            ];
            $view->with($data);
        });
    }
}

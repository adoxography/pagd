<?php

namespace Algling\SS;

use App\Language;
use Algling\SS\Models\Type;
use Algling\SS\Models\Value;
use Algling\SS\Models\Variable;
use Illuminate\Support\Facades\Route;
use Illuminate\Support\ServiceProvider;
use Algling\SS\Models\Observers\VariableObserver;

class StructuralSurveyServiceProvider extends ServiceProvider
{
    protected $connections = [
        Value::class => 'value',
        Variable::class => 'variable'
    ];

    /**
     * Bootstrap the application services.
     *
     * @return void
     */
    public function boot()
    {
        $this->loadViewsFrom(__DIR__.'/views', 'ss');
        $this->loadMigrationsFrom(__DIR__.'/migrations');
        $this->publishes([__DIR__.'/assets' => resource_path('assets')], 'assets');

        $this->bootObservers();
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
            'namespace' => 'Algling\SS\Controllers',
        ], function ($router) {
            require __DIR__.'/routes.php';
        });
    }

    protected function bootObservers()
    {
        Variable::observe(VariableObserver::class);
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
        $this->composeVariableForm();
        $this->composeDatapointForm();
    }

    private function composeVariableForm()
    {
        view()->composer(['ss::variables.create', 'ss::variables.edit'], function($view) {
            $data = [
                'types' => Type::select('id', 'name')->get(),
                'values' => Value::select('id', 'name')->get()
            ];
            $view->with($data);
        });
    }

    private function composeDatapointForm()
    {
        view()->composer(['ss::datapoints.create', 'ss::datapoints.edit'], function($view) {
            $data = [
                'languages' => Language::select('id', 'name')->get(),
                'variables' => Variable::select('id', 'name')->with('values')->get()
            ];

            $view->with($data);
        });
    }
}

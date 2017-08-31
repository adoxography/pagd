<?php

namespace Algling\Words;

use Algling\Words\Models\Example;
use Algling\Words\Models\Gap;
use App\Language;
use Algling\Words\Models\Form;
use Route;
use Illuminate\Support\ServiceProvider;

class WordServiceProvider extends ServiceProvider
{
    protected $connections = [
        Form::class => 'form',
        Example::class => 'example',
        Gap::class => 'emptyform'
    ];

    /**
     * Bootstrap the application services.
     *
     * @return void
     */
    public function boot()
    {
        $this->loadMigrationsFrom(__DIR__.'/migrations');
        $this->loadViewsFrom(__DIR__.'/Resources/views', 'word');
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
        foreach ($this->connections as $model => $binding) {
            Route::bind($binding, function ($value) use ($model) {
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
        view()->composer(['word::examples.create', 'word::examples.edit'], function ($view) {
            $data = [
                'languages' => Language::select('id', 'name')->get()
            ];
            $view->with($data);
        });
    }
}

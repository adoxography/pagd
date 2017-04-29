<?php

namespace Algling\Verbals;

use App\Language;
use App\ChangeType;
use Algling\Verbals\Models\Mode;
use Algling\Verbals\Models\Order;
use Algling\Verbals\Models\Argument;
use Algling\Verbals\Models\VerbClass;
use Illuminate\Support\Facades\Route;
use Algling\Verbals\Commands\Transfer;
use Illuminate\Support\ServiceProvider;

class VerbalServiceProvider extends ServiceProvider
{
    protected $connections = [
        \Algling\Verbals\Models\Form::class => 'form'
    ];

    /**
     * Bootstrap the application services.
     *
     * @return void
     */
    public function boot()
    {
        $this->loadMigrationsFrom(__DIR__.'/migrations');
        $this->loadViewsFrom(__DIR__.'/resources/views', 'verb');
        $this->bootCommands();
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
            'namespace' => 'Algling\Verbals\Http\Controllers',
        ], function ($router) {
            require __DIR__.'/routes.php';
        });
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

    protected function composeViews()
    {
        $this->composeExampleForm();
        $this->composeFormForm();
    }

    private function composeFormForm()
    {
        view()->composer(['verb::forms.create', 'verb::forms.edit', 'verb::emptyForms.edit'], function($view)
        {
            $data = [
                'arguments'   => Argument::select('id','name')->get(),
                'classes'     => VerbClass::select('id','name')->get(),
                'languages'   => Language::select('id','name')->get(),
                'modes'       => Mode::select('id','name')->get(),
                'orders'      => Order::select('id','name')->get(),
                'changeTypes' => ChangeType::select('id','name')->get()->prepend(['id' => null, 'name' => 'N/A'])
            ];
            $view->with($data);
        });
    }

    private function composeExampleForm()
    {
        view()->composer(['verb::examples.create', 'verb::examples.edit'], function($view)
        {
            $data = [
                'languages' => Language::select('id', 'name')->get()
            ];
            $view->with($data);
        });
    }
}

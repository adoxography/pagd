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
    /**
     * Bootstrap the application services.
     *
     * @return void
     */
    public function boot()
    {
        $this->loadMigrationsFrom(__DIR__.'/migrations');
        $this->loadViewsFrom(__DIR__.'/resources/views', 'verb');

        if($this->app->runningInConsole()) {
            $this->commands([Transfer::class]);
        }

        $this->composeExampleForm();
        $this->composeFormForm();
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

<?php

namespace Algling\Verbals;

use Algling\Verbals\Models\Form;
use Algling\Verbals\Models\Gap;
use App\Language;
use App\ChangeType;
use Algling\Verbals\Models\Mode;
use Algling\Verbals\Models\Order;
use Algling\Verbals\Models\Argument;
use Algling\Verbals\Models\VerbClass;
use Route;
use Illuminate\Support\ServiceProvider;

class VerbalServiceProvider extends ServiceProvider
{
    protected $connections = [
        Form::class => 'verbForm',
        Gap::class => 'verbGap'
    ];

    /**
     * Bootstrap the application services.
     *
     * @return void
     */
    public function boot()
    {
        $this->loadMigrationsFrom(__DIR__.'/migrations');
        $this->loadViewsFrom(__DIR__.'/Resources/views', 'verb');
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
        $this->composeFormForm();
    }

    private function composeFormForm()
    {
        view()->composer('verb::forms.partials.form', function ($view) {
            $data = [
                'arguments'   => Argument::select('id', 'name')->get(),
                'classes'     => VerbClass::select('id', 'name')->get(),
                'languages'   => Language::select('id', 'name')->get(),
                'modes'       => Mode::select('id', 'name')->get(),
                'orders'      => Order::select('id', 'name')->get(),
                'changeTypes' => ChangeType::select('id', 'name')->get()->prepend(['id' => null, 'name' => 'N/A'])
            ];
            $view->with($data);
        });
    }
}

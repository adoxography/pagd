<?php

namespace Algling\Nominals;

use Algling\Nominals\Models\Form;
use App\Language;
use App\ChangeType;
use Algling\Nominals\Models\Paradigm;
use Route;
use Illuminate\Support\ServiceProvider;
use Algling\Nominals\Models\NominalFeature;
use Algling\Nominals\Models\PronominalFeature;

class NominalServiceProvider extends ServiceProvider
{
    protected $connections = [
        Form::class => 'nominalForm'
    ];

    /**
     * Bootstrap the application services.
     *
     * @return void
     */
    public function boot()
    {
        $this->loadMigrationsFrom(__DIR__.'/migrations');
        $this->loadViewsFrom(__DIR__.'/Resources/views', 'nom');
        $this->bootRouteModelBindings();
        $this->publishes([
            __DIR__.'/config/nominals.php' => config_path('nominals.php')
        ]);
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
            'namespace' => 'Algling\Nominals\Http\Controllers',
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
        $this->composeShowNominals();
    }

    protected function composeFormForm()
    {
        view()->composer('nom::forms.partials.form', function ($view) {
            $data = [
                'languages'          => Language::select(['name', 'id'])->get(),
                'pronominalFeatures' => PronominalFeature::all(),
                'nominalFeatures'    => NominalFeature::all(),
                'paradigms'          => Paradigm::with('type')->get(),
                'changeTypes'        => ChangeType::all()
            ];
            $view->with($data);
        });
    }

    protected function composeShowNominals()
    {
        view()->composer('nom::partials.show.nominals', function ($view) {
            $data = [
                'pronominalFeatures' => PronominalFeature::all(),
                'nominalFeatures'    => NominalFeature::all()
            ];
            $view->with($data);
        });
    }
}

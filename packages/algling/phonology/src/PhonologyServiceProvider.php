<?php

namespace Algling\Phonology;

use Algling\Phonology\Models\Backness;
use Algling\Phonology\Models\Height;
use Algling\Phonology\Models\Length;
use Algling\Phonology\Models\Manner;
use Algling\Phonology\Models\Place;
use Algling\Phonology\Models\Reflex;
use Algling\Phonology\Models\Voicing;
use App\Language;
use Illuminate\Support\ServiceProvider;
use Route;

class PhonologyServiceProvider extends ServiceProvider
{
    protected $connections = [
        Reflex::class => 'reflex'
    ];

    /**
     * Bootstrap the application services.
     *
     * @return void
     */
    public function boot()
    {
        $this->loadMigrationsFrom(__DIR__.'/migrations');
        $this->loadViewsFrom(__DIR__.'/Resources/views', 'phon');
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
            'namespace' => 'Algling\Phonology\Http\Controllers',
        ], function ($router) {
            require __DIR__.'/routes.php';
        });
    }

    protected function composeViews()
    {
        $this->composePhonemeForm();
        $this->composeReflexForm();
    }

    protected function bootRouteModelBindings()
    {
        foreach ($this->connections as $model => $binding) {
            Route::bind($binding, function ($value) use ($model) {
                return $model::find($value);
            });
        }
    }

    protected function composePhonemeForm()
    {
        view()->composer('phon::phonemes.partials.form', function ($view) {
            $data = [
                'languages' => Language::select('id', 'name')->get(),

                'places'   => Place::select('id', 'name')->orderBy('id')->get(),
                'manners'  => Manner::select('id', 'name')->orderBy('id')->get(),
                'voicings' => Voicing::select('id', 'name')->get(),

                'heights'    => Height::select('id', 'name')->orderBy('id')->get(),
                'backnesses' => Backness::select('id', 'name')->orderBy('id')->get(),
                'lengths'    => Length::select('id', 'name')->orderBy('id')->get(),
            ];

            $view->with($data);
        });
    }

    protected function composeReflexForm()
    {
        view()->composer('phon::reflexes.partials.form', function ($view) {
            $data = [
                'languages' => Language::select('id', 'name')->get()
            ];

            $view->with($data);
        });
    }
}

<?php

namespace Algling\Morphemes;

use App\Language;
use App\ChangeType;
use Algling\Morphemes\Models\Slot;
use Algling\Morphemes\Models\Gloss;
use Illuminate\Support\Facades\Route;
use Algling\Morphemes\Models\Morpheme;
use Illuminate\Support\ServiceProvider;
use Algling\Morphemes\Commands\Transfer;
use Algling\Morphemes\Models\Observers\GlossObserver;
use Algling\Morphemes\Models\Observers\MorphemeObserver;

class MorphemeServiceProvider extends ServiceProvider
{
    /**
     * Bootstrap the application services.
     *
     * @return void
     */
    public function boot()
    {
        $this->loadViewsFrom(__DIR__.'/resources/views', 'morph');
        $this->loadMigrationsFrom(__DIR__.'/migrations');

        if($this->app->runningInConsole()) {
            $this->commands([Transfer::class]);
        }

        $this->composeMorphemeForm();

        Gloss::observe(GlossObserver::class);
        Morpheme::observe(MorphemeObserver::class);
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
            'namespace' => 'Algling\Morphemes\Http\Controllers',
        ], function ($router) {
            require __DIR__.'/routes.php';
        });
    }

    private function composeMorphemeForm()
    {
        view()->composer(['morph::morphemes.create', 'morph::morphemes.edit'], function($view)
        {
            $data = [
                'languages' => Language::select('id','name')->get(),
                'glosses'   => Gloss::select('id','abv as name')->get(),
                'slots'     => Slot::select('id','abv as name')->get(),
                'changeTypes' => ChangeType::select('id','name')->get()->prepend(['id' => null, 'name' => 'N/A'])
            ];
            $view->with($data);
        });
    }
}

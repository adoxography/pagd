<?php

namespace Algling\Morphemes;

use App\Language;
use App\ChangeType;
use Algling\Morphemes\Models\Slot;
use Algling\Morphemes\Models\Gloss;
use Illuminate\Support\Facades\Route;
use Algling\Morphemes\Models\Morpheme;
use Illuminate\Support\ServiceProvider;
use Algling\Morphemes\Models\InitialChange;
use Algling\Morphemes\Models\Observers\GlossObserver;
use Algling\Morphemes\Models\Observers\MorphemeObserver;

class MorphemeServiceProvider extends ServiceProvider
{
    protected $connections = [
        Morpheme::class => 'morpheme',
        Gloss::class => 'gloss',
        Slot::class => 'slot'
    ];

    /**
     * Bootstrap the application services.
     *
     * @return void
     */
    public function boot()
    {
        $this->loadViewsFrom(__DIR__.'/resources/views', 'morph');
        $this->loadMigrationsFrom(__DIR__.'/migrations');

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
            'namespace' => 'Algling\Morphemes\Http\Controllers',
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
        $this->composeMorphemeForm();
    }

    private function composeMorphemeForm()
    {
        view()->composer('morph::morphemes.partials.form', function($view)
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

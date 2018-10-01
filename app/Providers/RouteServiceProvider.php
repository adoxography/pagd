<?php

namespace App\Providers;

use App\Models\Phonology\Phoneme;
use App\Language;
use App\Models\Morphology\Gloss;
use App\Models\Morphology\Morpheme;
use App\Models\Morphology\Slot;
use App\Models\Phonology\Reflex;
use App\Rule;
use App\Source;
use Route;
use Illuminate\Foundation\Support\Providers\RouteServiceProvider as ServiceProvider;

class RouteServiceProvider extends ServiceProvider
{
    /**
     * This namespace is applied to your controller routes.
     *
     * In addition, it is set as the URL generator's root namespace.
     *
     * @var string
     */
    protected $namespace = 'App\Http\Controllers';

    protected $connections = [
        Source::class    => 'source',
        Rule::class      => 'rule',
        Phoneme::class => 'phoneme',
        Morpheme::class => 'morpheme',
        Gloss::class => 'gloss',
        Slot::class => 'slot',
        Reflex::class => 'reflex'
    ];

    /**
     * Define your route model bindings, pattern filters, etc.
     *
     * @return void
     */
    public function boot()
    {
        parent::boot();

        Route::bind('language', function($value) {
            if(is_numeric($value)) {
                return Language::find($value);
            } else {
                return Language::where('iso', $value)->first();
            }
        });

        foreach($this->connections as $model => $binding) {
            Route::bind($binding, function($value) use ($model) {
                return $model::find($value);
            });
        }
    }

    /**
     * Define the routes for the application.
     *
     * @return void
     */
    public function map()
    {
        $this->mapApiRoutes();

        $this->mapWebRoutes('languages');
        $this->mapWebRoutes('sources');

        $this->mapWebRoutes('morphemes', 'Morphology');

        $this->mapWebRoutes('phonemes', 'Phonology');
        $this->mapWebroutes('clusters', 'Phonology');
        $this->mapWebRoutes('reflexes', 'Phonology');

        $this->mapWebRoutes('users');
        $this->mapWebRoutes('tickets', 'Tickets');
        $this->mapWebRoutes('autocomplete');

        Route::middleware('web')
            ->namespace($this->namespace)
            ->group(base_path('routes/web/web.php'));
    }

    /**
     * Define the "web" routes for the application.
     *
     * These routes all receive session state, CSRF protection, etc.
     *
     * @return void
     */
    protected function mapWebRoutes($name, $namespaceAddon = null)
    {
        $namespace = $this->namespace;

        if ($namespaceAddon) {
            $namespace .= "\\$namespaceAddon";
        }

        Route::middleware('web')
            ->namespace($namespace)
            ->prefix($name)
            ->group(base_path("routes/web/$name.php"));
    }

    /**
     * Define the "api" routes for the application.
     *
     * These routes are typically stateless.
     *
     * @return void
     */
    protected function mapApiRoutes()
    {
        Route::group([
            'middleware' => 'api',
            'namespace' => $this->namespace,
            'prefix' => 'api',
        ], function ($router) {
            require base_path('routes/api/api.php');
        });
    }
}

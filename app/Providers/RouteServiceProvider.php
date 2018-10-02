<?php

namespace App\Providers;

use App\Models\Phonology\Phoneme;
use App\Language;
use App\Models\Nominals\Form as NominalForm;
use App\Models\Morphology\Gloss;
use App\Models\Morphology\Morpheme;
use App\Models\Morphology\Slot;
use App\Models\Phonology\Reflex;
use App\Models\StructuralSurvey\Value;
use App\Models\StructuralSurvey\Variable;
use App\Models\Verbs\Form as VerbForm;
use App\Models\Words\Example as WordExample;
use App\Models\Words\Gap as WordGap;
use App\Models\Words\Form as WordForm;
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
        Source::class => 'source',
        Rule::class   => 'rule',

        Phoneme::class => 'phoneme',
        Reflex::class  => 'reflex',

        Gloss::class    => 'gloss',
        Morpheme::class => 'morpheme',
        Slot::class     => 'slot',

        Value::class    => 'value',
        Variable::class => 'variable',

        NominalForm::class => 'nominalForm',
        VerbForm::class    => 'verbForm',
        VerbGap::class     => 'verbGap',
        WordExample::class => 'example',
        WordForm::class    => 'form',
        WordGap::class     => 'emptyform'

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
        $this->mapWebRoutes('clusters', 'Phonology');
        $this->mapWebRoutes('reflexes', 'Phonology');

        $this->mapWebRoutes('variables',  'StructuralSurvey');
        $this->mapWebRoutes('datapoints', 'StructuralSurvey');

        $this->mapWebRoutes('nominals', 'Nominals');
        $this->mapWebRoutes('forms',    'Words');
        $this->mapWebRoutes('examples', 'Words');
        $this->mapWebRoutes('features', 'Words');
        $this->mapWebroutes('verbs',    'Verbs');

        $this->mapWebRoutes('admin');
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

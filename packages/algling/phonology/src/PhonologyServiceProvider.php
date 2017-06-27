<?php

namespace Algling\Phonology;

use Route;
use App\Language;
use Algling\Phonology\Models\Place;
use Algling\Phonology\Models\Height;
use Algling\Phonology\Models\Length;
use Algling\Phonology\Models\Manner;
use Algling\Phonology\Models\Voicing;
use Algling\Phonology\Models\Backness;
use Illuminate\Support\ServiceProvider;

class PhonologyServiceProvider extends ServiceProvider
{
    /**
     * Bootstrap the application services.
     *
     * @return void
     */
    public function boot()
    {
        $this->loadMigrationsFrom(__DIR__.'/migrations');
        $this->loadViewsFrom(__DIR__.'/resources/views', 'phon');
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
    }

    protected function composePhonemeForm()
    {
        view()->composer('phon::phonemes.partials.form', function($view) {
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
}

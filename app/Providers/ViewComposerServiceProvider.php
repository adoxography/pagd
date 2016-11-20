<?php

namespace App\Providers;

use App\Argument;
use App\FormClass;
use App\Gloss;
use App\Group;
use App\Language;
use App\Mood;
use App\Order;
use App\Slot;
use App\Tense;
use Illuminate\Support\ServiceProvider;

class ViewComposerServiceProvider extends ServiceProvider
{
    /**
     * Bootstrap the application services.
     *
     * @return void
     */
    public function boot()
    {
        $this->composeFormForm();
        $this->composeLanguageForm();
        $this->composeMorphemeForm();
    }

    private function composeLanguageForm()
    {
        view()->composer('languages.partials.form', function($view)
        {
            $data = [
                'parents' => Language::select('id','name as value')->get(),
                'groups'  => Group::select('id','name as value')->get()
            ];
            $view->with($data);
        });
    }

    private function composeFormForm()
    {
        view()->composer('forms.partials.form', function($view)
        {
            $data = [
                'arguments' => Argument::select('id','name as value')->get(),
                'classes'   => FormClass::select('id','name as value')->get(),
                'languages' => Language::select('id','name as value')->get(),
                'moods'     => Mood::select('id','name as value')->get(),
                'orders'    => Order::select('id','name as value')->get(),
                'tenses'    => Tense::select('id','name as value')->get()
            ];
            $view->with($data);
        });
    }

    private function composeMorphemeForm()
    {
        view()->composer('morphemes.partials.form', function($view)
        {
            $data = [
                'languages' => Language::select('id','name as value')->get(),
                'glosses'   => Gloss::select('id','abv as value')->get(),
                'slots'     => Slot::select('id','abv as value')->get()
            ];
            $view->with($data);
        });
    }

    /**
     * Register the application services.
     *
     * @return void
     */
    public function register()
    {
        //
    }
}

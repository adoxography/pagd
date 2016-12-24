<?php

namespace App\Providers;

use App\Argument;
use App\FormClass;
use App\Gloss;
use App\Group;
use App\Language;
use App\Mode;
use App\Order;
use App\Slot;
use Illuminate\Support\ServiceProvider;
use Netcarver\Textile\Parser;

class ViewComposerServiceProvider extends ServiceProvider
{
    /**
     * Bootstrap the application services.
     *
     * @return void
     */
    public function boot()
    {
        $this->composeExampleForm();
        $this->composeFormForm();
        $this->composeLanguageForm();
        $this->composeMorphemeForm();
        $this->composeMultiMorphemeForm();
        $this->composerMorphemeOTGForm();

        $this->composeShow();
        $this->composeSearch();
        $this->composeLayout();
    }

    private function composeLayout(){
        view()->composer('layout', function($view){
            $data = [
                'languageHeadings' => Language::select('id','name')->get()
            ];

            $view->with($data);
        });
    }

    private function composeExampleForm()
    {
        view()->composer('examples.partials.form', function($view)
        {
            $data = [
                'languages' => Language::select('id', 'name as value')->get()
            ];
            $view->with($data);
        });
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
                'modes'     => Mode::select('id','name as value')->get(),
                'orders'    => Order::select('id','name as value')->get()
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

    private function composerMorphemeOTGForm()
    {
        view()->composer('morphemes.partials.create-otg', function($view)
        {
            $data = [
                'glosses'   => Gloss::select('id','abv as value')->get(),
                'slots'     => Slot::select('id','abv as value')->get()
            ];
            $view->with($data);
        });
    }

    private function composeMultiMorphemeForm()
    {
        view()->composer('morphemes.createMulti', function($view)
        {
            $data = [
                'glosses' => Gloss::select('id', 'abv as value')->get(),
                'slots'   => Slot::select('id', 'abv as value')->get()
            ];
            $view->with($data);
        });
    }

    private function composeShow()
    {
        view()->composer('morphemes.show', function($view)
        {
            $data = [
                'parser' => new Parser()
            ];
            $view->with($data);
        });
    }

    private function composeSearch()
    {
        view()->composer('search.index', function($view)
        {
            $data = [
                'arguments' => Argument::select('id','name')->get(),
                'classes'   => FormClass::select('id','name')->get(),
                'modes'     => Mode::select('id','name')->get(),
                'orders'    => Order::select('id','name')->get()
            ];
            $view->with($data);
        });
    }

    private function toArray($collection){
        $output = [];

        foreach($collection as $item){
            $output[] = [$item->id => $item->value];
        }

        return $output;
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

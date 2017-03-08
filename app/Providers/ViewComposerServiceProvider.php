<?php

namespace App\Providers;

use App\Mode;
use App\Slot;
use App\Gloss;
use App\Group;
use App\Order;
use App\Argument;
use App\Language;
use App\FormClass;
use App\ChangeType;
use Netcarver\Textile\Parser;
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
        $this->composeExampleForm();
        $this->composeFormForm();
        $this->composeLanguageForm();
        $this->composeMorphemeForm();
        $this->composeRuleForm();

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
        view()->composer(['examples.create', 'examples.edit'], function($view)
        {
            $data = [
                'languages' => Language::select('id', 'name')->get()
            ];
            $view->with($data);
        });
    }

    private function composeLanguageForm()
    {
        view()->composer(['languages.create', 'languages.edit'], function($view)
        {
            $data = [
                'parents' => Language::select('id','name')->get(),
                'groups'  => Group::select('id','name')->orderBy('position')->get()
            ];
            $view->with($data);
        });
    }

    private function composeFormForm()
    {
        view()->composer(['forms.create', 'forms.edit', 'emptyForms.edit'], function($view)
        {
            $data = [
                'arguments'   => Argument::select('id','name')->get(),
                'classes'     => FormClass::select('id','name')->get(),
                'languages'   => Language::select('id','name')->get(),
                'modes'       => Mode::select('id','name')->get(),
                'orders'      => Order::select('id','name')->get(),
                'changeTypes' => ChangeType::select('id','name')->get()->prepend(['id' => null, 'name' => 'N/A'])
            ];
            $view->with($data);
        });
    }

    private function composeMorphemeForm()
    {
        view()->composer(['morphemes.create', 'morphemes.edit'], function($view)
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

    private function composeRuleForm()
    {
        view()->composer(['rules.create', 'rules.edit'], function($view)
        {
            $data = [
                'languages' => Language::select('id','name')->get()
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
                'languages' => Language::select('id','name')->get(),
                'modes'     => Mode::select('id','name')->get(),
                'orders'    => Order::select('id','name')->get()
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

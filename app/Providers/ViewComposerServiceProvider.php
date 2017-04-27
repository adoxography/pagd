<?php

namespace App\Providers;

use App\Group;
use App\Language;
use Netcarver\Textile\Parser;
use Algling\Verbals\Models\Mode;
use Algling\Verbals\Models\Order;
use Algling\Verbals\Models\Argument;
use Algling\Verbals\Models\VerbClass;
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
        $this->composeLanguageForm();
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
                'classes'   => VerbClass::select('id','name')->get(),
                'languages' => Language::select('id','name')->get(),
                'modes'     => Mode::select('id','name')->get(),
                'orders'    => Order::select('id','name')->orderBy('position')->get()
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

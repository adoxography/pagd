<?php

namespace App\Providers;

use Algling\Verbals\Models\Argument;
use Algling\Verbals\Models\Mode;
use Algling\Verbals\Models\Order;
use Algling\Verbals\Models\VerbClass;
use App\ChangeType;
use App\Group;
use App\Language;
use App\Models\Morphology\Gloss;
use App\Models\Morphology\Slot;
use App\RuleType;
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
        $this->composeGroupForm();
        $this->composeRuleForm();
        $this->composeAudioForm();
        $this->composeMorphemeForm();

        $this->composeShowMorphemes();

        $this->composeSearch();
    }

    private function composeLanguageForm()
    {
        view()->composer(['languages.create', 'languages.edit'], function ($view) {
            $data = [
                'parents' => Language::select('id', 'name', 'location')->get(),
                'groups' => Group::select('id', 'name')->orderBy('position')->get()
            ];
            $view->with($data);
        });
    }

    protected function composeGroupForm()
    {
        view()->composer('groups.partials.form', function ($view) {
            $data = [
                'parents' => Group::select('id', 'name')->orderBy('name')->get()
            ];

            $view->with($data);
        });
    }

    private function composeRuleForm()
    {
        view()->composer('rules.partials.form', function ($view) {
            $data = [
                'languages' => Language::select('id', 'name')->get(),
                'types' => RuleType::all()
            ];
            $view->with($data);
        });
    }

    private function composeAudioForm()
    {
        view()->composer('audio.partials.form', function ($view) {
            $data = [
                'languages' => Language::select('id', 'name')->get()
            ];
            $view->with($data);
        });
    }

    private function composeSearch()
    {
        view()->composer('search.index', function ($view) {
            $data = [
                'arguments' => Argument::select('id', 'name')->get(),
                'classes' => VerbClass::select('id', 'name')->get(),
                'languages' => Language::select('id', 'name')->get(),
                'modes' => Mode::select('id', 'name')->get(),
                'orders' => Order::select('id', 'name')->orderBy('position')->get()
            ];
            $view->with($data);
        });
    }

    protected function composeShowMorphemes()
    {
        view()->composer('partials.show.morphemes', function ($view) {
            $data = [
                'slots' => Slot::select(['id', 'abv'])->orderBy('abv')->get(),
                'glosses' => Gloss::select('abv')->orderBy('abv')->get()
            ];

            $view->with($data);
        });
    }

    private function composeMorphemeForm()
    {
        view()->composer('morphemes.partials.form', function ($view) {
            $data = [
                'languages' => Language::select('id', 'name')->get(),
                'glosses' => Gloss::select('id', 'abv as name')->get(),
                'slots' => Slot::select('id', 'abv as name')->get(),
                'changeTypes' => ChangeType::select('id', 'name')->get()->prepend(['id' => null, 'name' => 'N/A'])
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

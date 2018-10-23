<?php

namespace App\Providers;

use App\Models\ChangeType;
use App\Models\Group;
use App\Models\Language;
use App\Models\Rules\RuleType;
use App\Models\IGT\IGTLineType;

use App\Models\Nominals\NominalFeature;
use App\Models\Nominals\Paradigm;
use App\Models\Nominals\PronominalFeature;

use App\Models\Morphology\Gloss;
use App\Models\Morphology\Slot;

use App\Models\Phonology\Place;
use App\Models\Phonology\Manner;
use App\Models\Phonology\Voicing;
use App\Models\Phonology\Height;
use App\Models\Phonology\Backness;
use App\Models\Phonology\Length;

use App\Models\StructuralSurvey\Type;
use App\Models\StructuralSurvey\Value;
use App\Models\StructuralSurvey\Variable;

use App\Models\Verbs\Argument;
use App\Models\Verbs\Mode;
use App\Models\Verbs\Order;
use App\Models\Verbs\VerbClass;

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
        $this->composeIGTForm();

        $this->composeShowMorphemes();

        $this->composePhonemeForm();
        $this->composeReflexForm();

        $this->composeVariableForm();
        $this->composeDatapointForm();

        $this->composeExampleForm();
        $this->composeVerbFormForm();
        $this->composeNominalFormForm();
        $this->composeShowNominals();
        $this->composeShowVerbs();

        $this->composeSearch();
    }

    private function composeLanguageForm()
    {
        view()->composer(['languages.create', 'languages.edit'], function ($view) {
            $data = [
                'parents' => Language::select('id', 'name', 'location_id')
                    ->with('location')
                    ->get(),
                'groups' => Group::select('id', 'name')->orderBy('position')->get()
            ];
            $view->with($data);
        });
    }

    protected function composeIGTForm()
    {
        view()->composer(['igt.create', 'igt.edit'], function ($view) {
            $data = [
                'languages' => Language::select('id', 'name')->get(),
                'lineTypes' => IGTLineType::select('id', 'name', 'align')->get()
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

    private function composePhonemeForm()
    {
        view()->composer('phonemes.partials.form', function ($view) {
            $data = [
                'languages'  => Language::select('id', 'name')->get(),

                'places'     => Place::select('id', 'name')->orderBy('id')->get(),
                'manners'    => Manner::select('id', 'name')->orderBy('id')->get(),
                'voicings'   => Voicing::select('id', 'name')->get(),

                'heights'    => Height::select('id', 'name')->orderBy('id')->get(),
                'backnesses' => Backness::select('id', 'name')->orderBy('id')->get(),
                'lengths'    => Length::select('id', 'name')->orderBy('id')->get()
            ];

            $view->with($data);
        });
    }

    private function composeReflexForm()
    {
        view()->composer('reflexes.partials.form', function ($view) {
            $data = ['languages' => Language::select('id', 'name')->get()];
            $view->with($data);
        });
    }

    private function composeVariableForm()
    {
        view()->composer('variables.partials.form', function ($view) {
            $data = [
                'types'  => Type::select('id', 'name')->get(),
                'values' => Value::select('id', 'name')->get()
            ];
            $view->with($data);
        });
    }

    private function composeDatapointForm()
    {
        view()->composer('datapoints.partials.form', function ($view) {
            $data = [
                'languages' => Language::select('id', 'name')->get(),
                'variables' => Variable::select('id', 'name')->with('values')->get()
            ];
            $view->with($data);
        });
    }

    protected function composeNominalFormForm()
    {
        view()->composer('nominals.forms.partials.form', function ($view) {
            $data = [
                'languages'          => Language::select(['name', 'id'])->get(),
                'pronominalFeatures' => PronominalFeature::all(),
                'nominalFeatures'    => NominalFeature::all(),
                'paradigms'          => Paradigm::with('type')->get(),
                'changeTypes'        => ChangeType::all()
            ];
            $view->with($data);
        });
    }

    protected function composeShowNominals()
    {
        view()->composer('partials.show.nominals', function ($view) {
            $noneOption = collect([['name' => 'None', 'id' => 0]]);

            $data = collect([
                'Pronominal Feature' => $noneOption->concat(PronominalFeature::all()),
                'Nominal Feature'    => $noneOption->concat(NominalFeature::all())
            ]);
            $view->with(['data' => $data]);
        });
    }

    private function composeVerbFormForm()
    {
        view()->composer('verbs.forms.partials.form', function ($view) {
            $data = [
                'arguments'   => Argument::select('id', 'name')->get(),
                'classes'     => VerbClass::select('id', 'name')->get(),
                'languages'   => Language::select('id', 'name')->get(),
                'modes'       => Mode::select('id', 'name')->get(),
                'orders'      => Order::select('id', 'name')->get(),
                'changeTypes' => ChangeType::select('id', 'name')->get()->prepend([
                    'id' => null,
                    'name' => 'N/A'
                ])
            ];
            $view->with($data);
        });
    }

    private function composeExampleForm()
    {
        view()->composer('words.examples.partials.form', function ($view) {

            $data = [
                'languages' => Language::select('id', 'name')->get()
            ];
            $view->with($data);
        });
    }

    private function composeShowVerbs()
    {
        view()->composer('partials.show.verbs', function ($view) {
            $features = Argument::all();
            $nullableFeatures = collect([['name' => 'None', 'id' => 0]])->concat($features);

            $data = collect([
                'Mode' => Mode::all(),
                'Class' => VerbClass::all(),
                'Order' => Order::all(),
                'Subject' => $features,
                'Primary Object' => $nullableFeatures,
                'Secondary Object' => $nullableFeatures
            ]);

            $view->with(['data' => $data]);
        });
    }
}

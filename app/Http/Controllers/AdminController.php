<?php

namespace App\Http\Controllers;

use App\Models\Morphology\Morpheme;
use App\Models\Users\RegistrationCode;
use App\Models\Users\User;
use App\Models\Source;
use App\Models\Language;
use App\Models\Nominals\Form as NominalForm;
use App\Models\Phonology\Length;
use App\Models\Phonology\Height;
use App\Models\Phonology\Backness;
use App\Models\Phonology\Phoneme;
use App\Models\Phonology\Place;
use App\Models\Phonology\Voicing;
use App\Models\Phonology\Manner;
use App\Models\Words\Example;
use App\Models\Words\Feature;
use App\Models\Verbs\Form as VerbForm;
use App\Models\Verbs\Mode;
use App\Models\Verbs\Order;
use App\Models\Verbs\VerbClass;

use Illuminate\Http\Request;

class AdminController extends Controller
{
    public function __construct()
    {
        $this->middleware(['role:developer|leader']);
    }

    public function index()
    {
        $data = [
            "numUsers" => User::count(),
            "numVerbForms" => VerbForm::count(),
            "numNominalForms" => NominalForm::count(),
            "numVerbExamples" => Example::ofType('verbStructures')->count(),
            "numNominalExamples" => Example::ofType('nominalStructures')->count(),
            "numMorphemes" => Morpheme::count(),
            "numPhonemes" => Phoneme::count(),
            "numSources" => Source::count(),
            "numInUseSources" => Source::inUse()->count()
        ];

        return view('admin.index', $data);
    }

    public function stats()
    {
        $formPendingFunction = function ($query) {
            $query->whereNotNull('Word_Forms.morphemicForm');
        };

        $examplePendingFunction = function ($query) {
            $query->whereNotNull('Word_Examples.morphemicForm');
        };

        $formCompleteFunction = function ($query) {
            $query->whereNotNull('Word_Forms.morphemicform')
                  ->where('Word_Forms.complete', '1');
        };

        $exampleCompleteFunction = function ($query) {
            $query->whereNotNull('Word_Examples.morphemicform')
                  ->where('Word_Examples.complete', '1');
        };

        $languages = Language::withCount([
            'verbForms',
            'verbExamples',
            'nominalForms',
            'nominalExamples',

            'verbForms as pending_verb_forms_count' => $formPendingFunction,
            'verbExamples as pending_verb_examples_count' => $examplePendingFunction,
            'nominalForms as pending_nominal_forms_count' => $formPendingFunction,
            'nominalExamples as pending_nominal_examples_count' => $examplePendingFunction,

            'verbForms as complete_verb_forms_count' => $formCompleteFunction,
            'verbExamples as complete_verb_examples_count' => $exampleCompleteFunction,
            'nominalForms as complete_nominal_forms_count' => $formCompleteFunction,
            'nominalExamples as complete_nominal_examples_count' => $exampleCompleteFunction
        ])->get();

        $languages->each(function ($language) {
            foreach (['verb_forms', 'verb_examples', 'nominal_forms', 'nominal_examples'] as $field) {
                $count = "{$field}_count";
                $complete = "complete_{$field}_count";
                $pending = "pending_{$field}_count";
                $pendingPercent = "pending_{$field}_percent";
                $completePercent = "complete_{$field}_percent";
                $pendingColour = "pending_{$field}_colour";
                $completeColour = "complete_{$field}_colour";

                if ($language->$count > 0) {
                    $value = $language->$pending / $language->$count;
                    $language->$pendingPercent = number_format($value, 2);
                } else {
                    $language->$pendingPercent = number_format(0, 2);
                }

                if ($language->$complete > 0) {
                    $value = $language->$complete / $language->$pending;
                    $language->$completePercent = number_format($value, 2);
                } else {
                    $language->$completePercent = number_format(0, 2);
                }

                $value = round($language->$pendingPercent * 255);
                $antivalue = 255 - $value;
                $language->$pendingColour = "rgba($antivalue, $value, 0, 0.6)";

                $value = round($language->$completePercent * 255);
                $antivalue = 255 - $value;
                $language->$completeColour = "rgba($antivalue, $value, 0, 0.6)";
            }
        });

        return view('admin.stats', compact('languages'));
    }

    public function users()
    {
        $codes = RegistrationCode::with('users')->get();
        return view('admin.users', compact('codes'));
    }

    public function verbs()
    {
        $disableTest = function ($item) { return $item->structures_count > 0; };

        $data = [
            'classes' => [
                'data' => VerbClass::withCount('structures')->get(),
                'fields' => ['name'],
                'uri' => '/verbs/classes',
                'disableTest' => $disableTest
            ],

            'modes' => [
                'data' => Mode::withCount('structures')->get(),
                'fields' => ['name'],
                'uri' => '/verbs/modes',
                'disableTest' => $disableTest
            ],

            'orders' => [
                'data' => Order::withCount('structures')->get(),
                'fields' => ['name'],
                'uri' => '/verbs/orders',
                'disableTest' => $disableTest
            ]
        ];

        return view('admin.verbs', $data);
    }

    public function features()
    {
        $featureData = Feature::withCount([
            'subjectStructures',
            'primaryObjectStructures',
            'secondaryObjectStructures',
            'nominalStructures',
            'pronominalStructures'
        ])->get();

        $disableTest = function ($item) {
            return $item->subject_structures_count +
                   $item->primary_object_structures_count +
                   $item->secondary_object_structures_count +
                   $item->nominal_structures_count +
                   $item->pronominal_structures_count > 0;
        };

        $features = [
            'data' => $featureData,
            'disableTest' => $disableTest
        ];

        return view('admin.features', compact('features'));
    }

    public function phonemes()
    {
        $types = collect([
            'lengths'    => Length::class,
            'heights'    => Height::class,
            'backnesses' => Backness::class,
            'places'     => Place::class,
            'manners'    => Manner::class,
            'voicings'   => Voicing::class
        ]);

        $data = $types->mapWithKeys(function ($class, $name) {
            return [$name => [
                'data' => $class::withCount('featureSets')->get(),
                'fields' => ['name'],
                'uri' => "/phonemes/data/$name",
                'disableTest' => function ($item) { return $item->feature_sets_count > 0; }
            ]];
        });

        return view('admin.phonemes', $data);
    }
}

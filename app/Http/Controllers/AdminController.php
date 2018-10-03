<?php

namespace App\Http\Controllers;

use App\Models\Morphology\Morpheme;
use App\Models\Users\RegistrationCode;
use App\Models\Users\User;
use App\Models\Source;
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

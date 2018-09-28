<?php

namespace App\Http\Controllers;

use App\Models\Morphology\Morpheme;
use App\RegistrationCode;
use App\User;
use App\Source;
use Algling\Nominals\Models\Form as NominalForm;
use Algling\Phonology\Models\Phoneme;
use Algling\Words\Models\Example;
use Algling\Verbals\Models\Form as VerbForm;
use Algling\Verbals\Models\Mode;
use Algling\Verbals\Models\Order;
use Algling\Verbals\Models\VerbClass;

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
        $disableTest = function($item) { return $item->structures_count > 0; };

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

    public function nominals()
    {
        $data = [];
        return view('admin.nominals', $data);
    }

    public function morphemes()
    {
        $data = [];
        return view('admin.morphemes', $data);
    }

    public function phonemes()
    {
        $data = [];
        return view('admin.phonemes', $data);
    }
}

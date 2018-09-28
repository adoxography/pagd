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
}

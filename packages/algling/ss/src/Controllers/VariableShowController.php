<?php

namespace Algling\SS\Controllers;

use App\Language;
use Algling\SS\Models\Variable;
use App\Http\Controllers\Controller;

class VariableShowController extends Controller
{
    public function basicDetails(Variable $variable)
    {
        $variable->load([
            'values',
            'sources',
            'type'
        ]);

        return view('ss::variables.show.basic', compact('variable'));
    }

    public function datapoints(Variable $variable)
    {
        $variable->load('datapoints');
        $languages = Language::with('datapoints')->get();

        return view('ss::variables.show.datapoints', compact('variable', 'languages'));
    }
}

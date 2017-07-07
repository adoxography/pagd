<?php

namespace Algling\SS\Controllers;

use Algling\SS\Models\Variable;
use App\Group;
use App\Http\Controllers\Controller;
use App\Language;
use MikeAlmond\Color\Color;
use MikeAlmond\Color\PaletteGenerator;

class VariableShowController extends Controller
{
    public function basicDetails(Variable $variable)
    {
        $variable->load([
            'values' => function($query) {
                $query->orderBy('name');
            },
            'sources',
            'type'
        ]);

        return view('ss::variables.show.basic', compact('variable'));
    }

    public function datapoints(Variable $variable)
    {
        $variable->load('datapoints');
        $languages = Language::with('datapoints')->get();

        $values = $variable->datapoints->pluck('value');
        $uniqueValues = $values->unique('id');

        $palette = new \App\Palette\Palette('#50e450');
        $palette->generate($uniqueValues->count());
        $colorAssignments = $palette->map($values, 'name');

        return view('ss::variables.show.datapoints', compact('variable', 'languages', 'colorAssignments'));
    }
}

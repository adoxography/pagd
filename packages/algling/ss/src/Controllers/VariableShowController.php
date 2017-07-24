<?php

namespace Algling\SS\Controllers;

use Algling\SS\Models\Variable;
use App\Group;
use App\Http\Controllers\Controller;
use App\Language;
use App\Palette\Palette;

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
        $variable->load(['datapoints', 'datapoints.value']);

        $colorAssignments = $this->getPalette($variable);

        $languages = Language::with([
            'datapoints' => function($query) use ($variable) {
                return $query->where('variable_id', $variable->id);
            },
            'datapoints.variable',
            'datapoints.value'
        ])->whereHas('datapoints', function($query) use ($variable) {
            $query->where('variable_id', $variable->id);
        })->get();

        foreach($languages as $language) {
            $language->color = str_replace('#', '', $colorAssignments[$language->getVariable($variable)->value->name]);
        }

        return view('ss::variables.show.datapoints', compact('variable', 'languages', 'colorAssignments'));
    }

    public function languages(Variable $variable)
    {
        $variable->load(['datapoints', 'datapoints.value']);

        $colorAssignments = $this->getPalette($variable);

        $group = Group::first();

        return view('ss::variables.show.languages', compact('variable', 'colorAssignments', 'group'));
    }

    protected function getPalette(Variable $variable)
    {
        $values = $variable->datapoints->pluck('value');
        $uniqueValues = $values->unique('id');

        $palette = new Palette('#50e450');
        $palette->generate($uniqueValues->count());

        return $palette->map($values, 'name');
    }
}

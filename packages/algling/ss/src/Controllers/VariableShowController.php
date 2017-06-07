<?php

namespace Algling\SS\Controllers;

use App\Language;
use MikeAlmond\Color\Color;
use Algling\SS\Models\Variable;
use App\Http\Controllers\Controller;
use MikeAlmond\Color\PaletteGenerator;

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

        $numValues = $variable->datapoints->unique('value_id')->count();

        $palette = $this->generatePalette($numValues);

        $colorAssignments = $this->assignColors($palette, $variable->datapoints);

        return view('ss::variables.show.datapoints', compact('variable', 'languages', 'colorAssignments'));
    }

    protected function generatePalette($numColors)
    {
        $palette = [];
        $color = Color::fromHex('#50e450');

        $degrees = 360 / $numColors;

        for($i = 0; $i < $numColors; $i++) {
            $palette[] = $color->adjustHue($degrees * $i);
        }

        return $palette;
    }

    protected function assignColors($palette, $datapoints)
    {
        $colorAssignments = [];

        foreach($datapoints as $datapoint) {
            if(!isset($colorAssignments[$datapoint->value->name])) {
                $colorAssignments[$datapoint->value->name] = $palette[count($colorAssignments)];
            }
        }

        return $colorAssignments;
    }
}

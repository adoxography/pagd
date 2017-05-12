<?php

namespace Algling\Words\Http\Controllers;

use Algling\Words\Models\Example;
use App\Http\Controllers\AlgModelController;

class ExampleShowController extends AlgModelController
{
    public function basicDetails(Example $example)
    {
        $example->load([
            'form',
            'form.language',
            'form.structure',
            'parent',
            'parent.form.language',
            'morphemes',
            'morphemes.glosses',
            'morphemes.slot'
        ]);

        return view('word::examples.show.basic', compact('example'));
    }

    public function cognates(Example $example)
    {
        $example->load([
            'form.language'
        ]);

        return view('word::examples.show.cognates', compact('example'));
    }
}

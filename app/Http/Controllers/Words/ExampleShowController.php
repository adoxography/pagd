<?php

namespace App\Http\Controllers\Words;

use App\Models\Words\Example;
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

        if((!isset($example->language) || $example->language->hidden_at !== null) && !(\Auth::user() && \Auth::user()->hasPermissionTo('add content'))) {
            abort(404);
        }

        return view('words.examples.show.basic', compact('example'));
    }

    public function cognates(Example $example)
    {
        $example->load([
            'form.language'
        ]);

        if((!isset($example->language) || $example->language->hidden_at !== null) && !(\Auth::user() && \Auth::user()->hasPermissionTo('add content'))) {
            abort(404);
        }

        return view('words.examples.show.cognates', compact('example'));
    }

    public function log(Example $example)
    {
        $example->load([
            'revisionHistory',
            'form.language'
        ]);

        if((!isset($example->language) || $example->language->hidden_at !== null) && !(\Auth::user() && \Auth::user()->hasPermissionTo('add content'))) {
            abort(404);
        }

        return view('words.examples.show.log', compact('example'));
    }
}

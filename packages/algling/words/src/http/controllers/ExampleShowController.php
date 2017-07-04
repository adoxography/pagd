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

        if((!isset($example->language) || $example->language->hidden_at !== null) && !(\Auth::user() && \Auth::user()->permissions->canEdit)) {
            abort(404);
        }

        return view('word::examples.show.basic', compact('example'));
    }

    public function cognates(Example $example)
    {
        $example->load([
            'form.language'
        ]);

        if((!isset($example->language) || $example->language->hidden_at !== null) && !(\Auth::user() && \Auth::user()->permissions->canEdit)) {
            abort(404);
        }

        return view('word::examples.show.cognates', compact('example'));
    }

    public function log(Example $example)
    {
        $example->load([
            'revisionHistory',
            'form.language'
        ]);

        if((!isset($example->language) || $example->language->hidden_at !== null) && !(\Auth::user() && \Auth::user()->permissions->canEdit)) {
            abort(404);
        }

        return view('word::examples.show.log', compact('example'));
    }
}

<?php

namespace Algling\Morphemes\Http\Controllers;

use Algling\Morphemes\Models\Morpheme;
use App\Http\Controllers\AlgModelController;

class MorphemeShowController extends AlgModelController
{
    public function basicDetails(Morpheme $morpheme)
    {
        $morpheme->load([
            'language',
            'parent',
            'parent.language',
            'slot',
            'glosses',
            'sources'
        ]);

        return view('morph::morphemes.show.basic', compact('morpheme'));
    }

    public function cognates(Morpheme $morpheme)
    {
        $morpheme->load([
            'language',
            'parent',
            'parent.language',
            'children',
            'children.language'
        ]);

        $cognates = $morpheme->cognates();

        return view('morph::morphemes.show.cognates', compact('morpheme', 'cognates'));
    }

    public function forms(Morpheme $morpheme)
    {
        $morpheme->load([
            'language',
            'forms',
            'forms.structure'
        ]);

        return view('morph::morphemes.show.forms', compact('morpheme'));
    }
}

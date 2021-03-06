<?php

namespace App\Http\Controllers\Morphology;

use App\Http\Controllers\AlgModelController;
use App\Models\Morphology\Morpheme;

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

        return view('morphemes.show.basic', compact('morpheme'));
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

        return view('morphemes.show.cognates', compact('morpheme', 'cognates'));
    }

    public function forms(Morpheme $morpheme)
    {
        $morpheme->load([
            'language',
            'language.nominalParadigms',
            'examples'
        ]);

        $morpheme->loadNominalForms([
            'structure',
            'structure.paradigm',
            'structure.pronominalFeature',
            'structure.nominalFeature'
        ]);

        $morpheme->loadVerbForms([
            'structure',
            'structure.subject',
            'structure.primaryObject',
            'structure.secondaryObject',
            'structure.mode',
            'structure.order',
            'structure.verbClass',
        ]);

        return view('morphemes.show.forms', compact('morpheme'));
    }

    public function log(Morpheme $morpheme)
    {
        $morpheme->load([
            'language',
            'revisionHistory'
        ]);

        return view('morphemes.show.log', compact('morpheme'));
    }
}

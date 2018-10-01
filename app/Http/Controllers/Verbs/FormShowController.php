<?php

namespace App\Http\Controllers\Verbs;

use App\Models\Verbs\Form;
use App\Http\Controllers\AlgModelController;

class FormShowController extends AlgModelController
{
    public function basicDetails(Form $form)
    {
        $form->load([
            'language',
            'structure',
            'structure.subject',
            'structure.primaryObject',
            'structure.secondaryObject',
            'structure.mode',
            'structure.order',
            'structure.verbClass',
            'morphemes',
            'sources',
            'examples',
            'parent',
            'parent.language',
            'parent.morphemes'
        ]);

        return view('verbs.forms.show.basic', compact('form'));
    }

    public function cognates(Form $form)
    {
        $form->load([
            'language',
            'parent',
            'parent.language',
            'children',
            'children.language'
        ]);
        $cognates = $form->cognates();

        return view('verbs.forms.show.cognates', compact('form', 'cognates'));
    }

    public function log(Form $form)
    {
        $form->load('revisionHistory');

        return view('verbs.forms.show.log', compact('form'));
    }
}

<?php

namespace Algling\Verbals\Http\Controllers;

use Algling\Verbals\Models\Form;
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
            'examples'
        ]);

        return view('verb::forms.show.basic', compact('form'));
    }

    public function cognates(Form $form)
    {
        $form->load([
            'language',
            'parent',
            'children'
        ]);
        $cognates = $form->cognates();

        return view('verb::forms.show.cognates', compact('form', 'cognates'));
    }
}

<?php

namespace Algling\Nominals\Http\Controllers;

use Algling\Nominals\Models\Form;
use App\Http\Controllers\Controller;

class FormShowController extends Controller
{
    public function basicDetails(Form $nominalForm)
    {
        $form = $nominalForm->load([
        	'language',
        	'structure.paradigm',
        	'structure.nominalFeature',
        	'structure.pronominalFeature'
        ]);

        return view('nom::forms.show.basic', compact('form'));
    }

    public function cognates(Form $nominalForm)
    {
    	$form = $nominalForm->load([
    		'language',
    		'parent',
    		'parent.language',
    		'children',
    		'children.language'
    	]);

    	return view('nom::forms.show.cognates', compact('form'));
    }

    public function log(Form $nominalForm)
    {
        $form = $nominalForm->load([
            'language',
            'revisionHistory'
        ]);

        return view('nom::forms.show.log', compact('form'));
    }
}

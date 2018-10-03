<?php

namespace App\Http\Controllers;

use App\Models\Source;

class SourceShowController extends Controller
{
    public function basicDetails(Source $source)
    {
    	return view('sources.show.basic', compact('source'));
    }

    public function forms(Source $source)
    {
    	$source->load([
    		'examples',
    		'gaps',
    		'gaps.structure'
    	]);

        $source->loadVerbForms(['structure', 'structure.subject', 'structure.primaryObject', 'structure.secondaryObject', 'structure.mode', 'structure.verbClass', 'structure.order']);

        $source->loadNominalForms(['structure', 'structure.pronominalFeature', 'structure.nominalFeature', 'structure.paradigm']);

    	return view('sources.show.forms', compact('source'));
    }

    public function morphemes(Source $source)
    {
    	$source->load([
    		'morphemes',
    		'morphemes.glosses',
    		'morphemes.slot'
    	]);

    	return view('sources.show.morphemes', compact('source'));
    }
}

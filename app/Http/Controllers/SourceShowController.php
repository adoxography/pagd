<?php

namespace App\Http\Controllers;

use App\Source;
use Illuminate\Http\Request;

class SourceShowController extends Controller
{
    public function basicDetails(Source $source)
    {
    	return view('sources.show.basic', compact('source'));
    }

    public function forms(Source $source)
    {
    	$source->load([
    		'forms',
    		'forms.structure',
    		'examples',
    		'gaps',
    		'gaps.structure'
    	]);

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

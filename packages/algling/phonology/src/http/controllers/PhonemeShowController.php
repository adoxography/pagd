<?php

namespace Algling\Phonology\Http\Controllers;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Algling\Phonology\Models\Phoneme;

class PhonemeShowController extends Controller
{
    public function basicDetails(Phoneme $phoneme)
    {
    	$phoneme->load([
    		'language',
    		'sources',
    		'allophones'
    	]);

    	return view('phon::phonemes.show.basic', compact('phoneme'));
    }

    public function reflexes(Phoneme $phoneme)
    {
        $phoneme->load([
            'language',
            'reflexes',
            'parents'
        ]);

        return view('phon::phonemes.show.reflexes', compact('phoneme'));
    }

    public function log(Phoneme $phoneme)
    {
    	$phoneme->load([
    		'language',
    		'revisionHistory'
    	]);

    	return view('phon::phonemes.show.log', compact('phoneme'));
    }
}

<?php

namespace App\Http\Controllers\Phonology;

use App\Http\Controllers\Controller;
use App\Models\Phonology\Phoneme;

class PhonemeShowController extends Controller
{
    public function basicDetails(Phoneme $phoneme)
    {
        $phoneme->load([
            'language',
            'sources',
            'allophones'
        ]);

        return view('phonemes.show.basic', compact('phoneme'));
    }

    public function reflexes(Phoneme $phoneme)
    {
        $phoneme->load([
            'language'
        ]);

        $graphData = $phoneme->getReflexGraph();
        $languages = $graphData->languages;
        $graphData = $graphData->getData();

        return view('phonemes.show.reflexes', compact('phoneme', 'graphData', 'languages'));
    }

    public function examples(Phoneme $phoneme)
    {
        $phoneme->load([
            'language',
            'examples'
        ]);

        return view('phonemes.show.examples', compact('phoneme'));
    }

    public function log(Phoneme $phoneme)
    {
        $phoneme->load([
            'language',
            'revisionHistory'
        ]);

        return view('phonemes.show.log', compact('phoneme'));
    }
}

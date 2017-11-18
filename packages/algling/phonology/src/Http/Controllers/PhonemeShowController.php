<?php

namespace Algling\Phonology\Http\Controllers;

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
            'language'
        ]);

        $graphData = $phoneme->getReflexGraph();
        $languages = $graphData->languages;
        $graphData = json_encode($graphData->getData());

        return view('phon::phonemes.show.reflexes', compact('phoneme', 'graphData', 'languages'));
    }

    public function examples(Phoneme $phoneme)
    {
        $phoneme->load([
            'language',
            'examples'
        ]);

        return view('phon::phonemes.show.examples', compact('phoneme'));
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

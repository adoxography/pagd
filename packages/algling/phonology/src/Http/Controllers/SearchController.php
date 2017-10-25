<?php

namespace Algling\Phonology\Http\Controllers;

use App\Http\Controllers\Controller;
use App\Language;

class SearchController extends Controller
{
    public function show()
    {
        $types = [
            'consonants',
            'vowels',
            'clusters'
        ];

        $languages = Language::where('id', '<>', 1)->orderBy('name')->get();
        $inventory = Language::find(1)->phonology();

        return view('phon::search.show', compact('types', 'languages', 'inventory'));
    }

    public function results()
    {
        $type = request()->type;
        $phonemes = request()->phonemes;

        $languages = collect(array_filter(request()->languages, function ($language) {
            return is_numeric($language);
        }))->map(function ($id) {
            $language = Language::where('id', $id)->with('phonemes', 'phonemes.paParents', 'group')->first();
            $language->phonology(true);

            return $language;
        })->sortBy(function ($language) {
            return [$language->group->position, $language->position];
        });

        $pa = Language::where('id', 1)->with(['phonemes' => function ($query) use ($phonemes) {
            $query->whereIn('id', $phonemes);
        }])->first();

        return view('phon::search.results', compact('languages', 'type', 'pa'));
    }
}

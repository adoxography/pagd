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
        $filter = request()->mode == 'reflex';
        $view = $this->getView();

        $pa = $this->getPa($phonemes, $filter);
        $languages = $this->getLanguages($phonemes, $filter);

        return view($view, compact('languages', 'type', 'pa'));
    }

    protected function getView()
    {
        return 'phon::search.results.' . request()->mode;
    }

    protected function getPa($phonemes, $filter)
    {
        $language = Language::find(1);

        $language->phonology(true, function ($query) use ($phonemes, $filter) {
            if ($filter) {
                $query->whereIn('id', $phonemes);
            }
        });

        return $language;
    }

    protected function getLanguages($phonemes, $filter)
    {
        return collect(array_filter(request()->languages, function ($language) {
            return is_numeric($language);
        }))->map(function ($id) use ($phonemes, $filter) {
            $language = Language::where('id', $id)
                ->with('group')
                ->first();
            $language->phonology(true, function ($query) use ($phonemes, $filter) {
                if ($filter) {
                    $query->whereHas('paParents', function ($query) use ($phonemes) {
                        $query->whereIn('parent_id', $phonemes);
                    });
                }
            });

            return $language;
        })->sortBy(function ($language) {
            return [$language->group->position, $language->position];
        });
    }
}

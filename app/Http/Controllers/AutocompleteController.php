<?php

namespace App\Http\Controllers;

use App\Http\Requests;
use App\Language;
use App\Source;
use Illuminate\Http\Request;
use Response;

class AutocompleteController extends Controller
{
    public function forms(Request $request)
    {
        $term     = $request->get('term');                              // What we're searching for
        $language = Language::with('parent')->find($request->language); // The language we're in
        $results = $this->findParents($language,$term,'forms','surfaceForm');

        return Response::json($results);
    }
    
    public function morphemes(Request $request)
    {
        $term     = $request->term;
        $language = Language::with('parent')->find($request->language);
        $results  = $this->findParents($language, $term, 'morphemes', 'name');

        return Response::json($results);
    }

    public function sources(Request $request)
    {
        $term = $request->term;
        $sources = Source::select('short as value', 'id')->where('short','LIKE',"%$term%")->get();

        return $sources->toJson();
    }

    private function findParents(Language $language, $term, $items, $field)
    {
        $results = array();

        if($language->parent) { // Recursive case: the language has a parent

            $parent = Language::with([
                'parent',
                $items => function ($query) use ($term, $field) {
                    $query->where($field, 'LIKE', "%$term%");
                }]
            )->find($language->parent->id);

            foreach($parent->getAttribute($items) as $item) {
                $results[] = [
                    'id' => $item->id,
                    'value' => $item->getAttribute($field) . ' (' . $parent->name . ')'
                ];
            }
            $results += $this->findParents($parent, $term, $items, $field);
        }

        return $results;
    }
}

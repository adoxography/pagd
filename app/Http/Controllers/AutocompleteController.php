<?php

namespace App\Http\Controllers;

use Response;
use App\Source;
use App\Language;
use App\Http\Requests;
use Illuminate\Http\Request;
use Algling\Words\Models\Form;
use Algling\Morphemes\Models\Morpheme;

class AutocompleteController extends Controller
{
    /**
     * Get all of the forms of a language that match a particular token
     *
     * @param  App\Http\Request  $request
     * @return  JSON
     */
    public function forms(Request $request)
    {
        // Unpack parameters
        $term     = $request->term;
        $language = $request->language;

        $results = Form::select('id', 'surfaceForm', 'language_id', 'morphemicForm as extra', 'formType_id')
                       ->with('language')
                       ->with('formType')
                       ->with('formType.subject')
                       ->with('formType.primaryObject')
                       ->with('formType.secondaryObject')
                       ->where('surfaceForm', 'LIKE', "%$term%")
                       ->where('language_id', $language)
                       ->get();

        foreach ($results as $result) {
            $result->name = $result->uniqueName;
        }

        return $results->toJson();
    }

    /**
     * Get all of the morphemes of a language that match a particular token
     *
     * @param  App\Http\Request  $request
     * @return  JSON
     */
    public function morphemes(Request $request)
    {
        $term = $request->term;
        $language = $request->language;

        $results = Morpheme::select('name', 'id', 'gloss_id', 'language_id')
                           ->where('name', 'LIKE', "%$term%")
                           ->where('name', '<>', 'V')
                           ->where('language_id', $language)
                           ->get();

        foreach($results as $result) {
            $result->name = str_replace('*', '', $result->uniqueName);
        }

        return $results->toJson();
    }

    /**
     * Get all of the sources where the short form matches a particular token
     *
     * @param  App\Http\Request  $request
     * @return  JSON
     */
    public function sources(Request $request)
    {
        $term = $request->term;
        
        $sources = Source::search($term)->take(10)->get();

        foreach($sources as $source) {
            $source->name = $source->long;
            $source->extra = $source->display;
        }

        return $sources->toJson();
    }

    /**
     * Get all of the forms in a language's parents that match a particular token
     *
     * @param  App\Http\Request  $request
     * @return  JSON
     */
    public function formParents(Request $request)
    {
        // Unpack parameters
        $term        = $request->term;
        $language_id = $request->language;

        $language = Language::with('parent')
                            ->find($language_id);

        $results = $this->findParents($language, $term, 'forms', 'surfaceForm');

        return json_encode($results);
    }
    
    /**
     * Get all of the morphemes in a language's parents that match a particular token
     *
     * @param  App\Http\Request  $request
     * @return  JSON
     */
    public function morphemeParents(Request $request)
    {
        // Unpack parameters
        $term        = $request->term;
        $language_id = $request->language;

        $language = Language::with('parent')
                            ->find($language_id);
        $results  = $this->findParents($language, $term, 'morphemes', 'name');

        return Response::json($results);
    }

    /**
     * Recursively find all of the members of a given field that match a given term
     * within all of the parents of a given language
     *
     * @param  App\Language  $language
     * @param  string  $term
     * @param  string  $items
     * @param  string  $field
     * @return  array
     */

    private function findParents(Language $language, $term, $items, $field)
    {
        $results = [];

        if ($language->parent) { // Recursive case: the language has a parent

            // Find this language's parent and eager load its parent and members of $field
            $parent = Language::with([
                'parent',
                $items => function ($query) use ($term, $field) {
                    $query->where($field, 'LIKE', "%$term%");
                }]
            )->find($language->parent->id);

            // Store the members in the $results array as id and name sets
            foreach ($parent->getAttribute($items) as $item) {
                $results[] = [
                    'id' => $item->id,
                    'name' => $item->uniqueNameWithLanguage()
                ];
            }

            // Recursively find members in this language's parent
            $results += $this->findParents($parent, $term, $items, $field);
        }
        // Base case: the language has no parent

        return $results;
    }
}

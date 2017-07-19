<?php

namespace App\Http\Controllers;

use Response;
use App\Source;
use App\Language;
use App\Http\Requests;
use Illuminate\Http\Request;
use Algling\Phonology\Models\Phoneme;
use Algling\Morphemes\Models\Morpheme;
use Algling\Verbals\Models\Form as VerbForm;
use Algling\Nominals\Models\Form as NominalForm;

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
        $options  = json_decode($request->options, true);
        $language = $options['language'];
        $type     = isset($options['type']) ? $options['type'] : 'all';

        if($type == 'verb') {
            $results = $this->queryVerbForms($term, $language);
        } elseif($type == 'nominal') {
            $results = $this->queryNominalForms($term, $language);           
        } else {
            $results = $this->queryVerbForms($term, $language)->merge($this->queryNominalForms($term, $language));
        }

        foreach ($results as $result) {
            $result->name = str_replace('*', '', $result->present('unique'));
        }

        return $results->toJson();
    }

    protected function queryVerbForms($term, $language)
    {
        return VerbForm::select('id', 'name', 'language_id', 'morphemicForm as extra', 'structure_id', 'structure_type')
            ->with('language')
            ->with('structure')
            ->with('structure.subject')
            ->with('structure.primaryObject')
            ->with('structure.secondaryObject')
            ->where('name', 'LIKE', "%$term%")
            ->where('language_id', $language)
            ->get();
    }

    protected function queryNominalForms($term, $language)
    {
        return NominalForm::select('id', 'name', 'language_id', 'morphemicForm as extra', 'structure_id', 'structure_type')
            ->with('language')
            ->with('structure')
            ->where('name', 'LIKE', "%$term%")
            ->where('language_id', $language)
            ->get();
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
        $options  = json_decode($request->options, true);
        $language = $options['language'];

        $results = Morpheme::select('name', 'id', 'gloss', 'language_id')
                           ->where('name', 'LIKE', "%$term%")
                           ->where('name', '<>', 'V')
                           ->where('language_id', $language)
                           ->get();

        foreach($results as $result) {
            $result->name = str_replace('*', '', $result->present('unique'));
        }

        return $results->toJson();
    }

    public function phonemes(Request $request)
    {
        $term = $request->term;
        $options = json_decode($request->options, true);
        $language = $options['language'];
        $type = isset($options['type']) ? $options['type'] : '';

        $query = Phoneme::select('algoName', 'ipaName', 'orthoName', 'id', 'language_id')
            ->where(function($query) use ($term) {
                $query->where('algoName', 'LIKE', "%$term%")
                    ->orWhere('ipaName', 'LIKE', "%$term%")
                    ->orWhere('orthoName', 'LIKE', "%$term%");
            })
            ->where('language_id', $language);

        if($type == 'phoneme') {
            $query->where('phonemeable_type', '<>', 'clusterTypes');
        }

        $results = $query->get();

        foreach($results as $result) {
            $result->name = "/{$result->algoName}/";
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
        $options     = json_decode($request->options, true);
        $language_id = $options['language'];
        $type        = $options['type'];

        $type .= 'Forms';

        $language = Language::with('parent')
            ->find($language_id);

        $results = $this->findParents($language, $term, $type, 'name');

        return json_encode($results);
    }

    public function exampleParents(Request $request)
    {
        $term = $request->term;
        $options = json_decode($request->options, true);
        $language_id = $options['language'];

        $language = Language::with('parent')
            ->find($language_id);
        
        $results = $this->findParents($language, $term, 'examples', 'Word_Examples.name');

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
        $options = json_decode($request->options, true);
        $language_id = $options['language'];

        $language = Language::with('parent')
            ->find($language_id);

        $results  = $this->findParents($language, $term, 'morphemes', 'name');

        return Response::json($results);
    }

    public function phonemeParents(Request $request)
    {
        $term = $request->term;
        $options = json_decode($request->options, true);
        $language_id = $options['language'];

        $language = Language::with('parent')
            ->find($language_id);

        $results = $this->findParents($language, $term, 'phonemes', 'algoName');

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
                    if(is_array($field)) {
                        for($i = 0; $i < count($field); $i++) {
                            $currField = $field[$i];

                            if($i == 0) {
                                $query->where($currField, 'LIKE', "%$term%");
                            } else {
                                $query->orWhere($currField, 'LIKE', "%$term%");
                            }
                        }
                    } else {
                        $query->where($field, 'LIKE', "%$term%");
                    }
                }]
            )->find($language->parent->id);

            // Store the members in the $results array as id and name sets
            foreach ($parent->getAttribute($items) as $item) {
                $results[] = [
                    'id' => $item->id,
                    'name' => $item->present('unique')->then('language')->__toString()
                ];
            }

            // Recursively find members in this language's parent
            $results += $this->findParents($parent, $term, $items, $field);
        }
        // Base case: the language has no parent

        return $results;
    }
}

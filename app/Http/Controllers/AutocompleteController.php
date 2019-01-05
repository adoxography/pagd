<?php

namespace App\Http\Controllers;

use App\Models\Nominals\Form as NominalForm;
use App\Models\Phonology\Phoneme;
use App\Models\Verbs\Form as VerbForm;
use App\Models\Words\Example;
use App\Models\Language;
use App\Models\Morphology\Morpheme;
use App\Models\Source;
use Response;

class AutocompleteController extends Controller
{
    /**
     * Get all of the forms of a language that match a particular token
     *
     * @return  string
     */
    public function forms()
    {
        // Unpack parameters
        $term     = request()->term;
        $options  = json_decode(request()->options, true);
        $language = $options['language'];
        $type     = isset($options['type']) ? $options['type'] : 'all';

        if ($type == 'verb') {
            $results = $this->queryVerbForms($term, $language);
        } elseif ($type == 'nominal') {
            $results = $this->queryNominalForms($term, $language);
        } else {
            $results = $this->queryVerbForms($term, $language)->merge($this->queryNominalForms($term, $language));
        }

        foreach ($results as $result) {
            $result->extra = $result->morphemesToJson();
            $result->name = str_replace('*', '', $result->present('unique'));
        }

        return $results->toJson();
    }

    protected function queryVerbForms($term, $language)
    {
        return VerbForm::select('id', 'name', 'language_id', 'morphemicForm', 'structure_id', 'structure_type')
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
        return NominalForm::select(
            'id',
            'name',
            'language_id',
            'morphemicForm',
            'structure_id',
            'structure_type'
        )
            ->with('language')
            ->with('structure')
            ->where('name', 'LIKE', "%$term%")
            ->where('language_id', $language)
            ->get();
    }

    /**
     * Get all of the morphemes of a language that match a particular token
     *
     * @param  Request  $request
     * @return  string
     */
    public function morphemes()
    {
        $term = request()->term;
        $options  = is_string(request()->options) ? json_decode(request()->options, true) : request()->options;
        $language = $options['language'];

        $results = Morpheme::select('name', 'id', 'gloss', 'slot_id', 'language_id', 'disambiguator')
                           ->with(['slot', 'initialChanges'])
                           ->where('name', 'LIKE', "%$term%")
                           ->where('name', '<>', 'V')
                           ->where('language_id', $language)
                           ->get();

        //if (!isset($options['alter']) || $options['alter'] === true) {
            //foreach ($results as $result) {
                //$result->name = str_replace('*', '', $result->present('unique'));
            //}
        //}

        return $results->toJson();
    }

    public function phonemes()
    {
        $term = request()->term;
        $options = json_decode(request()->options, true);
        $language = $options['language'];
        $type = isset($options['type']) ? $options['type'] : '';

        $query = Phoneme::select('algoName', 'ipaName', 'orthoName', 'id', 'language_id')
            ->where(function ($query) use ($term) {
                $query->where('algoName', 'LIKE', "%$term%")
                    ->orWhere('ipaName', 'LIKE', "%$term%")
                    ->orWhere('orthoName', 'LIKE', "%$term%");
            })
            ->where('language_id', $language);

        if ($type == 'phoneme') {
            $query->where('featurable_type', '<>', 'clusterTypes');
        }

        $results = $query->get();

        foreach ($results as $result) {
            $result->name = "/{$result->algoName}/";
        }

        return $results->toJson();
    }

    public function examples()
    {
        $term = request()->term;
        $options = json_decode(request()->options, true);
        $language = $options['language'];

        $query = Example::where('language_id', $language)
                    ->where('name', 'LIKE', "%$term%");

        $results = $query->get();

        return $results->toJson();
    }

    /**
     * Get all of the sources where the short form matches a particular token
     *
     * @return  string
     */
    public function sources()
    {
        $term = request()->term;

        $sources = Source::search($term)->take(15)->orderBy('author')->get();

        $sources = $sources->toArray();

        foreach ($sources as &$source) {
            $source['name'] = $source['long'];
            $source['extra'] = $source['display'];
        }

        return json_encode($sources);
    }

    /**
     * Get all of the forms in a language's parents that match a particular token
     *
     * @return  string
     */
    public function formParents()
    {
        // Unpack parameters
        $term        = request()->term;
        $options     = json_decode(request()->options, true);
        $language_id = $options['language'];
        $type        = $options['type'];

        $type .= 'Forms';

        $language = Language::with('parent')
            ->find($language_id);

        $results = $this->findParents($language, $term, $type, 'name');

        return json_encode($results);
    }

    public function exampleParents()
    {
        $term = request()->term;
        $options = json_decode(request()->options, true);
        $language_id = $options['language'];

        $language = Language::with('parent')
            ->find($language_id);

        $results = $this->findParents($language, $term, 'examples', 'Word_Examples.name');

        return json_encode($results);
    }

    /**
     * Get all of the morphemes in a language's parents that match a particular token
     *
     * @return  string
     */
    public function morphemeParents()
    {
        // Unpack parameters
        $term        = request()->term;
        $options = json_decode(request()->options, true);
        $language_id = $options['language'];

        $language = Language::with('parent')
            ->find($language_id);

        $results  = $this->findParents($language, $term, 'morphemes', 'name');

        return Response::json($results);
    }

    public function phonemeParents()
    {
        $term = request()->term;
        $options = json_decode(request()->options, true);
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
     * @param  Language  $language
     * @param  string  $term
     * @param  string  $items
     * @param  string  $field
     * @return  array
     */

    private function findParents(Language $language, $term, $items, $field)
    {
        $results = collect();

        if ($language->parent) { // Recursive case: the language has a parent

            // Find this language's parent and eager load its parent and members of $field
            $parent = Language::with(
                [
                'parent',
                $items => function ($query) use ($term, $field) {
                    if (is_array($field)) {
                        for ($i = 0; $i < count($field); $i++) {
                            $currField = $field[$i];

                            if ($i == 0) {
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

            // Store the members in the results array as id and name sets
            foreach ($parent->getAttribute($items) as $item) {
                $results->push([
                    'id' => $item->id,
                    'name' => $item->present('unique')->then('language')->__toString()
                ]);
            }

            // Recursively find members in this language's parent
            $results = $results->concat($this->findParents($parent, $term, $items, $field));
        }
        // Base case: the language has no parent

        return $results->sortBy('name');
    }
}

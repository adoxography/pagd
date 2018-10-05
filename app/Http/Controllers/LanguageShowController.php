<?php

namespace App\Http\Controllers;

use App\Models\Language;
use App\Models\StructuralSurvey\Type;

class LanguageShowController extends Controller
{
    public function basicDetails(Language $language)
    {
        $language->load([
            'group', 
            'parent',
            'children' => function($query) {
                $query->orderBy('name');
            }
        ]);

        return view('languages.show.basic', compact('language'));        
    }

    public function survey(Language $language)
    {
        $types = Type::with('variables')->get();

        if(count($types) > 0) {
            $types = $types->filter(function($value, $key) {
                return count($value->variables) > 0;
            });
        }

        return view('languages.show.survey', compact('language', 'types'));
    }

    public function verbs(Language $language)
    {
        $formsPerPage = 20;
        $numPages = $language->forms()->count() / $formsPerPage;
        $forms = $language->verbForms()
                          ->with([
                              'structure',
                              'structure.mode',
                              'structure.verbClass',
                              'structure.order',
                              'structure.subject',
                              'structure.primaryObject',
                              'structure.secondaryObject',
                              'examples'
                          ])->paginate($formsPerPage);
        //$language->load([
            //'verbGaps',
            //'verbGaps.structure',
            //'verbGaps.structure.mode',
            //'verbGaps.structure.verbClass',
            //'verbGaps.structure.order',
            //'verbGaps.structure.subject',
            //'verbGaps.structure.primaryObject',
            //'verbGaps.structure.secondaryObject',

            //'verbForms',
            //'verbForms.structure',
            //'verbForms.structure.mode',
            //'verbForms.structure.verbClass',
            //'verbForms.structure.order',
            //'verbForms.structure.subject',
            //'verbForms.structure.primaryObject',
            //'verbForms.structure.secondaryObject',
            //'verbForms.examples'
        //]);

        //$language->examples = collect();

        //foreach($language->verbForms as $form) {
            //foreach($form->examples as &$example) {
                //$example->structure = $form->structure;
            //}

            //$language->examples = $language->examples->merge($form->examples);
        //}

        return view('languages.show.verbs', compact('language', 'numPages', 'forms'));
    }

    public function nominals(Language $language)
    {
        $language->load([
            'nominalForms',
            'nominalForms.structure.paradigm',
            'nominalForms.structure.pronominalFeature',
            'nominalForms.structure.nominalFeature',
        ]);

        $language->examples = collect();

        foreach($language->nominalForms as $form) {
            foreach($form->examples as &$example) {
                $example->structure = $form->structure;
            }

            $language->examples = $language->examples->merge($form->examples);
        }

        return view('languages.show.nominals', compact('language'));
    }

    public function morphemes(Language $language)
    {
        $language->load([
            'morphemes',
            'morphemes.slot',
            'morphemes.glosses'
        ]);

        return view('languages.show.morphemes', compact('language'));
    }

    public function paradigms(Language $language)
    {
        $language->load(['nominalParadigms']);
        $language->loadVerbParadigms();

        return view('languages.show.paradigms', compact('language'));
    }

    public function phonemes(Language $language)
    {
        $language->load([
            'phonemes',
            'phonemes.features',
            'phonemes.allophones'
        ]);

        $inventory = $language->phonology();
        if($language->id != 1) {
            $paInventory = Language::find(1)->phonology();
        }

        return view('languages.show.phonemes', compact('language', 'inventory', 'paInventory'));
    }

    public function clusters(Language $language)
    {
        $language->load([
            'phonemes',
            'phonemes.features',
            'phonemes.allophones'
        ]);

        $inventory = $language->phonology();
        if($language->id != 1) {
            $paInventory = Language::find(1)->phonology();
        }

        return view('languages.show.clusters', compact('language', 'inventory', 'paInventory'));
    }

    public function rules(Language $language)
    {
        $language->load('rules');

        return view('languages.show.rules', compact('language'));
    }

    public function sources(Language $language)
    {
        $sources = $language->sources();

        return view('languages.show.sources', compact('language', 'sources'));
    }

    public function log(Language $language)
    {
        $language->load('revisionHistory');

        return view('languages.show.log', compact('language'));
    }
}

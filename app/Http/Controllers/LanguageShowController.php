<?php

namespace App\Http\Controllers;

use App\Language;
use Algling\SS\Models\Type;
use Illuminate\Http\Request;

class LanguageShowController extends Controller
{
    public function basicDetails(Language $language)
    {
        $language->load(['group', 'parent', 'children']);

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

    public function forms(Language $language)
    {
        $language->load([
            'gaps',
            'gaps.structure',
            'gaps.structure.mode',
            'gaps.structure.verbClass',
            'gaps.structure.order',
            'gaps.structure.subject',
            'gaps.structure.primaryObject',
            'gaps.structure.secondaryObject',

            'forms',
            'forms.structure',
            'forms.structure.mode',
            'forms.structure.verbClass',
            'forms.structure.order',
            'forms.structure.subject',
            'forms.structure.primaryObject',
            'forms.structure.secondaryObject',
            'forms.examples'
        ]);

        $language->examples = collect();

        foreach($language->forms as $form) {
            foreach($form->examples as &$example) {
                $example->structure = $form->structure;
            }

            $language->examples = $language->examples->merge($form->examples);
        }

        return view('languages.show.forms', compact('language'));
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
        $language->paradigms = $language->getParadigms();

        return view('languages.show.paradigms', compact('language'));
    }

    public function phonemes(Language $language)
    {
        return view('languages.show.phonemes', compact('language'));
    }

    public function clusters(Language $language)
    {
        return view('languages.show.clusters', compact('language'));
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
        return view('languages.show.log', compact('language'));
    }
}

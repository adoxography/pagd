<?php

namespace App\Http\Controllers;

use App\Language;
use App\Http\Requests\LanguageRequest;

/**
 * HTTP Controller for languages
 */
class LanguageController extends Controller
{
    /**
     * Initialize middleware
     */
    public function __construct()
    {
        $this->middleware('auth')->except('index', 'show');
    }

    /**
     * Show the list of languages
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $languages = Language::orderBy('name')->get();
        return view('languages.index', compact('languages'));
    }

    /**
     * Show the language details.
     *
     * @param \App\Language The language
     * @return \Illuminate\Http\Response
     */
    public function show(Language $language)
    {
        $language->load([
            'group',
            'parent',
            'children',
            'morphemes' => function ($query) {
                // Don't bother with the V placeholder morpheme
                $query->where('name', '!=', 'V')
                      ->with('gloss')
                      ->with('slot')
                      ->orderBy('name');
            }
        ]);

        $sources = $language->sources();

        return view('languages.show', compact('language', 'sources'));
    }

    /**
     * Show the language creation form
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        return view('languages.create');
    }

    /**
     * Show the language edit form
     *
     * @param \App\Language The language
     * @return \Illuminate\Http\Response
     */
    public function edit(Language $language)
    {
        $language->load('parent', 'group');
        return view('languages.edit', compact('language'));
    }

    /**
     * Save a new language
     *
     * @param \App\Http\Requests\LanguageRequest
     * @return \Illuminate\Http\Response
     */
    public function store(LanguageRequest $request)
    {
        $language = Language::create($request->all());

        flash("{$language->name} added successfully.", 'is-success');
        return $language->id;
    }

    /**
     * Update a language
     *
     * @param \App\Http\Requests\LanguageRequest
     * @param \App\Language The language
     * @return \Illuminate\Http\Response
     */
    public function update(LanguageRequest $request, Language $language)
    {
        $language->update($request->all());

        flash("{$language->name} updated successfully.", 'is-success');
        return $language->id;
    }

    /**
     * Destroy a language
     *
     * @param \App\Language The language
     * @return \Illuminate\Http\Response
     */
    public function destroy(Language $language)
    {
        $language->delete();

        flash("{$language->name} deleted successfully.", 'is-info');
        return redirect('/languages');
    }

    /**
     * Show the language creation form with this language's details preloaded as its parent
     *
     * @param \App\Language The language
     * @return \Illuminate\Http\Response
     */
    public function addChild(Language $language)
    {
        $language->load('group');
        return view('languages.create')->with('presetParent', $language);
    }

    /**
     * Show the example creation form with this language's details preloaded
     *
     * @param \App\Language The language
     * @return \Illuminate\Http\Response
     */
    public function addExample(Language $language)
    {
        return view('examples.create')->with('presetLanguage', $language);
    }

    /**
     * Show the form creation form with this language's details preloaded
     *
     * @param \App\Language The language
     * @return \Illuminate\Http\Response
     */
    public function addForm(Language $language)
    {
        return view('forms.create')->with('presetLanguage', $language);
    }
   
    /**
     * Show the morpheme creation form with this language's details preloaded
     *
     * @param \App\Language The language
     * @return \Illuminate\Http\Response
     */
    public function addMorpheme(Language $language)
    {
        return view('morphemes.create')->with('presetLanguage', $language);
    }
}

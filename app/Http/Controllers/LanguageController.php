<?php

namespace App\Http\Controllers;

use App\Models\Group;
use App\Models\Language;
use App\Http\Requests\LanguageRequest;

/**
 * HTTP Controller for languages
 */
class LanguageController extends AlgModelController
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
        $groups = Group::all();
        return view('languages.index', compact('groups'));
    }

    /**
     * Show the language details.
     *
     * @param \App\Models\Language The language
     * @return \Illuminate\Http\Response
     */
    public function show(Language $language)
    {
        return redirect("/languages/{$language->id}/basic");
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

    public function clone(Language $language)
    {
        $language->name = '';
        $language->alternateNames = '';
        $language->iso = '';
        $language->algoCode = '';

        $language->load('parent', 'group');
        return view('languages.create', compact('language'));
    }

    /**
     * Show the language edit form
     *
     * @param \App\Models\Language The language
     * @return \Illuminate\Http\Response
     */
    public function edit(Language $language)
    {
        $language->load('parent', 'group', 'location');
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

        flash("{$language->name} added successfully. <a href='/groups/{$language->group_id}/order/edit'>Set its order</a>", 'is-success');
        return redirect("/languages/{$language->id}/basic");
    }

    /**
     * Update a language
     *
     * @param \App\Http\Requests\LanguageRequest
     * @param \App\Models\Language The language
     * @return \Illuminate\Http\Response
     */
    public function update(LanguageRequest $request, Language $language)
    {
        $language->update($request->all());

        flash("{$language->name} updated successfully.", 'is-success');
        return redirect("/languages/{$language->id}/basic");
    }

    /**
     * Destroy a language
     *
     * @param \App\Models\Language The language
     * @return \Illuminate\Http\Response
     */
    public function destroy(Language $language)
    {
        $language->delete();

        flash("{$language->name} deleted successfully.", 'is-success');
        return redirect('/languages');
    }

    /**
     * Show the language creation form with this language's details preloaded as its parent
     *
     * @param \App\Models\Language The language
     * @return \Illuminate\Http\Response
     */
    public function addChild(Language $language)
    {
        $language->load('group');
        return view('languages.create')->with('parent', $language);
    }

    /**
     * Show the example creation form with this language's details preloaded
     *
     * @param \App\Models\Language The language
     * @return \Illuminate\Http\Response
     */
    public function addExample(Language $language)
    {
        return view('words.examples.create')->with('language', $language);
    }

    /**
     * Show the form creation form with this language's details preloaded
     *
     * @param \App\Models\Language The language
     * @return \Illuminate\Http\Response
     */
    public function addVerbForm(Language $language)
    {
        return view('verbs.forms.create')->with('language', $language);
    }

    public function addNominalForm(Language $language)
    {
        return view('nominals.forms.create')->with('language', $language);
    }

    /**
     * Show the morpheme creation form with this language's details preloaded
     *
     * @param \App\Models\Language The language
     * @return \Illuminate\Http\Response
     */
    public function addMorpheme(Language $language)
    {
        return view('morphemes.create')->with('language', $language);
    }

    /**
     * Show the rule creation form with this language's details preloaded
     *
     * @param \App\Models\Language The language
     * @return \Illuminate\Http\Response
     */
    public function addRule(Language $language)
    {
        return view('rules.create')->with('language', $language);
    }

    public function addParadigm(Language $language)
    {
        return view('nominals.paradigms.create', compact('language'));
    }

    public function addPhoneme(Language $language)
    {
        $type = request()->type;

        return view('phon::phonemes.create', compact('language', 'type'));
    }

    public function order()
    {
        $groups = Group::with(['languages' => function ($query) {
            $query->orderBy('position');
        }])->orderBy('position')->get();
        // $languages = Language::all();

        return view('languages.order', compact('groups'));
    }

    public function storeOrder()
    {
        $groups = request()->all();

        foreach ($groups as $group) {
            if (isset($group['newPosition']) && $group['newPosition'] != $group['position']) {
                $model = Group::find($group['id']);
                $model->position = $group['newPosition'];
                $model->save();
            }

            foreach ($group['languages'] as $language) {
                if (isset($language['newPosition']) && $language['newPosition'] != $language['position']) {
                    $model = Language::find($language['id']);
                    $model->position = $language['newPosition'];
                    $model->save();
                }
            }
        }

        return 'success';
    }
}

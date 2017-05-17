<?php

namespace App\Http\Controllers;

use App\Group;
use App\Language;
use Algling\SS\Models\Type;
use Illuminate\Support\Facades\Auth;
use App\Http\Requests\LanguageRequest;
use App\Http\Controllers\AlgModelController;

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
        $groups = Group::orderBy('position')
                       ->with(['languages' => function($query) {
                            $query->orderBy('position');
                       }])->get();
        $languages = Language::orderBy('name')->get();
        return view('languages.index', compact('groups', 'languages'));
    }

    /**
     * Show the language details.
     *
     * @param \App\Language The language
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

        flash("{$language->name} added successfully. <a href='/languages/order'>Set its order</a>", 'is-success');
        return redirect("/languages/{$language->id}");
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
        return redirect("/languages/{$language->id}");
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

        flash("{$language->name} deleted successfully.", 'is-success');
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
        return view('languages.create')->with('parent', $language);
    }

    /**
     * Show the example creation form with this language's details preloaded
     *
     * @param \App\Language The language
     * @return \Illuminate\Http\Response
     */
    public function addExample(Language $language)
    {
        return view('word::examples.create')->with('language', $language);
    }

    /**
     * Show the form creation form with this language's details preloaded
     *
     * @param \App\Language The language
     * @return \Illuminate\Http\Response
     */
    public function addForm(Language $language)
    {
        return view('verb::forms.create')->with('language', $language);
    }
   
    /**
     * Show the morpheme creation form with this language's details preloaded
     *
     * @param \App\Language The language
     * @return \Illuminate\Http\Response
     */
    public function addMorpheme(Language $language)
    {
        return view('morph::morphemes.create')->with('language', $language);
    }   

    /**
     * Show the rule creation form with this language's details preloaded
     *
     * @param \App\Language The language
     * @return \Illuminate\Http\Response
     */
    public function addRule(Language $language)
    {
        return view('rules.create')->with('language', $language);
    }

    public function order()
    {
        $groups = \App\Group::with(['languages' => function($query) {
            $query->orderBy('position');
        }])->orderBy('position')->get();
        // $languages = Language::all();

        return view('languages.order', compact('groups'));
    }

    public function storeOrder()
    {
        $groups = request()->all();
        $model;

        foreach($groups as $group) {
            if(isset($group['newPosition']) && $group['newPosition'] != $group['position']) {
                $model = \App\Group::find($group['id']);
                $model->position = $group['newPosition'];
                $model->save();
            }

            foreach($group['languages'] as $language) {
                if(isset($language['newPosition']) && $language['newPosition'] != $language['position']) {
                    $model = Language::find($language['id']);
                    $model->position = $language['newPosition'];
                    $model->save();
                }
            }
        }

        return 'success';
    }
}

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
        if(Auth::user() || !$language->isHidden()) {
            $language->load([
                'group',
                'parent',
                'children' => function($query) {
                    $query->select('Languages.*')
                          ->join('Groups', 'Groups.id', '=', 'group_id')
                          ->orderBy('Groups.position', 'asc')
                          ->orderBy('Languages.position', 'asc');
                },
                'morphemes' => function ($query) {
                    // Don't bother with the V placeholder morpheme
                    $query->where('name', '<>', 'V')
                          ->where('name', '<>', '*V')
                          ->orderBy('name');
                },
                'morphemes.glosses',
                'morphemes.slot',
                'forms',
                'emptyForms',
                'emptyForms.formType',
                'emptyForms.formType.subject',
                'emptyForms.formType.primaryObject',
                'emptyForms.formType.secondaryObject',
                'emptyForms.formType.mode',
                'emptyForms.formType.order',
                'emptyForms.formType.formClass',
                'examples',
                'examples.form'
            ]);

            $sources = $language->sources();
            $types = Type::with('variables')->get();

            if(count($types) > 0) {
                $types = $types->filter(function($value, $key) {
                            return count($value->variables) > 0;
                         });
            }

            return view('languages.show', compact('language', 'sources', 'types'));
        } else {
            return view('errors.404');
        }
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

    /**
     * Show the rule creation form with this language's details preloaded
     *
     * @param \App\Language The language
     * @return \Illuminate\Http\Response
     */
    public function addRule(Language $language)
    {
        return view('rules.create')->with('presetLanguage', $language);
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

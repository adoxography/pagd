<?php

namespace App\Http\Controllers;

use App\Language;
use Illuminate\Support\Facades\Log;
use App\Http\Requests\LanguageRequest;

class LanguageController extends Controller
{
    public function __construct()
    {
        $this->middleware('auth')->except('index', 'show');
        // $this->middleware('flattenRequest')->only('store', 'update');
    }

    public function index()
    {
        $languages = Language::orderBy('name')->get();
        return view('languages.index', compact('languages'));
    }

    public function addChild(Language $language)
    {
        $language->load('group');
        return view('languages.create')->with('presetParent',$language);
    }

    public function addExample(Language $language)
    {
        return view('examples.create')->with('presetLanguage',$language);
    }

    public function addForm(Language $language)
    {
        return view('forms.create')->with('presetLanguage',$language);
    }
    
    public function addMorpheme(Language $language)
    {
        return view('morphemes.create')->with('presetLanguage',$language);
    }

    public function create()
    {
        return view('languages.create');
    }

    public function destroy(Language $language)
    {
        $language->delete();
        flash($language->name.' deleted successfully.', 'is-info');
        return redirect('/languages');
    }

    public function edit(Language $language)
    {
        $language->load('parent', 'group');
        return view('languages.edit', compact('language'));
    }

    public function store(LanguageRequest $request)
    {
        $language = Language::create($request->all());

        flash($language->name.' added successfully.', 'is-success');

        return $language->id;
    }

    public function show(Language $language)
    {
        $language->load([
            'group',
            'parent',
            'children'
        ]);

        $language->load([
            'morphemes' => function( $query ) {
                $query->where('name','!=','V')
                      ->with('gloss')
                      ->with('slot')
                      ->orderBy('name');
            }
        ]);

        $morphemes = $language->morphemes;
        $sources = $language->sources();

        return view('languages.show', compact('language', 'sources', 'morphemes'));
    }

    public function update(LanguageRequest $request, Language $language)
    {
        // $request['group_id'] = $request->input('group.id');
        // $request['parent_id'] = $request->input('parent.id');
        
        if(!$request->parent_id) {
            $request->parent_id = null;
        }

        $language->update($request->all());

        flash($language->name.' updated successfully.', 'is-success');
        
        return $language->id;
    }
}

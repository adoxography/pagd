<?php

namespace App\Http\Controllers;

use App\Http\Requests\LanguageRequest;
use App\Language;

class LanguageController extends Controller
{
    public function __construct()
    {
        //$this->middleware('auth')->except('index', 'show');
    }

    public function index()
    {
        $languages = Language::all();
        return view('languages.index', compact('languages'));
    }

    public function addChild(Language $language)
    {
        $language->load('group');
        return view('languages.create')->with('presetParent',$language);
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
        if ($language) { 
            flash($language->name.' added successfully.', 'is-success');
            return redirect('/languages/' . $language->id);
        }//if
        else {
            flash($request->name.' could not be added.', 'is-error');
            return redirect('/languages');
        }//else
    }

    public function show(Language $language)
    {
        $language->load(['group', 'parent', 'children', 'morphemes' => function( $query ){
            $query->where('name','!=','V');
        }]);
        return view('languages.show', compact('language'));
    }

    public function update(LanguageRequest $request, Language $language)
    {
        // try{
            $language->update($request->all());
        flash($language->name.' updated successfully.', 'is-success');
        // }//try
        // catch(){
        //     flash($language->name.' could not be updated.', 'is-error');
        // }//else
        return redirect('/languages/' . $language->id);
    }
}

<?php

namespace App\Http\Controllers;

use App\Http\Requests\MorphemeRequest;
use Illuminate\Support\Facades\DB;
use App\Form;
use App\Language;
use App\Morpheme;
use Illuminate\Support\Facades\Redirect;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Response;

class MorphemeController extends Controller
{
    public function __construct()
    {
        $this->middleware('auth')->except('index', 'show');
    }

    public function create(){        
        $prefill = collect([
            'name' => request()->name,
            'language' => [
                'text' => request()->language,
                'id'   => request()->languageID
            ]
        ]);

        return view('morphemes.create', compact('prefill'));
    }

    public function destroy(Morpheme $morpheme){
        $morpheme->delete();

        flash($morpheme->name.' deleted successfully.', 'is-info');

        return Redirect::to('/languages/' . $morpheme->language_id);
    }

    public function edit(Morpheme $morpheme){
        $morpheme->load('language','gloss','slot','parent','parent.language', 'sources');

        return view('morphemes.edit', compact('morpheme'));
    }

    public function show(Morpheme $morpheme){
        $morpheme->load('language', 'gloss', 'forms', 'parent.language');
        $cognates = $morpheme->cognates();

        return view('morphemes.show', compact('morpheme', 'cognates'));
    }

    public function store(MorphemeRequest $request){
        $morpheme = Morpheme::create(array_filter($request->all(), 'validDatabaseInput'));
        $morpheme->connectSources($request->sources);

        flash($morpheme->name.' created successfully.', 'is-success');

        return $morpheme->id;
    }

    public function update(MorphemeRequest $request, Morpheme $morpheme){
        $morpheme->update($request->all());
        $morpheme->connectSources($request->sources);

        flash($morpheme->name.' updated successfully.', 'is-success');
        
        return $morpheme->id;
    }
}

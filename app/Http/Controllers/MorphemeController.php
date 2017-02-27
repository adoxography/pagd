<?php

namespace App\Http\Controllers;

use App\Http\Requests\MorphemeRequest;
use App\Morpheme;

/**
 * HTTP Controller for morphemes
 */
class MorphemeController extends Controller
{
    /**
     * Initialize middleware
     */
    public function __construct()
    {
        $this->middleware('auth')->except('index', 'show');
    }

    /**
     * Show the morpheme details.
     *
     * @param \App\Morpheme The morpheme
     * @return \Illuminate\Http\Response
     */
    public function show(Morpheme $morpheme)
    {
        $morpheme->load([
            'language',
            'gloss',
            'forms',
            'parent',
            'parent.language',
            'examples'
        ]);
        $cognates = $morpheme->cognates();

        return view('morphemes.show', compact('morpheme', 'cognates'));
    }

    /**
     * Show the morpheme creation form
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {

        // This may have been set by a request for a new morpheme by a form or example
        $prefill = collect([
            'name' => request()->name,
            'language' => [
                'text' => request()->language,
                'id'   => request()->languageID
            ]
        ]);

        return view('morphemes.create', compact('prefill'));
    }

    /**
     * Show the morpheme edit form
     *
     * @param \App\Morpheme The morpheme
     * @return \Illuminate\Http\Response
     */
    public function edit(Morpheme $morpheme)
    {
        $morpheme->load([
            'language',
            'gloss',
            'slot',
            'parent',
            'parent.language',
            'sources'
        ]);

        return view('morphemes.edit', compact('morpheme'));
    }

    /**
     * Save a new morpheme
     *
     * @param \App\Http\Requests\MorphemeRequest
     * @return \Illuminate\Http\Response
     */
    public function store(MorphemeRequest $request)
    {
        $morpheme = Morpheme::create($request->all());
        $morpheme->connectSources($request->sources);

        flash("{$morpheme->name} created successfully.", 'is-success');
        return $morpheme->id;
    }

    /**
     * Update a morpheme
     *
     * @param \App\Http\Requests\MorphemeRequest
     * @param \App\Morpheme The morpheme
     * @return \Illuminate\Http\Response
     */
    public function update(MorphemeRequest $request, Morpheme $morpheme)
    {
        $morpheme->update($request->all());
        $morpheme->connectSources($request->sources);

        flash("{$morpheme->name} updated successfully.", 'is-success');
        return $morpheme->id;
    }

    /**
     * Destroy a morpheme
     *
     * @param \App\Morpheme The morpheme
     * @return \Illuminate\Http\Response
     */
    public function destroy(Morpheme $morpheme)
    {
        $morpheme->delete();

        flash($morpheme->name.' deleted successfully.', 'is-info');
        return redirect("/languages/{$morpheme->language_id}");
    }
}

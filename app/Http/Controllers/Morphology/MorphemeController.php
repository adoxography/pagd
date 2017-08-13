<?php

namespace App\Http\Controllers\Morphology;

use App\Http\Controllers\AlgModelController;
use App\Http\Requests\MorphemeRequest;
use App\Models\Morphology\Morpheme;

/**
 * HTTP Controller for morphemes
 */
class MorphemeController extends AlgModelController
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
     * @param Morpheme $morpheme
     * @return \Illuminate\Http\Response
     * @internal param The $Morpheme morpheme
     */
    public function show(Morpheme $morpheme)
    {
        return redirect("/morphemes/{$morpheme->id}/basic");
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
     * @param Morpheme $morpheme
     * @return \Illuminate\Http\Response
     * @internal param \App\Morpheme $The morpheme
     */
    public function edit(Morpheme $morpheme)
    {
        $morpheme->load([
            'language',
            'glosses',
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
        $data = $request->all();
        $data['gloss'] = $this->convertGloss();

        $morpheme = Morpheme::create($data);

        flash("{$morpheme->name} created successfully.", 'is-success');
        return redirect("/morphemes/{$morpheme->id}");
    }

    /**
     * Update a morpheme
     *
     * @param MorphemeRequest $request
     * @param Morpheme $morpheme
     * @return \Illuminate\Http\Response
     * @internal param The $Morpheme morpheme
     */
    public function update(MorphemeRequest $request, Morpheme $morpheme)
    {
        $data = $request->all();
        $data['gloss'] = $this->convertGloss();

        $morpheme->update($data);

        flash("{$morpheme->name} updated successfully.", 'is-success');
        return redirect("/morphemes/{$morpheme->id}");
    }

    /**
     * Destroy a morpheme
     *
     * @param Morpheme $morpheme
     * @return \Illuminate\Http\Response
     * @internal param \App\Morpheme $The morpheme
     */
    public function destroy(Morpheme $morpheme)
    {
        $morpheme->delete();

        flash($morpheme->name.' deleted successfully.', 'is-info');
        return redirect("/languages/{$morpheme->language_id}");
    }

    protected function convertGloss()
    {
        $output = '';
        $firstTime = true;

        foreach (request()->gloss as $gloss) {
            if ($firstTime) {
                $firstTime = false;
            } else {
                $output .= '.';
            }

            $output .= $gloss['name'];
        }

        return $output;
    }
}

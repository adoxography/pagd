<?php

namespace Algling\Phonology\Http\Controllers;

use Algling\Phonology\Http\Requests\PhonemeRequest;
use Algling\Phonology\Models\Phoneme;
use App\Http\Controllers\AlgModelController;

class PhonemeController extends AlgModelController
{
    public function __construct()
    {
        $this->middleware('auth')->except('show');
        $this->middleware('checkbox:isMarginal,isRounded,isNasal,isPalatalized,isGlottalized')->only(['store', 'update']);
    }

    public function show(Phoneme $phoneme)
    {
        if ($phoneme->type == 'Cluster') {
            return redirect("/clusters/{$phoneme->id}/basic");
        } else {
            return redirect("/phonemes/{$phoneme->id}/basic");
        }
    }

    public function create()
    {
        return view('phon::phonemes.create');
    }

    public function edit(Phoneme $phoneme)
    {
        return view('phon::phonemes.edit', compact('phoneme'));
    }

    public function store(PhonemeRequest $request)
    {
        $phoneme = Phoneme::create($request->all());

        $phoneme->syncExamples($request->examples);

        flash("{$phoneme->name} added successfully.", 'is-success');

        if ($phoneme->type == 'Cluster') {
            return redirect("/clusters/{$phoneme->id}/basic");
        } else {
            return redirect("/phonemes/{$phoneme->id}/basic");
        }
    }

    public function update(PhonemeRequest $request, Phoneme $phoneme)
    {
        $phoneme->update($request->all());

        $phoneme->syncExamples($request->examples);

        flash("{$phoneme->name} updated successfully.", 'is-success');

        if ($phoneme->type == 'Cluster') {
            return redirect("/clusters/{$phoneme->id}/basic");
        } else {
            return redirect("/phonemes/{$phoneme->id}/basic");
        }
    }

    public function destroy(Phoneme $phoneme)
    {
        $phoneme->delete();

        flash("{$phoneme->name} deleted successfully");

        if ($phoneme->type == 'Cluster') {
            return redirect("/languages/{$phoneme->language_id}/clusters");
        } else {
            return redirect("/languages/{$phoneme->language_id}/phonemes");
        }
    }

    public function addParent(Phoneme $phoneme)
    {
        $parent = $phoneme->load([
            'language',
            'language.allChildren'
        ]);

        return view('phon::reflexes.create', compact('parent'));
    }

    public function addChild(Phoneme $phoneme)
    {
        $child = $phoneme->load('language');

        return view('phon::reflexes.create', compact('child'));
    }
}

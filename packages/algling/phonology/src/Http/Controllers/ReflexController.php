<?php

namespace Algling\Phonology\Http\Controllers;

use Algling\Phonology\Http\Requests\ReflexRequest;
use Algling\Phonology\Models\Reflex;
use App\Http\Controllers\AlgModelController;
use App\Language;

class ReflexController extends AlgModelController
{
    public function show(Reflex $reflex)
    {
        $reflex->load([
            'parent',
            'parent.language',
            'reflex',
            'reflex.language'
        ]);

        return view('phon::reflexes.show', compact('reflex'));
    }

    public function create()
    {
        return view('phon::reflexes.create');
    }

    public function clone(Reflex $reflex)
    {
        $reflex->load([
            'parent',
            'parent.language',
            'reflex',
            'reflex.language'
        ]);

        return view('phon::reflexes.create', compact('reflex'));
    }

    public function edit(Reflex $reflex)
    {
        $reflex->load([
            'parent',
            'parent.language',
            'reflex',
            'reflex.language'
        ]);

        return view('phon::reflexes.edit', compact('reflex'));
    }

    public function store(ReflexRequest $request)
    {
        if (!$request->reflex) {
            $child = Language::find($request->language_id)->getNullPhoneme()->id;
            $request['reflex_id'] = $child;
        }

        $reflex = Reflex::create($request->all());

        flash("{$reflex->name} created successfully", 'is-success');

        return redirect("reflexes/{$reflex->id}");
    }

    public function update(ReflexRequest $request, Reflex $reflex)
    {
        $reflex->update($request->all());

        flash("{$reflex->name} updated successfully", 'is-success');

        return redirect("reflexes/{$reflex->id}");
    }

    public function destroy(Reflex $reflex)
    {
        $reflex->delete();

        flash("{$reflex->name} deleted successfully");

        return redirect("/phonemes/{$reflex->parent_id}/reflexes");
    }
}

<?php

namespace App\Http\Controllers\Verbs;

use App\Models\Verbs\Gap;
use App\Http\Requests\Verbs\FormRequest;
use App\Http\Controllers\AlgModelController;

class GapController extends AlgModelController
{
    public function show(Gap $gap)
    {
        $gap->load([
            'language',
            'structure',
            'structure.mode',
            'structure.verbClass',
            'structure.order',
            'structure.subject',
            'structure.primaryObject',
            'structure.secondaryObject'
        ]);

        return view('verbs.gaps.show', compact('gap'));
    }

    public function clone(Gap $gap)
    {
        $form = $gap->load([
            'language',
            'structure',
            'structure.mode',
            'structure.verbClass',
            'structure.order',
            'structure.subject',
            'structure.primaryObject',
            'structure.secondaryObject'
        ]);

        return view('verbs.gaps.create', compact('form'));
    }

    public function edit(Gap $gap)
    {
    	$form = $gap->load([
    		'language',
    		'structure',
    		'structure.mode',
    		'structure.verbClass',
    		'structure.order',
    		'structure.subject',
    		'structure.primaryObject',
    		'structure.secondaryObject'
    	]);

    	return view('verbs.gaps.edit', compact('form'));
    }

    /**
     * Update a gap
     *
     * @param \App\Http\Requests\Verbs\FormRequest
     * @param Gap $gap
     * @return \Illuminate\Http\Response
     */
    public function update(FormRequest $request, Gap $gap)
    {
        $gap->update($request->all());

        flash("{$gap->structure->summary} updated successfully", 'is-success');
        return redirect("/verbs/gaps/{$gap->id}");
    }

    public function destroy(Gap $gap)
    {
    	$gap->delete();

    	flash("{$gap->structure->summary} deleted successfully");
    	return redirect("/languages/{$gap->language->iso}");
    }
}

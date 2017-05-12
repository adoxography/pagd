<?php

namespace Algling\Verbals\Http\Controllers;

use Illuminate\Http\Request;
use Algling\Verbals\Models\Gap;
use Algling\Verbals\Http\Requests\FormRequest;
use App\Http\Controllers\AlgModelController;

class GapController extends AlgModelController
{
    public function show(Gap $gap)
    {
        if($this->shouldShow($gap)) {
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

            return view('verb::gaps.show', compact('gap'));
        } else {
            return view('errors.404');
        }
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

    	return view('verb::gaps.edit', compact('form'));
    }

    /**
     * Update a gap
     *
     * @param Algling\Words\Http\Requests\FormRequest
     * @param Algling\Words\Models\Gap The gap
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

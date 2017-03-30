<?php

namespace App\Http\Controllers;

use App\Example;
use App\Http\Requests\ExampleRequest;
use App\Http\Controllers\AlgModelController;

/**
 * HTTP Controller for examples
 */
class ExampleController extends AlgModelController
{
    /**
     * Initialize middleware
     */
    public function __construct()
    {
        $this->middleware('auth')->except('index', 'show');
    }

    /**
     * Show the example details.
     *
     * @param \App\Example The example
     * @return \Illuminate\Http\Response
     */
    public function show(Example $example)
    {
        if($this->shouldShow($example)){
            $example->load(['form', 'form.language', 'form.sources', 'morphemes', 'morphemes.gloss', 'morphemes.slot']);

            return view('examples.show', compact('example'));
        } else {
            return view('errors.404');
        }
    }

    /**
     * Show the example creation form
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        return view('examples.create');
    }

    /**
     * Show the example edit form
     *
     * @param \App\Example The example
     * @return \Illuminate\Http\Response
     */
    public function edit(Example $example)
    {
        $example->load(['form', 'form.language', 'sources']);

        return view('examples.edit', compact('example'));
    }

    /**
     * Save a new example
     *
     * @param \App\Http\Requests\ExampleRequest
     * @return \Illuminate\Http\Response
     */
    public function store(ExampleRequest $request)
    {
        $example = Example::create($request->all());

        flash("{$example->name} created successfully", 'is-success');
        return $example->id;
    }
    
    /**
     * Update an example
     *
     * @param \App\Http\Requests\ExampleRequest
     * @param \App\Example The example
     * @return \Illuminate\Http\Response
     */
    public function update(ExampleRequest $request, Example $example)
    {
        $example->update($request->all());

        flash("{$example->name} updated successfully", 'is-success');
        return $example->id;
    }

    /**
     * Destroy an example
     *
     * @param \App\Example The example
     * @return \Illuminate\Http\Response
     */
    public function destroy(Example $example)
    {
        $example->delete();

        flash("{$example->name} deleted successfully.", 'is-info');
        return redirect("/forms/{$example->form_id}");
    }

    /**
     * Disambiguate a morpheme of an example
     *
     * @param \App\Example The example
     * @return \Illuminate\Http\Response
     */
    public function disambiguate(Example $example)
    {
        $example->disambiguate(request()->index, request()->disambiguator);
        
        return redirect("/examples/{$example->id}");
    }
}

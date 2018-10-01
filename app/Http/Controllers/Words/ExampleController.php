<?php

namespace App\Http\Controllers\Words;

use Algling\Http\Requests\Words\ExampleRequest;
use App\Models\Words\Example;
use App\Traits\ConvertsMorphemes;
use App\Http\Controllers\AlgModelController;

/**
 * HTTP Controller for examples
 */
class ExampleController extends AlgModelController
{
    use ConvertsMorphemes;

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
     * @param Example $example the example
     * @return \Illuminate\Http\Response
     */
    public function show(Example $example)
    {
        return redirect("/examples/{$example->id}/basic");
    }

    /**
     * Show the example creation form
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        return view('words.examples.create');
    }

    /**
     * Show the example clone form
     *
     * @param Example $example
     * @return \Illuminate\Http\Response
     */
    public function clone(Example $example)
    {
        $example->load(['form', 'form.language', 'sources']);

        return view('words.examples.create', compact('example'));
    }

    /**
     * Show the example edit form
     *
     * @param Example $example
     * @return \Illuminate\Http\Response
     */
    public function edit(Example $example)
    {
        $example->load(['form', 'form.language', 'sources']);

        return view('words.examples.edit', compact('example'));
    }

    /**
     * Save a new example
     *
     * @param ExampleRequest
     * @return \Illuminate\Http\Response
     */
    public function store(ExampleRequest $request)
    {
        $data = $request->all();
        $data['morphemicForm'] = $this->convertMorphemes();
        $example = Example::create($data);

        flash("{$example->name} created successfully", 'is-success');
        return redirect("examples/{$example->id}");
    }

    /**
     * Update an example
     *
     * @param ExampleRequest
     * @param Example $example
     * @return \Illuminate\Http\Response
     */
    public function update(ExampleRequest $request, Example $example)
    {
        $data = $request->all();
        $data['morphemicForm'] = $this->convertMorphemes();
        $example->update($data);

        flash("{$example->name} updated successfully", 'is-success');
        return redirect("examples/{$example->id}");
    }

    /**
     * Destroy an example
     *
     * @param Example $example
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
     * @param Example $example
     * @return \Illuminate\Http\Response
     */
    public function disambiguate(Example $example)
    {
        $example->disambiguate(request()->index, request()->id);

        return redirect("/examples/{$example->id}");
    }
}

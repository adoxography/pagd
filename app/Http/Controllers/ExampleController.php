<?php

namespace App\Http\Controllers;

use App\Example;
use App\Http\Requests;
use App\Http\Requests\ExampleRequest;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Redirect;

class ExampleController extends Controller
{
    public function __construct()
    {
        $this->middleware('auth')->except('index', 'show');
        $this->middleware('addSources:App\Example')->only('store', 'update');
    }

    public function show(Example $example)
    {
        $example->load(['form', 'form.language', 'form.sources', 'morphemes', 'morphemes.gloss', 'morphemes.slot']);

        return view('examples.show', compact('example'));
    }

    public function create(){
    	return view('examples.create');
    }

    public function destroy(Example $example)
    {
        $example->delete();

        flash($example->name.' deleted successfully.', 'is-info');
        
        return redirect("/forms/{$example->form_id}");
    }

    public function edit(Example $example){
        $example->load(['form', 'form.language', 'sources']);

    	return view('examples.edit', compact('example'));
    }

    public function store(ExampleRequest $request){
    	$example = Example::create($request->all());

        flash($example->name.' created successfully', 'is-success');

    	return $example->id;
    }
    
    public function update(ExampleRequest $request, Example $example)
    {
        $example->update($request->all());

        flash($example->name.' updated successfully', 'is-success');

        return $example->id;
    }

    public function disambiguate(Example $example)
    {
        $example->disambiguate(request()->index, request()->disambiguator);
        
        return redirect("/examples/{$example->id}");
    }
}

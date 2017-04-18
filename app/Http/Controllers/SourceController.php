<?php

namespace App\Http\Controllers;

use App\Source;
use Illuminate\Http\Request;
use App\Http\Requests\SourceRequest;
use App\Http\Controllers\AlgModelController;

class SourceController extends Controller
{
    /**
     * Initialize middleware
     */
    public function __construct()
    {
        $this->middleware('auth')->except('index', 'show');
    }
    
    public function index(){
    	$lookup = Source::all();
        $sources = [];

        $alphas = range('A', 'Z');
        foreach($alphas as $char) {
            $sources[] = [];
        }

        foreach($lookup as $source) {
            $source->name = $source->display;
            $sources[array_search(strtoupper($source->author{0}), $alphas)][] = $source;
        }
    	return view('sources.index', compact('sources'));
    }

    public function create(){
        return view('sources.create');
    }

    public function edit(Source $source)
    {
        return view('sources.edit', compact('source'));
    }

    public function show(Source $source)
    {
        return view('sources.show', compact('source'));
    }

    public function store(SourceRequest $request){
    	$newSource = Source::create($request->all());
    	return response()->json($newSource);
    }

    public function update(SourceRequest $request, Source $source)
    {
        $source->update($request->all());

        flash($source->display.' updated successfully.', 'is-success');
        return response()->json($source);
    }

    public function destroy(Source $source)
    {
        $source->delete();

        flash("{$source->display} deleted successfully.", 'is-info');
        return redirect('/sources');
    }
}

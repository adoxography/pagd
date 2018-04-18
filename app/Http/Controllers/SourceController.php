<?php

namespace App\Http\Controllers;

use App\Source;
use App\Http\Requests\SourceRequest;

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
        for ($i = 0; $i < count($alphas); $i++) {
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

    public function clone(Source $source)
    {
        return view('sources.create', compact('source'));
    }

    public function edit(Source $source)
    {
        return view('sources.edit', compact('source'));
    }

    public function show(Source $source)
    {
        return redirect("/sources/{$source->id}/basic");
    }

    public function store(SourceRequest $request){
    	$source = Source::create($request->all());

        if($request->ajax()) {
            return response()->json($source);
        } else {
            flash("{$source->display} created successfully.", 'is-success');
            return redirect("/sources/{$source->id}");
        }
    }

    public function update(SourceRequest $request, Source $source)
    {
        $source->update($request->all());

        flash("{$source->display} updated successfully.", 'is-success');
        return redirect("/sources/{$source->id}");
    }

    public function destroy(Source $source)
    {
        $source->delete();

        flash("{$source->display} deleted successfully.", 'is-info');
        return redirect('/sources');
    }
}

<?php

namespace App\Http\Controllers;

use App\Source;
use Illuminate\Http\Request;
use App\Http\Requests\SourceRequest;

class SourceController extends Controller
{
    public function index(){
    	$sources = Source::select("id","short as name")->orderBy('short')->get();
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

    public function store(Request $request){
    	$newSource = Source::create($request->all());
    	return response()->json($newSource);
    }

    public function update(SourceRequest $request, Source $source)
    {
        $source->update($request->all());

        flash($source->name.' updated successfully.', 'is-success');
        return response()->json($source);
    }
}

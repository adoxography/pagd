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
    	$sources = Source::orderBy('short')->get();
        foreach($sources as $source) {
            $source->name = $source->display;
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

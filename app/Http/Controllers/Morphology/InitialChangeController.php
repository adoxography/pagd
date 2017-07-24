<?php

namespace App\Http\Controllers\Morphology;

use App\Http\Requests\InitialChangeRequest;
use App\Language;
use App\Http\Controllers\Controller;
use App\Models\Morphology\InitialChange;

class InitialChangeController extends Controller
{
    public function index()
    {
    	$languages = Language::all();
    	$changes = InitialChange::select('Morph_InitialChanges.*')
            ->join('Morph_Morphemes as Morphemes', 'Morphemes.id', '=', 'morpheme_id')
    		->join('Languages', 'Languages.id', '=', 'Morphemes.language_id')
    		->join('Groups', 'Groups.id', '=', 'Languages.group_id')
    		->orderBy('Groups.position')
    		->orderBy('Languages.position')
    		->orderBy('Morph_InitialChanges.disambiguator')
            ->whereNull('Languages.hidden_at')
    		->with(['morpheme' => function($query) {
    			$query->whereNull('hidden_at')->with('language');
    		}])->get('Morph_InitialChanges.*');

    	return view('morph::changes.index', compact('languages', 'changes'));
    }

    public function store(InitialChangeRequest $request)
    {
    	$change = InitialChange::create($request->all());
    	$change->load(['morpheme', 'morpheme.language']);

    	return $change->toJson();
    }

    public function destroy(InitialChange $change)
    {
    	$change->delete();

    	return 'deleted';
    }
}

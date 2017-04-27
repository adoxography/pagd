<?php

namespace Algling\Morphemes\Http\Controllers;

use App\Language;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Algling\Morphemes\Models\InitialChange;
use Algling\Morphemes\Http\Requests\InitialChangeRequest;

class InitialChangeController extends Controller
{
    public function index()
    {
    	$languages = Language::all();
    	$changes = InitialChange::select(['InitialChanges.*', 'Morphemes.*', 'Languages.*'])
    							->join('Morphemes', 'Morphemes.id', '=', 'morpheme_id')
    							->join('Languages', 'Languages.id', '=', 'Morphemes.language_id')
    							->join('Groups', 'Groups.id', '=', 'Languages.group_id')
    							->orderBy('Groups.position')
    							->orderBy('Languages.position')
    							->orderBy('InitialChanges.disambiguator')
                                ->whereNull('Languages.hidden_at')
    							->with(['morpheme' => function($query) {
    								$query->whereNull('hidden_at')->with('language');
    							}])->get();
    	return view('initial-changes.index', compact('languages', 'changes'));
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

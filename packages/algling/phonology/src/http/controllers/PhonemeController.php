<?php

namespace Algling\Phonology\Http\Controllers;

use App\Http\Controllers\Controller;
use Algling\Phonology\Models\Phoneme;
use Algling\Phonology\Http\Requests\PhonemeRequest;

class PhonemeController extends Controller
{
	public function __construct()
	{
		$this->middleware('checkbox:isMarginal,isRounded,isNasal,isPalatalized,isGlottalized')->only(['store', 'update']);
	}

	public function show(Phoneme $phoneme)
	{
        if($phoneme->type == 'Cluster') {
            return redirect("/clusters/{$phoneme->id}/basic");
        } else {
            return redirect("/phonemes/{$phoneme->id}/basic");
        }
	}

    public function create()
    {
    	return view('phon::phonemes.create');
    }

    public function edit(Phoneme $phoneme)
    {
    	return view('phon::phonemes.edit', compact('phoneme'));
    }

    public function store(PhonemeRequest $request)
    {
    	$phoneme = Phoneme::create($request->all());

    	flash("{$phoneme->name} added successfully.", 'is-success');

        if($phoneme->type == 'Cluster') {
            return redirect("/clusters/{$phoneme->id}/basic");
        } else {
            return redirect("/phonemes/{$phoneme->id}/basic");
        }
    }

    public function update(PhonemeRequest $request, Phoneme $phoneme)
    {
    	$phoneme->update($request->all());

    	flash("{$phoneme->name} updated successfully.", 'is-success');

        if($phoneme->type == 'Cluster') {
            return redirect("/clusters/{$phoneme->id}/basic");
        } else {
            return redirect("/phonemes/{$phoneme->id}/basic");
        }
    }

    public function destroy(Phoneme $phoneme)
    {
        $phoneme->delete();

        flash("{$phoneme->name} deleted successfully");

        if($phoneme->type == 'Cluster') {
            return redirect("/languages/{$phoneme->language_id}/clusters");
        } else {
            return redirect("/languages/{$phoneme->language_id}/phonemes");
        }
    }

    public function addParent(Phoneme $phoneme)
    {
        $parent = $phoneme->load([
            'language',
            'language.allChildren'
        ]);

        return view('phon::reflexes.create', compact('parent'));
    }

    public function addChild(Phoneme $phoneme)
    {
        $child = $phoneme->load('language');

        return view('phon::reflexes.create', compact('child'));
    }
}

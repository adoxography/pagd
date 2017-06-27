<?php

namespace Algling\Phonology\Http\Controllers;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Algling\Phonology\Models\Phoneme;
use Algling\Phonology\Http\Requests\PhonemeRequest;

class PhonemeController extends Controller
{
	public function __construct()
	{
		$this->middleware('checkbox:isMarginal,isRounded,isNasal,isPalatalized,isGlottalized')->only(['store', 'edit']);
	}

	public function show(Phoneme $phoneme)
	{
		return redirect("/phonemes/{$phoneme->id}/basic");
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

    	return redirect("/phonemes/{$phoneme->id}/basic");
    }

    public function update(PhonemeRequest $request, Phoneme $phoneme)
    {
    	$phoneme->update($request->all());

    	flash("{$phoneme->name} updated successfully.", 'is-success');

    	return redirect("/phonemes/{$phoneme->id}/basic");
    }
}

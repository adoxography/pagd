<?php

namespace App\Http\Controllers\Nominals;

use App\Http\Controllers\Controller;
use App\Models\Nominals\Paradigm;
use App\Http\Requests\Nominals\ParadigmRequest;

class ParadigmController extends Controller
{
	public function __construct()
	{
		$this->middleware('auth')->except('show');
	}

    public function show(Paradigm $paradigm)
    {
    	$paradigm->load(['language', 'type', 'sources']);

    	return view('nominals.paradigms.show', compact('paradigm'));
    }

    public function create()
    {
    	return view('nominals.paradigms.create');
    }

    public function edit(Paradigm $paradigm)
    {
    	return view('nominals.paradigms.edit', compact('paradigm'));
    }

    public function store(ParadigmRequest $request)
    {
    	$paradigm = Paradigm::create($request->all());

    	return redirect("/nominals/paradigms/{$paradigm->id}");
    }

    public function update(ParadigmRequest $request, Paradigm $paradigm)
    {
    	$paradigm->update($request->all());

    	return redirect("/nominals/paradigms/{$paradigm->id}");
    }

    public function delete(Paradigm $paradigm)
    {
    	$paradigm->destroy();

    	return redirect("/languages/{$paradigm->language_id}");
    }
}

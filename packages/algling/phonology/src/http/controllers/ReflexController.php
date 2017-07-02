<?php

namespace Algling\Phonology\Http\Controllers;

use Algling\Phonology\Http\Requests\ReflexRequest;
use Algling\Phonology\Models\Reflex;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class ReflexController extends Controller
{
	public function show(Reflex $reflex)
	{
		$reflex->load([
			'parent',
			'parent.language',
			'reflex',
			'reflex.language'
		]);

		return view('phon::reflexes.show', compact('reflex'));
	}

    public function create()
    {
    	return view('phon::reflexes.create');
    }

    public function edit(Reflex $reflex)
    {
    	$reflex->load([
    		'parent',
    		'parent.language',
    		'reflex',
    		'reflex.language'
    	]);

    	return view('phon::reflexes.edit', compact('reflex'));
    }

    public function store(ReflexRequest $request)
    {
    	$reflex = Reflex::create($request->all());

    	flash("{$reflex->name} created successfully", 'is-success');

    	return redirect("reflexes/{$reflex->id}");
    }

    public function update(ReflexRequest $request, Reflex $reflex)
    {
    	$reflex->update($request->all());

    	flash("{$reflex->name} updated successfully", 'is-success');

    	return redirect("reflexes/{$reflex->id}");
    }
}

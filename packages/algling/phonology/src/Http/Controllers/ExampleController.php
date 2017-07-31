<?php

namespace Algling\Phonology\Http\Controllers;

use Algling\Phonology\Models\Example;
use App\Http\Controllers\Controller;

class ExampleController extends Controller
{
	public function show(Example $example)
	{
		$example->load('language', 'phonemes', 'sources');

		return view('phon::examples.show', compact('example'));
	}

    public function create()
    {
    	return view('phon::examples.create');
    }

    public function store()
    {
        // dd(request()->all());
    	$example = Example::create(request()->all());

    	return redirect("/phonemes/examples/{$example->id}");
    }
}

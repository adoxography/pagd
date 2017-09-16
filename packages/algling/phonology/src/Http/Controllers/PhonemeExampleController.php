<?php

namespace Algling\Phonology\Http\Controllers;

use Algling\Phonology\Models\Phoneme;
use Algling\Words\Http\Requests\ExampleRequest;
use Algling\Words\Models\Example;
use Algling\Words\Traits\ConvertsMorphemes;
use App\Http\Controllers\Controller;

class PhonemeExampleController extends Controller
{
    use ConvertsMorphemes;

    public function create(Phoneme $phoneme)
    {
        return view('phon::examples.create', compact('phoneme'));
    }

    public function store(ExampleRequest $request, Phoneme $phoneme)
    {
        $data = $request->all();
        $data['morphemicForm'] = $this->convertMorphemes();
        $example = Example::create($data);

        $phoneme->examples()->attach($example);

        flash("{$example->name} successfully added to {$phoneme->name}", 'is-success');
        return redirect("phonemes/{$phoneme->id}/examples");
    }
}

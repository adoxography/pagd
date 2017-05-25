<?php

namespace Algling\Nominals\Http\Controllers;

use Illuminate\Http\Request;
use Algling\Nominals\Models\Form;
use App\Http\Controllers\Controller;
use Algling\Nominals\Http\Requests\FormRequest;

class FormController extends Controller
{
    public function show(Form $nominalForm)
    {
        return redirect("/nominals/forms/{$nominalForm->id}/basic");
    }

    public function create()
    {
    	return view('nom::forms.create');
    }

    public function edit(Form $nominalForm)
    {
        $form = $nominalForm->load([
            'language',
            'structure.paradigm',
            'structure.nominalFeature',
            'structure.pronominalFeature',
            'sources',
            'parent'
        ]);

    	return view('nom::forms.edit', compact('form'));
    }

    public function store(FormRequest $request)
    {
    	$nominalForm = Form::create($request->all());

        return redirect("/nominals/forms/{$nominalForm->id}");
    }

    public function update(FormRequest $request, Form $nominalForm)
    {
    	$nominalForm->update($request->all());

        return redirect("/nominals/forms/{$nominalForm->id}");
    }

    public function destroy(Form $nominalForm)
    {
    	
    }
}

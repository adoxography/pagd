<?php

namespace Algling\Nominals\Http\Controllers;

use Algling\Nominals\Http\Requests\FormRequest;
use Algling\Nominals\Models\Form;
use App\Traits\ConvertsMorphemes;
use App\Http\Controllers\Controller;

class FormController extends Controller
{
    use ConvertsMorphemes;

    /**
     * Initialize middleware
     */
    public function __construct()
    {
        $this->middleware('auth')->except('show');
    }

    public function show(Form $nominalForm)
    {
        return redirect("/nominals/forms/{$nominalForm->id}/basic");
    }

    public function create()
    {
        return view('nom::forms.create');
    }

    public function clone(Form $nominalForm)
    {
        $form = $nominalForm->load([
            'language',
            'structure.paradigm',
            'structure.nominalFeature',
            'structure.pronominalFeature',
            'sources',
            'parent',
            'examples'
        ]);

        return view('nom::forms.create', compact('form'));
    }

    public function edit(Form $nominalForm)
    {
        $form = $nominalForm->load([
            'language',
            'structure.paradigm',
            'structure.nominalFeature',
            'structure.pronominalFeature',
            'sources',
            'parent',
            'examples'
        ]);

        return view('nom::forms.edit', compact('form'));
    }

    public function store(FormRequest $request)
    {
        $data = $request->all();
        $data['morphemicForm'] = $this->convertMorphemes();
        $nominalForm = Form::create($data);

        return redirect("/nominals/forms/{$nominalForm->id}");
    }

    public function update(FormRequest $request, Form $nominalForm)
    {
        $data = $request->all();
        $data['morphemicForm'] = $this->convertMorphemes();

        $nominalForm->update($data);

        if ($request->translation) {
            if ($nominalForm->examples->count() == 0) {
                $nominalForm->generateExample($request->translation);
            } else {
                $nominalForm->examples->first()->update(['translation' => $request->translation]);
            }
        }

        return redirect("/nominals/forms/{$nominalForm->id}");
    }

    public function destroy(Form $nominalForm)
    {
    }
}

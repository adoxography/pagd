<?php

namespace Algling\Nominals\Http\Controllers;

use Algling\Nominals\Models\Form;
use App\Http\Controllers\Controller;
use Algling\Nominals\Http\Requests\FormRequest;

class FormController extends Controller
{
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

    protected function convertMorphemes()
    {
        $morphemes = request()->morphemes;
        $morphemicForm = '';
        $firstTime = true;

        foreach ($morphemes as $morpheme) {
            if ($firstTime) {
                $firstTime = false;
            } else {
                $morphemicForm .= '-';
            }

            if ($morpheme['ic'] != null && $morpheme['ic'] >= 0) {
                $morphemicForm .= "IC";
                if ($morpheme['ic'] > 0) {
                    $morphemicForm .= '.' . $morpheme['ic'];
                }
                $morphemicForm .= "|";
            }

            $morphemicForm .= str_replace(['*', '-'], '', $morpheme['name']);

            if ($morpheme['disambiguator']) {
                $morphemicForm .= '.' . $morpheme['disambiguator'];
            }
        }

        return $morphemicForm;
    }
}

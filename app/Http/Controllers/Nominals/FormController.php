<?php

namespace App\Http\Controllers\Nominals;

use App\Http\Requests\Nominals\FormRequest;
use App\Models\Nominals\Form;
use App\Traits\ConvertsMorphemes;
use App\Traits\HandlesAsyncFormRequests;
use App\Http\Controllers\Controller;

class FormController extends Controller
{
    use ConvertsMorphemes, HandlesAsyncFormRequests;

    protected $asyncData = ['nominalFeature', 'pronominalFeature', 'paradigm'];

    /**
     * Initialize middleware
     */
    public function __construct()
    {
        $this->middleware('auth')->except('show', 'async');
    }

    public function show(Form $nominalForm)
    {
        return redirect("/nominals/forms/{$nominalForm->id}/basic");
    }

    protected function asyncQuery()
    {
        return Form::select()
                     ->with([
                         'structure',
                         'structure.nominalFeature',
                         'structure.pronominalFeature'
                     ]);
    }

    public function create()
    {
        return view('nominals.forms.create');
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

        return view('nominals.forms.create', compact('form'));
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

        return view('nominals.forms.edit', compact('form'));
    }

    public function store(FormRequest $request)
    {
        $data = $request->all();
        $data['morphemic_form'] = $this->convertMorphemes();
        $nominalForm = Form::create($data);

        return redirect("/nominals/forms/{$nominalForm->id}");
    }

    public function update(FormRequest $request, Form $nominalForm)
    {
        $data = $request->all();
        $data['morphemic_form'] = $this->convertMorphemes();

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

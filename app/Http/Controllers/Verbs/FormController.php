<?php

namespace App\Http\Controllers\Verbs;

use App\Http\Requests\Verbs\FormRequest;
use App\Models\Verbs\Form;
use App\Models\Verbs\Gap;
use App\Traits\HandlesAsyncFormRequests;
use App\Http\Controllers\AlgModelController;

/**
 * HTTP Controller for forms
 */
class FormController extends AlgModelController
{
    use HandlesAsyncFormRequests;

    protected $asyncData = ['class', 'mode', 'order', 'subject', 'primaryObject', 'secondaryObject'];

    /**
     * Initialize middleware
     */
    public function __construct()
    {
        $this->middleware('auth')->except('show', 'async');
    }

    public function show(Form $verbForm)
    {
        return redirect("/verbs/forms/{$verbForm->id}/basic");
    }

    protected function asyncQuery()
    {
        return Form::select()
                    ->with([
                        'structure',
                        'structure.mode',
                        'structure.verbClass',
                        'structure.order',
                        'structure.subject',
                        'structure.primaryObject',
                        'structure.secondaryObject'
                    ]);
    }

    public function create()
    {
        return view('verbs.forms.create');
    }

    public function clone(Form $verbForm)
    {
        $form = $verbForm->load([
            'language',
            'parent',
            'parent.language',
            'morphemes',
            'structure',
            'structure.subject',
            'structure.primaryObject',
            'structure.secondaryObject',
            'structure.mode',
            'structure.verbClass',
            'structure.order',
            'sources'
        ]);

        return view('verbs.forms.create', compact('form'));
    }

    public function edit(Form $verbForm)
    {
        $form = $verbForm->load([
            'language',
            'parent',
            'parent.language',
            'morphemes',
            'morphemes.initialChanges',
            'structure',
            'structure.subject',
            'structure.primaryObject',
            'structure.secondaryObject',
            'structure.mode',
            'structure.verbClass',
            'structure.order',
            'sources'
        ]);

        return view('verbs.forms.edit', compact('form'));
    }

    /**
     * Save a new form
     *
     * @param \App\Http\Requests\LangFormRequest
     * @return \Illuminate\Http\Response
     */
    public function store(FormRequest $request)
    {
        if ($request->empty == 'true') {
            $form = Gap::create($request->all());
            flash("{$form->structure->summary} created successfully.", 'is-success');
            return redirect("/verbs/gaps/{$form->id}");
        } else {
            $data = $request->all();
            $form = Form::create($data);
            flash("{$form->name} created successfully.", 'is-success');
            return redirect("/verbs/forms/{$form->id}");
        }
    }

    /**
     * Update a form
     *
     * @param \App\Http\Requests\LangFormRequest
     * @param Form $form
     * @return \Illuminate\Http\Response
     */
    public function update(FormRequest $request, Form $form)
    {
        $data = $request->all();
        $form->update($data);

        flash("{$form->surfaceForm} updated successfully", 'is-success');
        return redirect("/verbs/forms/{$form->id}");
    }
}

<?php

namespace Algling\Verbals\Http\Controllers;

use Algling\Verbals\Models\Gap;
use Algling\Verbals\Models\Form;
use Algling\Verbals\Http\Requests\FormRequest;
use App\Http\Controllers\AlgModelController;

/**
 * HTTP Controller for forms
 */
class FormController extends AlgModelController
{
    /**
     * Initialize middleware
     */
    public function __construct()
    {
        $this->middleware('auth')->except('show');
    }

	public function show(Form $verbForm)
	{
		return redirect("/verbs/forms/{$verbForm->id}/basic");
	}

	public function create()
	{
		return view('verb::forms.create');
	}

	public function edit(Form $verbForm)
	{
		$form = $verbForm->load([
			'language',
			'parent',
			'parent.language',
			'structure',
			'structure.subject',
			'structure.primaryObject',
			'structure.secondaryObject',
			'structure.mode',
			'structure.verbClass',
			'structure.order',
			'sources'
		]);

		return view('verb::forms.edit', compact('form'));
	}

    /**
     * Save a new form
     *
     * @param \App\Http\Requests\LangFormRequest
     * @return \Illuminate\Http\Response
     */
    public function store(FormRequest $request)
    {
        if($request->empty == 'true') {
            $form = Gap::create($request->all());
            flash("{$form->structure->summary} created successfully.", 'is-success');
            return redirect("/verbs/gaps/{$form->id}");
        } else {
            $form = Form::create($request->all());
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
        $form->update($request->all());

        flash("{$form->surfaceForm} updated successfully", 'is-success');
        return redirect("/verbs/forms/{$form->id}");
    }
}
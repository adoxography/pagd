<?php

namespace App\Http\Controllers;

use App\EmptyForm;
use Illuminate\Http\Request;
use App\Http\Requests\LangFormRequest;

class EmptyFormController extends Controller
{
    public function show(EmptyForm $form)
    {
    	$form->load([
    		'language',
    		'formType',
    		'formType.mode',
    		'formType.formClass',
    		'formType.order',
    		'formType.subject',
    		'formType.primaryObject',
    		'formType.secondaryObject'
    	]);
    	return view('emptyForms.show', compact('form'));
    }

    public function edit(EmptyForm $form)
    {
    	$form->load([
    		'language',
    		'formType',
    		'formType.mode',
    		'formType.formClass',
    		'formType.order',
    		'formType.subject',
    		'formType.primaryObject',
    		'formType.secondaryObject'
    	]);

    	return view('emptyForms.edit', compact('form'));
    }

    /**
     * Update a form
     *
     * @param \App\Http\Requests\LangFormRequest
     * @param \App\EmptyForm The form
     * @return \Illuminate\Http\Response
     */
    public function update(LangFormRequest $request, EmptyForm $form)
    {
        $form->update($request->all());

        flash("{$form->formType->summary} updated successfully", 'is-success');
        return $form->id;
    }

    public function destroy(EmptyForm $form)
    {
    	$form->delete();

    	flash("{$form->formType->summary} deleted successfully");
    	return redirect("/languages/{$form->language->iso}");
    }
}

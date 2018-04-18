<?php

namespace Algling\Words\Http\Controllers;

use Algling\Words\Models\Form;
use Algling\Verbals\Models\Form as VerbForm;
use Algling\Nominals\Models\Form as NominalForm;
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
        $this->middleware('auth')->except('index', 'show');
    }

    /**
     * Show the form details.
     *
     * @param Form $form the form
     * @return \Illuminate\Http\Response
     */
    public function show(Form $form)
    {
        if ($this->shouldShow($form)) {
            if ($form->structure_type == 'verbStructures') {
                return redirect("/verbs/forms/{$form->id}/basic");
            } else {
                return redirect("/nominals/forms/{$form->id}/basic");
            }
        } else {
            return view('errors.404');
        }
    }

    public function clone(Form $form)
    {
        if ($form->structure_type == 'verbStructures') {
            return redirect("/verbs/forms/{$form->id}/clone");
        } else {
            return redirect("/nominals/forms/{$form->id}/clone");
        }
    }

    /**
     * Show the form edit form
     *
     * @param Form $form the form
     * @return \Illuminate\Http\Response
     */
    public function edit(Form $form)
    {
        if ($form->structure_type == 'verbStructures') {
            return redirect("/verbs/forms/{$form->id}/edit");
        } else {
            return redirect("/nominals/forms/{$form->id}/edit");
        }
    }

    /**
     * Destroy a form
     *
     * @param Form $form the form
     * @return \Illuminate\Http\Response
     */
    public function destroy(Form $form)
    {
        if ($form->structure_type == 'verbStructures') {
            $form = VerbForm::find($form->id);
        } else {
            $form = NominalForm::find($form->id);
        }

        $form->delete();

        flash("{$form->surfaceForm} deleted successfully.", 'is-success');
        return redirect("/languages/{$form->language_id}");
    }

    /**
     * Disambiguate a morpheme of a form
     *
     * @param Form $form
     * @return \Illuminate\Http\Response
     */
    public function disambiguate(Form $form)
    {
        $form->disambiguate(request()->index, request()->id);

        return redirect("/forms/{$form->id}");
    }

    /**
     * Show the example creation form with this form's details preloaded
     *
     * @param Form $form
     * @return \Illuminate\Http\Response
     */
    public function addExample(Form $form)
    {
        $form = $form->load('language');

        return view('word::examples.create', compact('form'));
    }
}

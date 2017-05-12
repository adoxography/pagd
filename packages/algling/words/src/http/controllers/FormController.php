<?php

namespace Algling\Words\Http\Controllers;

use Illuminate\Http\Request;
use Algling\Words\Models\Gap;
use Algling\Words\Models\Form;
use App\Http\Controllers\AlgModelController;
use Algling\Verbals\Http\Requests\FormRequest;

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
     * @param \App\Form The form
     * @return \Illuminate\Http\Response
     */
    public function show(Form $form)
    {
        if($this->shouldShow($form)) {
            if($form->structure_type == 'verbStructures') {
                return redirect("/verbs/forms/{$form->id}/basic");
            } else {
                return redirect("/nominals/forms/{$form->id}/basic");
            }
        } else {
            return view('errors.404');
        }
    }

    /**
     * Show the form edit form
     *
     * @param \App\Form The form
     * @return \Illuminate\Http\Response
     */
    public function edit(Form $form)
    {
        if($form->structure_type == 'verbStructures') {
            return redirect("/verbs/forms/{$form->id}/edit");
        } else {
            return redirect("/nominals/forms/{$form->id}/edit");
        }
    }
    
    /**
     * Destroy a form
     *
     * @param \App\Form The form
     * @return \Illuminate\Http\Response
     */
    public function destroy(Form $form)
    {
        $form->delete();

        flash("{$form->surfaceForm} deleted successfully.", 'is-success');
        return redirect("/languages/{$form->language_id}");
    }

    /**
     * Disambiguate a morpheme of a form
     *
     * @param \App\Form The form
     * @return \Illuminate\Http\Response
     */
    public function disambiguate(Form $form)
    {
        $form->disambiguate(request()->index, request()->disambiguator);
        
        return redirect("/forms/{$form->id}");
    }

    /**
     * Show the example creation form with this form's details preloaded
     *
     * @param \App\Form The form
     * @return \Illuminate\Http\Response
     */
    public function addExample(Form $form)
    {
        $form = $form->load('language');

        return view('word::examples.create', compact('form'));
    }
}

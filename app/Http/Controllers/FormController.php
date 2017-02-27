<?php

namespace App\Http\Controllers;

use App\Form;
use App\Http\Requests\LangFormRequest;

/**
 * HTTP Controller for forms
 */
class FormController extends Controller
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
        $form->load([
            'language',
            'morphemes' => function ($query) {
                $query->orderBy('position');
            },
            'duplicates',
            'parent.language',
            'formType.subject',
            'formType.primaryObject',
            'formType.secondaryObject',
            'formType.order',
            'formType.mode',
            'formType.formClass',
            'sources',
            'changeType'
        ]);

        $cognates = $form->cognates();

        return view('forms.show', compact('form', 'cognates'));
    }

    /**
     * Show the form creation form
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        return view('forms.create');
    }

    /**
     * Show the form edit form
     *
     * @param \App\Form The form
     * @return \Illuminate\Http\Response
     */
    public function edit(Form $form)
    {
        $form->load(
            'language',
            'parent',
            'parent.language',
            'formType',
            'formType.subject',
            'formType.primaryObject',
            'formType.secondaryObject',
            'formType.mode',
            'formType.formClass',
            'formType.order',
            'sources'
        );
        return view('forms.edit', compact('form'));
    }

    /**
     * Save a new form
     *
     * @param \App\Http\Requests\LangFormRequest
     * @return \Illuminate\Http\Response
     */
    public function store(LangFormRequest $request)
    {
        $form = Form::create($request->all());
        $form->connectSources($request->sources);

        flash("{$form->surfaceForm} created successfully.", 'is-success');
        return $form->id;
    }
    
    /**
     * Update a form
     *
     * @param \App\Http\Requests\LangFormRequest
     * @param \App\Form The form
     * @return \Illuminate\Http\Response
     */
    public function update(LangFormRequest $request, Form $form)
    {
        $form->update($request->all());
        $form->connectSources($request->sources);

        flash("{$form->surfaceForm} updated successfully", 'is-success');
        return $form->id;
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

        flash("{$form->surfaceForm} deleted successfully.", 'is-info');
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
        $presetForm = $form->load('language');

        return view('examples.create', compact('presetForm'));
    }

    /**
     * Show all incomplete forms
     *
     * @return \Illuminate\Http\Response
     */
    public function incompleteForms()
    {
        $languages = [];

        // Get all of the forms
        $forms = Form::where('complete', 0)
                     ->orderBy('language_id')
                     ->with('language')
                     ->with('formType.subject')
                     ->with('formType.primaryObject')
                     ->with('formType.secondaryObject')
                     ->get();

        // Pull out all of the unique languages
        $languageSet = $forms->pluck('language')->unique();

        // Sort the forms into the language array
        foreach ($languageSet as $language) {
            $languages[$language->name] = $forms->where('language_id', $language->id);
        }

        return view('forms.need-attention', compact('languages'));
    }
}

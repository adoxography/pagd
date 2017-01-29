<?php

namespace App\Http\Controllers;

use App\Form;
use App\FormType;
use App\Http\Requests\LangFormRequest;
use App\Language;
use App\Morpheme;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use JavaScript;
use Response;

class FormController extends Controller
{
    public function __construct()
    {
        $this->middleware('parseForm')->only('store', 'update');
    }
    
    public function index()
    {
        $forms = Form::all();

        return view('forms.index', compact('forms'));
    }

    public function addExampleTo(Form $form)
    {
        return view('examples.create', compact('form'));
    }

    public function create()
    {
        return view('forms.create');
    }

    public function edit(Form $form)
    {
        $form->load(
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
    
    public function update(LangFormRequest $request, Form $form)
    {
        $form->update($request->formData);

        $form->connectSources($request->sources);

        flash($form->surfaceForm.' updated successfully', 'is-success');
        return redirect('/forms/'.$form->id);
    }
    
    public function destroy(Form $form)
    {
        $form->delete();
        flash($form->surfaceForm.' deleted successfully.', 'is-info');
        return redirect('/languages/' . $form->language_id);
    }

    public function store(LangFormRequest $request)
    {
        // Insert the form
        $form = Form::create($request->formData);

        $form->connectSources($request->sources);

        // Flash a message to the session
        flash($form->surfaceForm.' created successfully.', 'is-success');

        return redirect('/forms/' . $form->id);
    }

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
            'sources'
        ]);

        return view('forms.show', compact('form'));
    }

    public function addExample(Form $form)
    {
        $presetForm = $form;

        return view('examples.create', compact('presetForm'));
    }
}

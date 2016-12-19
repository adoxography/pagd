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
        $sourceData = $request->sourceData;

        $form->update($request->formData);

        $form->sources()->detach();
        for($i = 0; $i < count($sourceData); $i++){
            if(isset($sourceData['source_id'][$i])){
                $form->sources()->attach($sourceData['source_id'][$i], ['extraInfo' => $sourceData['extraInfo'][$i]]);
            }
        }

        flash($form->surfaceForm.' updated successfully', 'success');
        return redirect('/forms/'.$form->id);
    }
    
    public function destroy(Form $form)
    {
        $form->delete();
        flash($form->surfaceForm.' deleted successfully.');
        return redirect('/languages/' . $form->language_id);
    }

    public function store(LangFormRequest $request)
    {
        $formData = $request->formData;
        $sourceData = $request->sourceData;

        // Insert the form
        $form = Form::create($formData);

        if(!$form){
            dd($form);
        }

        // Connect the sources
        for($i = 0; $i < count($sourceData); $i++){
            if(isset($sourceData['source_id'][$i])){
                $form->sources()->attach($sourceData['source_id'][$i], ['extraInfo' => $sourceData['extraInfo'][$i]]);
            }
        }

        // Flash a message to the session
        flash($form->surfaceForm.' created successfully.', 'success');

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

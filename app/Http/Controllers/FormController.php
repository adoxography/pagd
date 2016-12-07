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
        $destination;
        $formData = $request->formData;
        $sourceData = $request->sourceData;

        //Set a point to rollback to in case something goes wrong
        DB::beginTransaction();

        //Try to insert the form
        $form = new Form($formData);

        if (!$form->save()) {
            DB::rollback();
            if (isset($form->errors['missing'])) {
                session(['formData' => $formData, 'missing' => $form->errors['missing']]);
                return redirect()->action('MorphemeController@createMulti');
            }
            else
            {
                dd($form);
            }
        } else {
            for($i = 0; $i < count($sourceData); $i++){
                if(isset($sourceData['source_id'][$i])){
                    $form->sources()->attach($sourceData['source_id'][$i], ['extraInfo' => $sourceData['extraInfo'][$i]]);
                }
            }

            DB::commit();
            flash($form->surfaceForm.' created successfully.', 'success');
            $destination = redirect('/forms/' . $form->id);
        }

        return $destination;
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

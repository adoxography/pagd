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
        dd('wtf');
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
            'formType.order'
        );
        return view('forms.edit', compact('form'));
    }
    
    public function update(LangFormRequest $request, Form $form)
    {
        dd($request);
        $form->update($request->all());
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

        //Set the type
        $formData['formType_id'] = $this->getType($request->formTypeData);

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
            'formType.formClass'
        ]);
        return view('forms.show', compact('form'));
    }
    
    private function getType($data)
    {
        $type = null;

        //Try to find the type in the database
        $rules = $this->convertToRules($data);
        $type = FormType::where($rules)->first();

        //If it's not there, create a new one
        if (!$type) {
            $type = FormType::create(array_filter($data, 'strlen'));
        }

        return $type->id;
    }

    private function convertToRules($data)
    {
        $rules = array();

        foreach ($data as $key => $value) {
            if ($value === "") {
                $value = null;
            }
            array_push($rules, [$key, $value]);
        }

        return $rules;
    }

    private function insertMorphemes($requests, $language_id)
    {
        foreach ($requests as $request) {
            $morpheme = new Morpheme($request);
            $morpheme->language_id = $language_id;
            $morpheme->save();
        }
    }
}

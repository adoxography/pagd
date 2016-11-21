<?php

namespace App\Http\Controllers;

use App\Form;
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
            'formType.mood',
            'formType.class',
            'formType.tense',
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
        $formData = $request->formData;
        $destination;
        //dd($request);
        
        //Set a point to rollback to in case something goes wrong
        DB::beginTransaction();

        //Input any extra morphemes
        if ($request->morphemes) {
            $this->insertMorphemes($request->morphemes, $request->formData['language_id']);
        }//if

        //Try to insert the form
        $form = new Form($formData);

        if (!$form->save()) {
            DB::rollback();
            if (!isset($form->errors['missing'])) {
                //Send them back to the form submit page
            } else {
                $missing = $form->errors['missing'];
                $destination = view('morphemes.createMulti', compact('missing', 'formData'));
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
            'formType.order',
            'formType.mood',
            'formType.class',
            'formType.tense'
        ]);
        return view('forms.show', compact('form'));
    }

    public function autofill(Request $request)
    {
        $term = $request->get('term');
        $language = Language::with('parent')->find($request->language);
        $results = $this->autofillParents($language, $term);

        return Response::json($results);
    }
    
    private function autofillParents(Language $language, $term)
    {
        $results = array();

        if ($language->parent) {
            $parent = Language::with(['parent', 'forms' => function ($query) use ($term) {
                $query->where('surfaceForm', 'LIKE', "%$term%");
            }])->find($language->parent->id);
            foreach ($parent->forms as $form) {
                $results[] = [
                    'id' => $form->id,
                    'value' => $form->surfaceForm . ' (' . $parent->name . ')'
                ];
            }//forech
            $results += $this->autofillParents($parent, $term);
        }//if
        //Base case: do nothing

        return $results;
    }
    

    private function getType($data)
    {
        $type = null;

        //Try to find the type in the database
        $rules = $this->convertToRules($data);
        $type = FormType::where($rules)->first();

        //If it's not there, create a new one
        if (!$type) {
            $type = new FormType(array_filter($data, 'strlen'));
            $type->save();
        }

        return $type;
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

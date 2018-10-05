<?php

namespace App\Http\Controllers\Verbs;

use App\Http\Requests\Verbs\FormRequest;
use App\Models\Verbs\Form;
use App\Models\Verbs\Gap;
use App\Traits\ConvertsMorphemes;
use App\Http\Controllers\AlgModelController;

/**
 * HTTP Controller for forms
 */
class FormController extends AlgModelController
{
    use ConvertsMorphemes;

    /**
     * Initialize middleware
     */
    public function __construct()
    {
        $this->middleware('auth')->except('show', 'async');
    }

    public function show(Form $verbForm)
    {
        return redirect("/verbs/forms/{$verbForm->id}/basic");
    }

    public function async()
    {
        $data = request()->validate([
            'language' => 'integer',
            'class' => 'integer',
            'mode' => 'integer',
            'order' => 'integer',
            'subject' => 'integer',
            'primaryObject' => 'integer',
            'secondaryObject' => 'integer',
            'shape' => 'nullable',
            'perPage' => 'integer',
        ]);

        $query = Form::select()
            ->with([
                'structure',
                'structure.mode',
                'structure.verbClass',
                'structure.order',
                'structure.subject',
                'structure.primaryObject',
                'structure.secondaryObject',
                'examples'
            ]);

        if ($data['language']) {
            $query->where('language_id', $data['language']);
        }

        foreach (['class', 'mode', 'order', 'subject', 'primaryObject', 'secondaryObject'] as $field) {
            if (isset($data[$field])) {
                $value = (int)$data[$field];
                if ($value >= 0) {
                    $label = "{$field}_id";
                    $query->whereHas('structure', function ($query) use ($label, $value) {
                        if ($value == 0) {
                            $query->whereNull($label);
                        } else {
                            $query->where($label, $value);
                        }
                    });
                }
            }
        }

        if (isset($data['shape'])) {
            $shape = $data['shape'];
            $query->where('name', 'LIKE',"%$shape%");
        }

        $forms = $query->orderBy('name')->paginate(request()->perPage);
        return $forms->toJson();
    }

    public function create()
    {
        return view('verbs.forms.create');
    }

    public function clone(Form $verbForm)
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

        return view('verbs.forms.create', compact('form'));
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

        return view('verbs.forms.edit', compact('form'));
    }

    /**
     * Save a new form
     *
     * @param \App\Http\Requests\LangFormRequest
     * @return \Illuminate\Http\Response
     */
    public function store(FormRequest $request)
    {
        if ($request->empty == 'true') {
            $form = Gap::create($request->all());
            flash("{$form->structure->summary} created successfully.", 'is-success');
            return redirect("/verbs/gaps/{$form->id}");
        } else {
            $data = $request->all();
            $data['morphemicForm'] = $this->convertMorphemes();
            $form = Form::create($data);
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
        $data = $request->all();
        $data['morphemicForm'] = $this->convertMorphemes();

        $form->update($data);

        flash("{$form->surfaceForm} updated successfully", 'is-success');
        return redirect("/verbs/forms/{$form->id}");
    }
}

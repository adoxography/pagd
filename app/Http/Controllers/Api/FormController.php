<?php

namespace App\Http\Controllers\Api;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Algling\Words\Models\Form;
use App\Http\Resources\Form as FormResource;
use App\Http\Resources\FormCollection;

class FormController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $forms = Form::with([
            'language',
            'language.group',
            'parent',
            'parent.language',
            'morphemes',
            'morphemes.language',
            'morphemes.slot',
            'structure'
        ])->paginate(20);
        return new FormCollection($forms);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        throw new BadMethodCallException("/api/forms/store/{form} is not implemented.");
    }

    /**
     * Display the specified resource.
     *
     * @param  Form $form
     * @return \Illuminate\Http\Response
     */
    public function show(Form $form)
    {
        $form->load([
            'language',
            'language.group',
            'parent',
            'parent.language',
            'morphemes',
            'morphemes.language',
            'morphemes.slot',
            'structure',
            'examples'
        ]);
        return new FormResource($form);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  Form $form
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Form $form)
    {
        throw new BadMethodCallException("/api/forms/update/{form} is not implemented.");
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  Form $form
     * @return \Illuminate\Http\Response
     */
    public function destroy(Form $form)
    {
        throw new BadMethodCallException("/api/forms/destroy/{form} is not implemented.");
    }
}

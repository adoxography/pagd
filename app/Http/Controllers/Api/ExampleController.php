<?php

namespace App\Http\Controllers\Api;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Algling\Words\Models\Example;
use App\Http\Resources\Example as ExampleResource;
use App\Http\Resources\ExampleCollection;

class ExampleController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $examples = Example::with([
            'language',
            'language.group',
            'parent',
            'parent.language',
            'form',
            'form.language',
            'form.structure',
            'morphemes',
            'morphemes.language',
            'morphemes.slot'
        ])->paginate(20);
        return new ExampleCollection($examples);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        throw new BadMethodCallException("/api/examples/store/{example} is not implemented.");
    }

    /**
     * Display the specified resource.
     *
     * @param  Example $example
     * @return \Illuminate\Http\Response
     */
    public function show(Example $example)
    {
        $example->load([
            'language',
            'language.group',
            'parent',
            'parent.language',
            'form',
            'form.language',
            'form.structure',
            'morphemes',
            'morphemes.language',
            'morphemes.slot'
        ]);
        return new ExampleResource($example);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  Example $example
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Example $examples)
    {
        throw new BadMethodCallException("/api/examples/update/{example} is not implemented.");
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  Example $example
     * @return \Illuminate\Http\Response
     */
    public function destroy(Example $example)
    {
        throw new BadMethodCallException("/api/examples/update/{destroy} is not implemented.");
    }
}

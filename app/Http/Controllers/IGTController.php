<?php

namespace App\Http\Controllers;

use App\Models\IGT\IGT;
use App\Models\Language;
use App\Http\Requests\IGTRequest as Request;

class IGTController extends Controller
{
    /**
     * Initialize middleware
     */
    public function __construct()
    {
        $this->middleware('auth')->except('index', 'show');
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        return view('igt.create');
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \App\Http\Requests\IGTRequest  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $igt = IGT::create($request->all());

        flash("IGT added successfully.", 'is-success');
        return redirect("/igt/{$igt->id}/basic");
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\IGT\IGT  $igt
     * @return \Illuminate\Http\Response
     */
    public function show(IGT $igt)
    {
        return redirect("/igt/{$igt->id}/basic");
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\IGT\IGT  $igt
     * @return \Illuminate\Http\Response
     */
    public function edit(IGT $igt)
    {
        $igt->load(['language', 'lines']);
        return view('igt.edit', compact('igt'));
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \App\Http\Requests\IGTRequest  $request
     * @param  \App\Models\IGT\IGT  $igt
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, IGT $igt)
    {
        $igt->update($request->all());

        flash("IGT updated successfully.", 'is-success');
        return redirect("/igt/{$igt->id}/basic");
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\IGT\IGT  $igt
     * @return \Illuminate\Http\Response
     */
    public function destroy(IGT $igt)
    {
        $igt->delete();
        flash("IGT deleted successfully.", 'is-success');
        return redirect("/languages/{$igt->language_id}");
    }
}

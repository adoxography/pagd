<?php

namespace App\Http\Controllers;

use App\IGT;
use App\Language;
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
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        //
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
     * @param  \App\IGT  $igt
     * @return \Illuminate\Http\Response
     */
    public function show(IGT $igt)
    {
        return redirect("/igt/{$igt->id}/basic");
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\IGT  $igt
     * @return \Illuminate\Http\Response
     */
    public function edit(IGT $igt)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \App\Http\Requests\IGTRequest  $request
     * @param  \App\IGT  $igt
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, IGT $igt)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\IGT  $igt
     * @return \Illuminate\Http\Response
     */
    public function destroy(IGT $igt)
    {
        //
    }
}

<?php

namespace App\Http\Controllers;

use App\IGT;
use App\Language;
use Illuminate\Http\Request;

class IGTController extends Controller
{
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
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\IGT  $iGT
     * @return \Illuminate\Http\Response
     */
    public function show(IGT $iGT)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\IGT  $iGT
     * @return \Illuminate\Http\Response
     */
    public function edit(IGT $iGT)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\IGT  $iGT
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, IGT $iGT)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\IGT  $iGT
     * @return \Illuminate\Http\Response
     */
    public function destroy(IGT $iGT)
    {
        //
    }
}

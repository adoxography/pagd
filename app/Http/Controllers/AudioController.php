<?php

namespace App\Http\Controllers;

use App\Audio;
use App\Http\Requests\AudioRequest;

class AudioController extends Controller
{
    public function __construct()
    {
        $this->middleware('auth')->except(['index', 'show']);
    }

    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $audios = Audio::with('language')->get();

        $audios->sortBy(function($audio) {
            return $audio->language->name . $audio->name;
        });

        return view('audio.index', compact('audios'));
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        return view('audio.create');
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \App\Http\Requests\AudioRequest  $request
     * @return \Illuminate\Http\Response
     */
    public function store(AudioRequest $request)
    {
        $data = $request->only(['language_id', 'comments', 'name']);
        $file = $request->clip;

        $audio = Audio::upload($file, $data);

        flash("{$audio->name} stored successfully", 'is-success');
        return redirect("/audio/{$audio->id}");
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Audio  $audio
     * @return \Illuminate\Http\Response
     */
    public function show(Audio $audio)
    {
        $audio->load('language');

        return view('audio.show', compact('audio'));
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Audio  $audio
     * @return \Illuminate\Http\Response
     */
    public function edit(Audio $audio)
    {
        $audio->load('language');

        return view('audio.edit', compact('audio'));
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \App\Http\Requests\AudioRequest  $request
     * @param  \App\Audio  $audio
     * @return \Illuminate\Http\Response
     */
    public function update(AudioRequest $request, Audio $audio)
    {
        $audio->update($request->only('name', 'comments', 'language_id'));

        if($request->clip) {
            $audio->saveFile($request->clip);
        }

        flash("{$audio->name} updated successfully.", 'is-success');
        return redirect("/audio/{$audio->id}");
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Audio  $audio
     * @return \Illuminate\Http\Response
     */
    public function destroy(Audio $audio)
    {
        $audio->delete();

        flash("{$audio->name} deleted successfully.");
        return redirect('/languages');
    }
}

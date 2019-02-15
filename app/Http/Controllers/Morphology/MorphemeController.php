<?php

namespace App\Http\Controllers\Morphology;

use DB;
use App\Models\Words\Example;
use App\Models\Words\Form;
use App\Http\Controllers\AlgModelController;
use App\Http\Requests\MorphemeRequest;
use App\Models\Morphology\Morpheme;

/**
 * HTTP Controller for morphemes
 */
class MorphemeController extends AlgModelController
{
    /**
     * Initialize middleware
     */
    public function __construct()
    {
        $this->middleware('auth')->except('index', 'show');
    }

    /**
     * Show the morpheme details.
     *
     * @param Morpheme $morpheme
     * @return \Illuminate\Http\Response
     * @internal param The $Morpheme morpheme
     */
    public function show(Morpheme $morpheme)
    {
        return redirect("/morphemes/{$morpheme->id}/basic");
    }

    /**
     * Show the morpheme creation form
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        // This may have been set by a request for a new morpheme by a form or example
        $prefill = collect([
            'name' => request()->name,
            'language' => [
                'text' => request()->language,
                'id'   => request()->languageID
            ]
        ]);

        return view('morphemes.create', compact('prefill'));
    }

    public function clone(Morpheme $morpheme)
    {
        $morpheme->name = '';

        $morpheme->load([
            'language',
            'glosses',
            'slot',
            'parent',
            'parent.language',
            'sources'
        ]);

        return view('morphemes.create', compact('morpheme'));
    }

    /**
     * Show the morpheme edit form
     *
     * @param Morpheme $morpheme
     * @return \Illuminate\Http\Response
     * @internal param \App\Morpheme $The morpheme
     */
    public function edit(Morpheme $morpheme)
    {
        $morpheme->load([
            'language',
            'glosses',
            'slot',
            'parent',
            'parent.language',
            'sources'
        ]);

        return view('morphemes.edit', compact('morpheme'));
    }

    /**
     * Save a new morpheme
     *
     * @param \App\Http\Requests\MorphemeRequest
     * @return \Illuminate\Http\Response
     */
    public function store(MorphemeRequest $request)
    {
        $data = $request->all();
        $data['gloss'] = $this->convertGloss();

        $morpheme = Morpheme::create($data);

        if ($this->mightHaveConnections($morpheme)) {
            flash("The following forms and/or examples currently exist in {$morpheme->language->name} that might contain {$morpheme->present()}.");
            return redirect("/morphemes/{$morpheme->id}/possible-connections");
        } else {
            flash("{$morpheme->name} created successfully.", 'is-success');
            return redirect("/morphemes/{$morpheme->id}");
        }
    }

    /**
     * Update a morpheme
     *
     * @param MorphemeRequest $request
     * @param Morpheme $morpheme
     * @return \Illuminate\Http\Response
     * @internal param The $Morpheme morpheme
     */
    public function update(MorphemeRequest $request, Morpheme $morpheme)
    {
        $data = $request->all();
        $data['gloss'] = $this->convertGloss();

        $morpheme->update($data);

        if ($morpheme->isDirty('name') && $this->mightHaveConnections($morpheme)) {
            flash("The following forms and/or examples currently exist in {$morpheme->language->name} that might contain {$morpheme->present()}.");
            return redirect("/morphemes/{$morpheme->id}/possible-connections");
        } else {
            flash("{$morpheme->name} updated successfully.", 'is-success');
            return redirect("/morphemes/{$morpheme->id}");
        }
    }

    /**
     * Destroy a morpheme
     *
     * @param Morpheme $morpheme
     * @return \Illuminate\Http\Response
     * @internal param \App\Morpheme $The morpheme
     */
    public function destroy(Morpheme $morpheme)
    {
        $morpheme->delete();

        flash($morpheme->name.' deleted successfully.', 'is-info');
        return redirect("/languages/{$morpheme->language_id}");
    }

    public function showConnections(Morpheme $morpheme)
    {
        $morpheme->load('language');
        $name = str_replace(['*', '-'], '', $morpheme->name);

        $matches = collect();
        $types = [Form::class, Example::class];
        foreach ($types as $type) {
            $results = $type::where('language_id', $morpheme->language_id)->where('morphemic_form', 'LIKE', "%$name%")->get();
            $results = $results->filter(function ($result) use ($name) {
                $morphemes = explode('-', $result->morphemic_form);
                return in_array($name, $morphemes);
            });
            $matches = $matches->concat($results);
        }

        return view('morphemes.connect', compact('morpheme', 'matches'));
    }

    public function connect(Morpheme $morpheme)
    {
        $matches = request()->matches;
        $name = str_replace(['*', '-'], '', $morpheme->name);
        $pattern = "/(?<=^|-)$name(?=$|-)/";

        if ($matches) {
            foreach ($matches as $key => $type) {
                $model = $type::find($key);
                $model->morphemic_form = preg_replace($pattern, $morpheme->id, $model->morphemic_form);
                $model->save();
            }

            flash("{$morpheme->name} saved successfully.", 'is-success');
        }

        return redirect("/morphemes/{$morpheme->id}");
    }

    protected function mightHaveConnections(Morpheme $morpheme)
    {
        $name = str_replace(['*', '-'], '', $morpheme->name);
        $formQuery = DB::table('Word_Forms')
            ->select('id')
            ->where('language_id', $morpheme->language->id)
            ->where('morphemic_form', 'LIKE', "%$name%");
        $matches = DB::table('Word_Examples')
            ->select('id')
            ->where('language_id', $morpheme->language->id)
            ->where('morphemic_form', 'LIKE', "%$name%")
            ->union($formQuery)
            ->get();

        return $matches->count() > 0;
    }

    protected function convertGloss()
    {
        $output = '';
        $firstTime = true;

        foreach (request()->gloss as $gloss) {
            if ($firstTime) {
                $firstTime = false;
            } else {
                $output .= '.';
            }

            $output .= $gloss['name'];
        }

        return $output;
    }
}

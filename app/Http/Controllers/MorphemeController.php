<?php

namespace App\Http\Controllers;

use App\Http\Requests\MorphemeRequest;
use App\Language;
use App\Morpheme;
use Illuminate\Support\Facades\Redirect;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Response;

class MorphemeController extends Controller
{
    public function create(){
        return view('morphemes.create');
    }

    public function destroy(Morpheme $morpheme){
        $morpheme->delete();
        flash($morpheme->name.' deleted successfully.');
        return Redirect::to('/languages/' . $morpheme->language_id);
    }

    public function edit(Morpheme $morpheme){
        $morpheme->load('language','gloss','forms');
        return view('morphemes.edit', compact('morpheme'));
    }

    public function show(Morpheme $morpheme){
        $morpheme->load('language', 'gloss', 'forms', 'parent.language');
        return view('morphemes.show', compact('morpheme'));
    }

    public function store(MorphemeRequest $request){
        $morpheme = Morpheme::create($request->all());
        flash($morpheme->name.' created successfully.', 'success');
        return Redirect::to('/morphemes/' . $morpheme->id);
    }

    public function update(MorphemeRequest $request, Morpheme $morpheme){
        $morpheme->update($request->all());
        flash($morpheme->name.' updated successfully.', 'success');
        return Redirect::to('/morphemes/'.$morpheme->id);
    }

    public function autofill(Request $request)
    {
        $term = $request->term;
        $language = Language::with('parent')->find($request->language);
        $results = $this->autofillParents($language, $term);

        return Response::json($results);
    }
    
    private function autofillParents(Language $language, $term)
    {
        $results = array();

        if ($language->parent) {
            $parent = Language::with(['parent', 'morphemes' => function ($query) use ($term) {
                $query->where('name', 'LIKE', "%$term%");
            }])->find($language->parent->id);
            foreach ($parent->morphemes as $morpheme) {
                $results[] = [
                    'id' => $morpheme->id,
                    'value' => $morpheme->name . ' (' . $parent->name . ')'
                ];
            }//forech
            $results += $this->autofillParents($parent, $term);
        }//if
        //Base case: do nothing

        return $results;
    }
    
    
}

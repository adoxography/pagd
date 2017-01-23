<?php

namespace App\Http\Controllers;

use App\Http\Requests\MorphemeRequest;
use Illuminate\Support\Facades\DB;
use App\Form;
use App\Language;
use App\Morpheme;
use Illuminate\Support\Facades\Redirect;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Response;

class MorphemeController extends Controller
{
    public function confirmDelete()
    {
        $morpheme = session('morphemeToDelete');
        $forms = session('formsThatWillBeOrphans');

        return view('morphemes.confirmDelete', compact('morpheme', 'forms'));
    }

    public function create(){
        return view('morphemes.create');
    }

    public function destroy(Morpheme $morpheme){
        $forms = $morpheme->forms;

        if(count($forms) == 0 || request()->confirmDelete) {
            $morpheme->delete();

            foreach(Form::where('language_id', $morpheme->language_id)->get() as $form) {
                $form->connectMorphemes();
            }

            flash($morpheme->name.' deleted successfully.');
            return Redirect::to('/languages/' . $morpheme->language_id);
        }
        else {
            session(['morphemeToDelete' => $morpheme, 'formsThatWillBeOrphans' => $forms]);
            return redirect()->to('/morphemes/confirm-delete');
        }
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
        $morpheme = new Morpheme(array_filter($request->all(), 'validDatabaseInput'));

        $duplicates = Morpheme::where('name', $morpheme->name)
                              ->where('language_id', $morpheme->language_id)
                              ->orderBy('disambiguator')
                              ->get();

        $morpheme->disambiguator = $this->firstOpenSpace($duplicates);

        $morpheme->save();

        foreach(Form::where('language_id', $morpheme->language_id)->get() as $form) {
            $form->connectMorphemes();
        }

        flash($morpheme->name.' created successfully.', 'success');
        return Redirect::to('/morphemes/' . $morpheme->id);
    }

    protected function firstOpenSpace($morphemes)
    {
        $found = false;
        $i;
        for($i = 1; $i <= count($morphemes) && !$found; $i++) {
            $found = $i != $morphemes[$i]->disambiguator;
        }

        if(!$found) {
            $i++;
        }

        return $i;
    }

    public function update(MorphemeRequest $request, Morpheme $morpheme){
        $morpheme->update(array_filter($request->all(), 'validDatabaseInput'));

        foreach(Form::where('language_id', $morpheme->language_id)->get() as $form) {
            $form->connectMorphemes();
        }

        flash($morpheme->name.' updated successfully.', 'success');
        return Redirect::to('/morphemes/'.$morpheme->id);
    }
}

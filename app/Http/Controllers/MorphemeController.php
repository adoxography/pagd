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
    public function create(){
        return view('morphemes.create');
    }

    public function createMulti(){
        $missing = session('missing');
        return view('morphemes.createMulti', compact('missing'));
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
        $morpheme = Morpheme::create(array_filter($request->all(), 'validDatabaseInput'));
        flash($morpheme->name.' created successfully.', 'success');
        return Redirect::to('/morphemes/' . $morpheme->id);
    }

    public function createOTG(Request $request){
        $names        = $request->names;
        $glosses      = $request->glosses;
        $slots        = $request->slots;
        $numMorphemes = $request->numMorphemes;
        $language     = $request->language;

        for($i = 0; $i < $numMorphemes; $i++){
            Morpheme::create(
                [
                    'name'        => $names[$i],
                    'language_id' => $language,
                    'gloss_id'    => $glosses[$i],
                    'slot_id'     => $slots[$i]
                ]
            );
        }

        return "Hello";
    }

    public function storeMulti(Request $request){
        $morphemes = $request->morphemes;
        $formData = session('formData');
        $failed = array();

        //Store the new morphemes
        foreach($morphemes as $morphemeData)
        {
            $morpheme = new Morpheme($morphemeData);
            $morpheme->language_id = $formData['language_id'];
            if(!$morpheme->save())
            {
                $failed[] = $morphemeData;
            }
        }

        if(count($failed) > 0) //If any were wrong, redirect back with just the missing morphemes
        {
            session(['missing' => $failed]);
            return redirect()->action('MorphemeController@createMulti');
        }
        else //Otherwise, go ahead and add the form
        {
            $form = Form::create($formData);
            return redirect('/forms/' . $form->id);
        }
    }

    public function update(MorphemeRequest $request, Morpheme $morpheme){
        $morpheme->update($request->all());
        flash($morpheme->name.' updated successfully.', 'success');
        return Redirect::to('/morphemes/'.$morpheme->id);
    }
    
    public function exists(Request $request){
        $language = $request->language;
        $morphemes = explode('-', $request->morphemes);
        $checked = array();
        $missing = array();

        foreach($morphemes as $morpheme){
            if($morpheme !== '' && !in_array($morpheme, $checked)){
                array_push($checked, $morpheme);
                $query = Morpheme::where('language_id',$language)->where('name',$morpheme)->get();
                if(count($query) == 0){
                    array_push($missing,$morpheme);
                }
            }
        }

        return response()->json($missing);
    }
}

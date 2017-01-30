<?php

namespace App\Http\Controllers;

use App\Form;
use App\Mode;
use JavaScript;
use App\Http\Requests;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Artisan;

class SandboxController extends Controller
{
    
    public function index(){

        $hashTable = new \App\HashTable();

        $forms = Form::with([
            'language.group',
            'formType.mode',
            'formType.formClass',
            'formType.order',
            'formType.subject',
            'formType.primaryObject',
            'formType.secondaryObject',
            'morphemes' => function ($query) {
                $query->orderBy('position');
            },
            'morphemes.gloss',
            'morphemes.slot'
        ])->whereHas('formType', function($query) {
            $query->where('isNegative', 0)
                  ->where('isDiminutive', 0)
                  ->where('isAbsolute', null)
                  ->where('primaryObject_id', null)
                  ->where('secondaryObject_id', null);
        })->get();
        $formTypes = $forms->pluck('formType');

        $languageDictionary = $forms->pluck('language')->unique();
        $orderDictionary  = $formTypes->pluck('order')->unique();
        $modeDictionary   = $formTypes->pluck('mode')->unique();
        $classes = $formTypes->pluck('formClass')->unique();
        $subjects = $formTypes->pluck('subject')->unique();


        $data = [];
        $rows = [];

        foreach($forms as $form) {
            $formType = $form->formType;

            $hashTable->insert($form);

            $data[$form->language_id][$formType->order_id][$formType->mode_id] = null;

            if(isset($formType->subject->number)) {
                $rows[$formType->formClass->name][$formType->subject->person][$formType->subject->number] = null;
            }
        }

        // dd($hashTable->getArray());

    	return view('sandbox', compact('data', 'rows', 'hashTable', 'languageDictionary', 'orderDictionary', 'modeDictionary'));
    }

    public function store(){
    	$this->validate(request(), [
    		'name' => 'required',
    		'description' => 'required'
    	]);

    	// $mode = Mode::create(request()->all());

    	$mode = new Mode();
    	$mode->name = request('name');
    	$mode->description = request('description');
    	$mode->save();

    	return ['message' => "{$mode->id} successfully created."];
    }
    
    
}
<?php

namespace App\Http\Controllers;

use App\Argument;
use App\FormClass;
use App\FormType;
use App\Gloss;
use App\Group;
use App\Http\Requests;
use App\Language;
use App\Mood;
use App\Morpheme;
use App\Order;
use App\Slot;
use App\Tense;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Redirect;

class InputController extends Controller
{
    public function index(){
    	return view('input.index');
	}
	
	public function inputLanguage(){
		$groups = Group::all();
		$languages = Language::all();
		return view('input.inputLanguage', compact('groups','languages'));
	}

	public function inputForm(){
		$languages = Language::all();
		$arguments = Argument::all();
		$orders = Order::all();
		$moods = Mood::all();
		$tenses = Tense::all();
		$classes = FormClass::all();

		return view('input.inputForm', compact('languages', 'arguments', 'orders', 'moods', 'tenses', 'classes'));
	}

	public function inputMorpheme(){
		$languages = Language::all();
		$glosses = Gloss::all();
		$slots = Slot::all();

		return view('input.inputMorpheme', compact('languages', 'glosses', 'slots'));
	}
	
	public function submitLanguage(Request $request){
		$this->validate($request, [
			'name'      => ['required','unique:Languages,name'],
			'group_id'  => ['required','integer','exists:Groups,id'],
			'parent_id' => ['nullable','integer','exists:Languages,id'],
			'iso'       => ['required','unique:Languages,iso','size:3'],
			'algoCode'  => ['required','unique:Languages,algoCode','size:3']
		]);

		$language = new Language($request->all());
		$language->save();

		return Redirect::to('/languages/' . $language->id);
	}

	public function submitForm(Request $request){
		$type = new FormType($request->all());
		if($type){
			//Finish me later
		}
		$form = new Form($request->all());
		$form->save();

		return $form->name;
	}

	public function submitMorpheme(Request $request){
		$morpheme = new Morpheme($request->all());
		$morpheme->save();

		if($request->parent_id != ''){
			$parent = Morpheme::find($request->parent_id);
			$parent->children()->save($morpheme);
		}

		return $morpheme;
	}
	
	
}

<?php

namespace App\Http\Controllers;

use App\FormClass;
use App\Http\Controllers\ClosedController;
use App\Http\Requests;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Redirect;

class ClassController extends Controller
{
	private $titleSG = 'Class';
	private $titlePL = 'Classes';
	private $namePL = 'classes';
	private $uri = '/classes/';
    
    public function index(){
    	$classes = FormClass::all();
    	return ClosedController::index($classes,$this->titlePL,$this->namePL);
    }

	public function create(){
		return ClosedController::create($this->titleSG,$this->uri);
	}

	public function destroy(FormClass $class){
		$class->delete();
		return Redirect::to($this->uri);
	}

	public function insert(Request $request, FormClass $class){
		$this->validate($request,[
			'name' => ['required','unique:Classes,name']
		]);

		$newClass = new FormClass($request->all());
		return Redirect::to($this->uri . $newClass->id);
	}
	

    public function show(FormClass $class){
    	
    }
    
    
}

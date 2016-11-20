<?php

namespace App\Http\Controllers;

use App\Gloss;
use App\Http\Requests;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Redirect;

class GlossController extends Controller
{
    public function index(){
    	$glosses = Gloss::all();

    	return ClosedWithAbvController::index($glosses,'Glosses','glosses');
    }

    public function create(){
    	return ClosedWithAbvController::create('Glosses','/glosses');
    }
    

	public function destroy(Gloss $gloss){
		$gloss->delete();

		return Redirect::to('/glosses');
	}

	public function insert(Request $request, Gloss $gloss){
		$this->validate($request, [
			'abv'  => 'required',
			'name' => 'required'
		]);

		$gloss = new Gloss($request->all());
		$gloss->save();

		return Redirect::to('/glosses/' . $gloss->id);
	}
	

    public function show(Gloss $gloss){
    	return ClosedWithAbvController::show($gloss,'Gloss','glosses');
    }
    
    
}

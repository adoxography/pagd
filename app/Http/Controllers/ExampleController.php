<?php

namespace App\Http\Controllers;

use App\Example;
use App\Http\Requests;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Redirect;

class ExampleController extends Controller
{
    public function create(){
    	return view('examples.create');
    }

    public function insert(Request $request){
    	$example = new Example($request->all());
    	$example->save();

    	return Redirect::to('/forms/' . $example->form_id);
    }
    
    
}

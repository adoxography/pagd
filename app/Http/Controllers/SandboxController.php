<?php

namespace App\Http\Controllers;

use App\Http\Requests;
use App\Mode;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Artisan;
use JavaScript;

class SandboxController extends Controller
{
    
    public function index(){

    	return view('sandbox');
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

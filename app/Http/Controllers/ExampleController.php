<?php

namespace App\Http\Controllers;

use App\Example;
use App\Http\Requests;
use App\Http\Requests\ExampleRequest;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Redirect;

class ExampleController extends Controller
{
    public function __construct(){
        $this->middleware('parseSources')->only('store', 'update');
    }

	public function index(){
		return view('examples.index');
	}

    public function create(){
    	return view('examples.create');
    }

    public function edit(Example $example){
    	return view('examples.edit', compact('example'));
    }

    public function store(ExampleRequest $request){
        $sourceData = $request->sourceData;
    	$example = Example::create($request->all());

        if($example){
            $example->addSources($sourceData);
        }

    	return Redirect::to('/forms/' . $example->form_id);
    }
    
    
}

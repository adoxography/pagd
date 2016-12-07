<?php

namespace App\Http\Controllers;

use App\Source;
use Illuminate\Http\Request;

class SourceController extends Controller
{
    public function index(){
    	$sources = Source::all();
    	return view('sources.index', compact('sources'));
    }

    public function create(){
        return view('sources.create');
    }

    public function store(Request $request){
    	$short = $request->short;
    	$long  = $request->long;

    	$newSource = Source::create(['short' => $short, 'long' => $long]);
    	return $newSource->toJson();
    }
}

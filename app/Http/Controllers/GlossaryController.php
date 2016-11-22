<?php

namespace App\Http\Controllers;

use App\FormClass;
use App\Gloss;
use App\Mood;
use App\Slot;
use Illuminate\Http\Request;

class GlossaryController extends Controller
{
    
    public function index(){
    	return view('glossary.index');
    }
    
    public function show($key){
    	$items;
    	$itemName = $key;

    	switch($itemName){
    		case('classes'):
    			$items = FormClass::all();
    			break;
    		case('glosses'):
    			$items = Gloss::all();
    			break;
    		case('moods'):
    			$items = Mood::all();
    			break;
    		case('orders'):
    			$items = Order::all();
    			break;
    		case('tenses'):
    			$item = Tense::all();
    			break;
    		case('slots'):
    			$items = Slot::all();
    			break;
    	}

    	return view('glossary.show', compact('items', 'itemName'));
    }
}

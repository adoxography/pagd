<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use App\Http\Requests;

class ClosedController extends Controller
{
    
    public static function index($items,$itemName,$itemLink){
    	return view('closed.index', compact('items','itemName','itemLink'));
    }
    

    public static function create($item,$action){
    	return view('closed.create', compact('item','action'));
    }
    
}

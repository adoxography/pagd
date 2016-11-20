<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use App\Http\Requests;

class ClosedWithAbvController extends Controller
{
    
    public static function index($items,$itemTitle,$itemLink){
    	return view('closedWithAbv.index', compact('items','itemTitle','itemLink'));
    }

    public static function create($itemName,$action){
    	return view('closedWithAbv.create', compact('itemName','action'));
    }
    
    public static function show($item,$itemName,$itemLink){
    	return view('closedWithAbv.show', compact('item','itemName','itemLink'));
    }
      
}

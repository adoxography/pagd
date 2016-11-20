<?php

namespace App\Http\Controllers;

use App\Group;
use App\Http\Requests;
use App\Language;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Response;

class AutocompleteController extends Controller
{

	public function autocomplete(Request $request){
		return Response::json(['alpha','beta']);
		$term = $request->term;
		$table = $request->table;
		$field = $request->field;

		$returnArray = array();
		$queries = DB::table($table)->where($field, 'LIKE', "%$term%")->get();
		foreach($queries as $query){
			$returnArray[] = ['id' => $query->id, 'value' => $query->$field];
		}
		return Response::json($returnArray);
	}
	
    
    public function groups(Request $request){
    	$term = $request->term;
    	$returnArray = array();
    	$groups = Group::where('name','LIKE','%'.$term.'%')->get();

    	foreach($groups as $group){
    		$returnArray[] = ['id' => $group->id, 'value' => $group->name];
    	}//foreach

    	return Response::json($returnArray);
    }

    public function languages(Request $request){
    	$term = $request->term;
    	$returnArray = array();
    	$languages = Language::where('name','LIKE','%'.$term.'%')->get();
    	foreach($languages as $language){
    		$returnArray[] = ['id' => $language->id, 'value' => $language->name];
    	}
    	return Response::json($returnArray);
    }
    
    
}

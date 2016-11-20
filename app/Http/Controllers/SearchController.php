<?php

namespace App\Http\Controllers;

use App\Form;
use App\FormClass;
use App\Http\Requests;
use App\Mood;
use App\Order;
use App\Search\SearchTable;
use App\Tense;
use Illuminate\Http\Request;

class SearchController extends Controller
{
    public function index(){
    	$orders = Order::all();
    	$moods = Mood::all();
    	$classes = FormClass::all();
    	$tenses = Tense::all();

    	return view('search.index', compact('orders','moods','classes','tenses'));
    }

    public function search(Request $request){
    	$forms = Form::with(
    		'language.group',
    		'formType.mood',
    		'formType.tense',
    		'formType.class',
    		'formType.order',
    		'formType.subject',
    		'formType.primaryObject',
    		'formType.secondaryObject',
    		'morphemes'
    	)->get();

        $result = new SearchTable($forms);
        return view('search.result', compact('result'));
    }
}

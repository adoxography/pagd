<?php

namespace App\Http\Controllers;

use App\Form;
use App\FormClass;
use App\Http\Requests;
use App\Mode;
use App\Order;
use App\Search\SearchTable;
use Illuminate\Http\Request;

class SearchController extends Controller
{
    public function index(){
    	$orders = Order::all();
    	$modes = Mode::all();
    	$classes = FormClass::all();

    	return view('search.index', compact('orders','modes','classes'));
    }

    public function search(Request $request){
    	$forms = Form::with(
    		'language.group',
    		'formType.mode',
    		'formType.formClass',
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

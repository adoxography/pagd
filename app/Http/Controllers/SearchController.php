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
    	return view('search.index');
    }

    public function search(Request $request){
    	$forms = Form::with([
            'language.group',
            'formType.mode',
            'formType.formClass',
            'formType.order',
            'formType.subject',
            'formType.primaryObject',
            'formType.secondaryObject',
            'morphemes' => function($query){
                $query->orderBy('position');
            },
            'morphemes.gloss',
            'morphemes.slot'
        ])->get();

        $result = new SearchTable($forms);
        return view('search.result', compact('result'));
    }
}

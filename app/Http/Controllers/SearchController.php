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
    public function index()
    {
        return view('search.index');
    }

    public function search(Request $request)
    {
        $forms = Form::with([
            'language.group',
            'formType.mode',
            'formType.formClass',
            'formType.order',
            'formType.subject',
            'formType.primaryObject',
            'formType.secondaryObject',
            'morphemes' => function ($query) {
                $query->orderBy('position');
            },
            'morphemes.gloss',
            'morphemes.slot'
        ])->get();

        dd($forms);

        $result = new SearchTable($forms);
        return view('search.result', compact('result'));
    }

    public function paradigm(Request $request)
    {
        $languages  = $request->languages;
        $modeSelect = $request->modeSelect;
        $modes      = $request->modes;
        $orders     = $request->orders;
        $classes    = $request->classes;
        $negative   = $request->includeNegative;
        $diminutive = $request->includeDiminutive;

        $query = Form::with([
            'language.group',
            'formType.mode',
            'formType.formClass',
            'formType.order',
            'formType.subject',
            'formType.primaryObject',
            'formType.secondaryObject',
            'morphemes' => function ($query) {
                $query->orderBy('position');
            },
            'morphemes.gloss',
            'morphemes.slot'
        ]);


        for($i = 0; $i < count($languages); $i++){
            if($i == 0){
                $query = $query->where('language_id',$languages[$i]);
            }
            else{
                $query = $query->orWhere('language_id',$languages[$i]);
            }
        }

        if ($modeSelect == 'indicativeOnly') {  // If Indicative Only was selected, just show indicative modes
            $query = $query->wherehas('formType', function ($query) {
                $query->where('mode_id', 1);
            });
        } elseif ($modeSelect == 'selectModes') { // If "The following modes" was selected, add those in
            $query = $query->whereHas('formType', function ($query) use ($modes) {
                for ($i = 0; $i < count($modes); $i++) {
                    if ($i == 0) {
                        $query = $query->where('mode_id', $modes[$i]);
                    } else {
                        $query = $query->orWhere('mode_id', $modes[$i]);
                    }
                }
            });
        }
        //Otherwise, don't limit

        if ($classes) {
            $query = $query->whereHas('formType', function ($query) use ($classes) {
                for ($i = 0; $i < count($classes); $i++) {
                    if ($i == 0) {
                        $query = $query->where('class_id', $classes[$i]);
                    } else {
                        $query = $query->orWhere('class_id', $classes[$i]);
                    }
                }
            });
        }

        if ($orders) {
            $query = $query->whereHas('formType', function ($query) use ($orders) {
                for ($i = 0; $i < count($orders); $i++) {
                    if ($i == 0) {
                        $query = $query->where('order_id', $orders[$i]);
                    } else {
                        $query = $query->orWhere('order_id', $orders[$i]);
                    }
                }
            });
        }

        if (!isset($negative)) {
            $query = $query->whereHas('formType', function ($query) {
                $query->where('isNegative', false);
            });
        }

        if (!isset($diminutive)) {
            $query = $query->whereHas('formType', function ($query) {
                $query->where('isDiminutive', false);
            });
        }

        $result = new SearchTable($query->get());
        return view('search.result', compact('result'));
    }
}

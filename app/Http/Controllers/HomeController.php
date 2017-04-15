<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class HomeController extends Controller
{
    /**
     * Show the application dashboard.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return view('welcome');
    }

    public function changelog()
    {
        return view('changelog');
    }

    public function about()
    {
        return view('about');
    }

    public function guide()
    {
        return view('guide');
    }

    public function entireParadigm() {
        $classes = '';
        $orders = '';
        $languages = '';
        $firstTime = true;

        // Load all the classes
        foreach(\App\FormClass::all() as $class) {
            if($firstTime) {
                $firstTime = false;
            } else {
                $classes .= '&';
            }

            $classes .= "classes[]={$class->id}";
        }

        // Load all the orders
        foreach(\App\Order::all() as $order) {
            $orders .= "&orders[]={$order->id}";
        }

        // Load all the languages
        foreach(\App\Language::all() as $language) {
            if($language->name != 'Demo')
                $languages .= "&languages[]={$language->name}&languages[]_id={$language->id}";
        }

        // Call the search
        return redirect()->to("/search/paradigm?{$classes}{$orders}&modeSelect=allModes&affirmative=on&negative=on&nonDiminutive=on&diminutive=on{$languages}");
    }

    /**
     * Show all incomplete forms
     *
     * @return \Illuminate\Http\Response
     */
    public function incompleteForms()
    {
        $languages = \App\Language::with(['forms' => function($query) {
            $query->where('Forms.complete', 0)
                ->with('formType.primaryObject')
                ->with('formType.secondaryObject')
                ->with('formType.subject')
                ->with('morphemes')
                ->with('morphemes.glosses')
                ->with('morphemes.slot');
        }])->with(['examples' => function($query) {
            $query->where('Examples.complete', 0)
                ->with('form.formType.subject')
                ->with('form.formType.primaryObject')
                ->with('form.formType.secondaryObject')
                ->with('form.formType.formClass')
                ->with('form.formType.order')
                ->with('form.formType.mode')
                ->with('morphemes')
                ->with('morphemes.glosses')
                ->with('morphemes.slot');
        }])
        ->where('Languages.name', '<>', 'Demo')
        ->get();

        return view('forms.need-attention', compact('languages'));
    }
}

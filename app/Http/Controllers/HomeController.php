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
        $formLanguages = [];
        $exampleLanguages = [];

        // Get all of the forms
        $forms = \App\Form::where('complete', 0)
                     ->orderBy('language_id')
                     ->with('language')
                     ->with('formType.subject')
                     ->with('formType.primaryObject')
                     ->with('formType.secondaryObject')
                     ->get();

        $examples = \App\Example::select('Examples.*')
                           ->join('Forms', 'Forms.id', '=', 'form_id')
                           ->where('Examples.complete', 0)
                           ->with('form')
                           ->with('form.language')
                           ->orderBy('Forms.language_id')
                           ->get();

        // Pull out all of the unique languages
        $formLanguageSet = $forms->pluck('language')->unique();
        $exampleLanguageSet = $examples->pluck('form.language')->unique();

        // Sort the forms into the language array
        foreach ($formLanguageSet as $language) {
            $formLanguages[$language->name] = $forms->where('language_id', $language->id);
        }
        foreach ($exampleLanguageSet as $language) {
            $exampleLanguages[$language->name] = $examples->where('form.language_id', $language->id);
        }

        return view('forms.need-attention', compact('formLanguages', 'exampleLanguages'));
    }
}

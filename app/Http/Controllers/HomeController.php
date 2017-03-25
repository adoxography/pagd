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
        return redirect()->to("/search/paradigm?{$classes}{$orders}&modeSelect=allModes&affirmative=on&negative=on{$languages}");
    }
}

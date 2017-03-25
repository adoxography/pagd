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

    public function entireParadigm() {
        $classes = '';
        $orders = '';
        $languages = '';
        $firstTime = true;

        foreach(\App\FormClass::all() as $class) {
            if($firstTime) {
                $firstTime = false;
            } else {
                $classes .= '&';
            }

            $classes .= "classes[]={$class->id}";
        }

        foreach(\App\Order::all() as $order) {
            $orders .= "&orders[]={$order->id}";
        }

        foreach(\App\Language::all() as $language) {
            if($language->name != 'Demo')
                $languages .= "&languages[]={$language->name}&languages[]_id={$language->id}";
        }

        return redirect()->to("/search/paradigm?{$classes}{$orders}&modeSelect=allModes&affirmative=on&negative=on{$languages}");
    }
}

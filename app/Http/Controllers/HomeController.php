<?php

namespace App\Http\Controllers;

use App\Language;
use Illuminate\Http\Request;
use Algling\Verbals\Models\Order;
use Algling\Verbals\Models\VerbClass;
use Illuminate\Support\Facades\Storage;

class HomeController extends Controller
{
    /**
     * Show the application dashboard.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $page = Storage::get('pages/welcome.php');

        return view('welcome', compact('page'));
    }

    public function glossary()
    {
        $pages = [];

        $files = array_where(Storage::allFiles('pages'), function($value) {
            return preg_match('/.+\.php/', $value);
        });

        foreach($files as $file) {
            $uri = str_replace(['pages', '.php'], '', $file);
            $structure = explode('/', $uri);
            // $label = str_replace('_', ' ', array_last($structure));
            $label = substr($uri, 1);

            $hide = json_decode(Storage::get('pages/hide.json'));

            if(!in_array(substr($uri, 1), $hide)) {
                $pages[] = [
                    'uri' => $uri,
                    'label' => $label
                ];
            }
        }

        return view('glossary.index', compact('pages'));
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
        foreach(VerbClass::all() as $class) {
            if($firstTime) {
                $firstTime = false;
            } else {
                $classes .= '&';
            }

            $classes .= "classes[]={$class->id}";
        }

        // Load all the orders
        foreach(Order::all() as $order) {
            $orders .= "&orders[]={$order->id}";
        }

        // Load all the languages
        foreach(Language::all() as $language) {
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
        $languages = Language::with(['forms' => function($query) {
            $query->where('Word_Forms.complete', 0)
                ->with('formType.primaryObject')
                ->with('formType.secondaryObject')
                ->with('formType.subject')
                ->with('morphemes')
                ->with('morphemes.glosses')
                ->with('morphemes.slot');
        }])->with(['examples' => function($query) {
            $query->where('Word_Examples.complete', 0)
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

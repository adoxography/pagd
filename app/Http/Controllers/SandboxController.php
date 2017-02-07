<?php

namespace App\Http\Controllers;

use App\Form;
use App\Mode;
use JavaScript;
use App\Language;
use App\Http\Requests;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Artisan;
use Illuminate\Support\Facades\Storage;
use Illuminate\Contracts\Filesystem\FileNotFoundException;

class SandboxController extends Controller
{
    
    public function index(){
        $forms = Form::where('complete', 0)->orderBy('language_id')->get();

        return view('sandbox');
    }

    public function paradigm() {

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
        ])->whereHas('formType', function($query) {
            $query->where('isNegative', 0)
                  ->where('isDiminutive', 0)
                  ->where('isAbsolute', null)
                  // ->where('primaryObjectyObject_id', null)
                  ->where('secondaryObject_id', null);
        })->get();

        $argumentDictionary = \App\Argument::all();


        $data = [];
        $rows = [
            'AI' => [
                '1' => [],
                '1s' => [],
                '2' => [],
                '2s' => [],
                '1p' => [],
                '21' => [],
                '2p' => [],
                '3' => [],
                '3s' => [],
                '3d' => [],
                '3p' => [],
                '3\'' => [],
                '3\'s' => [],
                '3\'d' => [],
                '3\'p' => [],
                '3\'\'' => [],
                '3\'\'s' => [],
                '3\'\'p' => [],
                'X' => [],
            ],
            'II' => [
                '0' => [],
                '0s' => [],
                '0d' => [],
                '0p' => [],
                '0\'' => [],
                '0\'s' => [],
                '0\'d' => [],
                '0\'p' => [],
                '0\'\'' => [],
            ],
            'TI1' => [
                '1s—0' => [],
                '1s—0s' => [],
                '1s—0p' => [],

                '2s—0' => [],
                '2s—0s' => [],
                '2s—0p' => [],
            ],
            'TA Local (2—1)' => [
                '2s—1' => [],
                '2s—1s' => [],
                '2p—1s' => [],

                '2s—1' => [],
                '2s—1p' => [],
                '2p—1p' => [],
            ],
            'TA Local (1—2)' => [
                '1s—2' => [],
                '1s—2s' => [],
                '1s—2p' => [],

                '1p—2' => [],
                '1p—2s' => [],
                '1p—2p' => [],
            ],
            'TA Mixed (1/2—3)' => [
                '1s—3' => [],
                '1s—3s' => [],
                '1s—3d' => [],
                '1s—3p' => [],
                
                '2s—3' => [],
                '2s—3s' => [],
                '2s—3d' => [],
                '2s—3p' => [],

                '1p—3' => [],
                '1p—3s' => [],
                '1p—3d' => [],
                '1p—3p' => [],

                '21—3' => [],
                '21—3s' => [],
                '21—3d' => [],
                '21—3p' => [],

                '2p—3' => [],
                '2p—3s' => [],
                '2p—3d' => [],
                '2p—3p' => [],
            ],
            'TA Mixed (3—1/2)' => [
                '3s—1s' => [],
                '3d—1s' => [],
                '3p—1s' => [],

                '3s—2s' => [],
                '3d—2s' => [],
                '3p—2s' => [],

                '3s—2s' => [],
                '3d—2s' => [],
                '3p—2s' => [],

                '3s—1p' => [],
                '3d—1p' => [],
                '3p—1p' => [],

                '3s—21' => [],
                '3d—21' => [],
                '3p—21' => [],

                '3s—2p' => [],
                '3d—2p' => [],
                '3p—2p' => [],
            ],
            'TA Non-local (direct)' => [
                '3s—3\'' => [],
                '3s—3\'s' => [],
                '3s—3\'p' => [],

                '3p—3\'' => [],
                '3p—3\'s' => [],
                '3p—3\'p' => [],
            ],
            'TA Non-local (inverse)' => [
                '3\'s—3s' => [],
                '3\'p—3s' => [],

                '3\'s—3p' => [],
                '3\'p—3p' => [],
            ],
            'TA Inanimate' => [
                // Error in sheet
            ],
            'TA Impersonal' => [
                'X—1' => [],
                'X—1s' => [],
                'X—2' => [],
                'X—2s' => [],
                'X—1p' => [],
                'X—21' => [],
                'X—2p' => [],
                'X—3' => [],
                'X—3s' => [],
                'X—3d' => [],
                'X—3p' => [],
                'X—3\'' => [],
                'X—3\'s' => [],
                'X—3\'d' => [],
                'X—3\'p' => [],
                'X—3\'\'' => [],
                'X—3\'\'s' => [],
                'X—3\'\'p' => [],
            ],
            'TA Obviative (mixed 1/2–3\')' => [],
            'TA Obviative (mixed 3\'–1/2)' => [],
            'TA Obviative (non-local 3\'\')' => [],

            'TA Other' => []
        ];

        foreach($forms as $form) {

            $formType = $form->formType;

            $data[$form->language->name][$formType->order->name][$formType->mode->name] = null;
            $rows[$formType->subClass][$formType->arguments][] = $form;
        }

        foreach($rows as $class => $argumentStructures) {
            $keys = array_keys($argumentStructures);
            $hasForms = false;

            for($i = 0; $i < count($argumentStructures); $i++) {
                $arguments = $keys[$i];

                if(count($rows[$class][$arguments]) > 0) {
                    $hasForms = true;
                    $model = $argumentDictionary->where('name', $arguments)->first();

                    if(!in_array($arguments{strlen($arguments) - 1}, ['s', 'd', 'p']) && $i < count($argumentStructures) - 1) {

                        $found = false;
                        $consecutive = 0;

                        $j = 1;

                        while($i + $j < count($keys) && preg_match("/".$arguments."[sdp]/", $keys[$i + $j])) {

                            if(count($rows[$class][$keys[$i + $j]]) > 0) {
                                $consecutive++;
                            }
                            $j++;
                        }

                        foreach(['s', 'd', 'p'] as $number) {
                            if(isset($rows[$class][$arguments.$number]) && count($rows[$class][$arguments.$number]) > 0) {
                                $found = true;

                                foreach($rows[$class][$arguments] as $moving) {

                                    $moving->diffClass = $arguments;

                                    if($consecutive > 1) {
                                        $moving->span = $consecutive;
                                    } else {
                                        $moving->distant = true;
                                    }

                                    $rows[$class][$arguments.$number][] = $moving;
                                }
                            }
                        }

                        if($found) {
                            unset($rows[$class][$arguments]);
                        }
                    }
                } elseif(count($argumentStructures[$arguments]) == 0) {
                    unset($rows[$class][$arguments]);
                }
            }

            if(!$hasForms) {
                unset($rows[$class]);
            }
        }

    	return view('paradigmTableRender', compact('data', 'rows'));
    }

    public function store(){
    	$this->validate(request(), [
    		'name' => 'required',
    		'description' => 'required'
    	]);

    	$mode = new Mode();
    	$mode->name = request('name');
    	$mode->description = request('description');
    	$mode->save();

    	return ['message' => "{$mode->id} successfully created."];
    }
    
    
}

class Cell {
    protected $array;
    protected $data;

    public function __construct()
    {
        $array = [];
        $data = null;
    }

    public function insert(Form $form, $fields, $data = null, $index = 0)
    {
        $this->data = $data;

        if($index < count($fields)) {
            $parsedFields = explode('.', $fields[$index]);
            $nextField = $form;

            foreach($parsedFields as $field) {
                $nextField = $nextField[$field];
            }

            if(!isset($this->array[$nextField->id])) {
                $this->array[$nextField->id] = new Cell();
            }

            $this->array[$nextField->id]->insert($form, $fields, $nextField, $index+1);
        }
    }

    public function search($index)
    {
        return $this->array[$index];
    }

    public function getData()
    {
        return $this->data;
    }
}
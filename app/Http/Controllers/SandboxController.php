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
                  ->where('primaryObject_id', null)
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
            ]
        ];

        foreach($forms as $form) {

            $formType = $form->formType;

            $data[$form->language->name][$formType->order->name][$formType->mode->name] = null;
            $rows[$formType->formClass->name][$formType->subject->name][] = $form;
        }

        foreach($rows as $class => $persons) {
            $keys = array_keys($persons);

            for($i = 0; $i < count($persons); $i++) {
                $subject = $keys[$i];

                if(count($rows[$class][$subject]) > 0) {
                    $model = $argumentDictionary->where('name', $subject)->first();

                    if(!in_array($subject{strlen($subject) - 1}, ['s', 'd', 'p']) && $i < count($persons) - 1) {

                        $found = false;
                        $consecutive = -1;

                        $j = 1;

                        while($i + $j < count($keys) - 1 && preg_match("/".$subject."[sdp]/", $keys[$i + $j])) {
                            $consecutive++;
                            $j++;
                        }

                        foreach(['s', 'd', 'p'] as $number) {
                            if(isset($rows[$class][$subject.$number]) && count($rows[$class][$subject.$number]) > 0) {
                                $found = true;

                                foreach($rows[$class][$subject] as $moving) {
                                    $moving->diffClass = $subject;

                                    if($consecutive > 1) {
                                        $moving->span = $consecutive;
                                    } else {
                                        $moving->distant = true;
                                    }

                                    $rows[$class][$subject.$number][] = $moving;
                                }
                            }
                        }

                        if($found) {
                            unset($rows[$class][$subject]);
                        }
                    }
                } elseif(count($persons[$subject]) == 0) {
                    unset($rows[$class][$subject]);
                }
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
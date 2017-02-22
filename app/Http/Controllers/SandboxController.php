<?php

namespace App\Http\Controllers;

use App\Form;
use App\Mode;
use JavaScript;
use App\Language;
use App\Http\Requests;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Config;
use Illuminate\Support\Facades\Artisan;
use Illuminate\Support\Facades\Storage;
use Illuminate\Contracts\Filesystem\FileNotFoundException;

class SandboxController extends Controller
{
    
    public function index(){
        $formType = factory(\App\FormType::class)->create([
            'isAbsolute' => 0
        ]);

        dd("Code is {$formType->isAbsolute}, status is {$formType->absoluteStatus}");

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
        ])->get();

        $argumentDictionary = \App\Argument::all();


        $data = [];
        $rows = Config::get('constants.paradigm_order');

        foreach($forms as $form) {

            $formType = $form->formType;

            $data[$form->language->name][$formType->order->name][$formType->mode->name][$formType->absoluteStatus][$formType->negativeStatus][$formType->diminutiveStatus] = null;
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
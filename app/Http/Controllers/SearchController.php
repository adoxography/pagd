<?php

namespace App\Http\Controllers;

use App\Form;
use App\Mode;
use App\Order;
use App\FormType;
use App\FormClass;
use App\Http\Requests;
use App\Search\SearchTable;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Config;

class SearchController extends Controller
{
    public function index()
    {
        return view('search.index');
    }

    public function form(Request $request)
    {
        $languages        = $request->languages;
        $classes          = $request->classes;
        $primaryObjects   = $request->primaryObjects;
        $secondaryObjects = $request->secondaryObjects;
        $orders           = $request->orders;
        $modes            = $request->modes;
        $searchAll        = $request->searchAll;
        $subjects         = $request->subjects;

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

        // Limit the forms by specifying which form types should be displayed
        for ($i = 0; $i < count($classes); $i++) {
            if($i == 0) {
                $query->whereHas('formType', function ($query) use ($i, $classes, $subjects, $orders, $modes, $primaryObjects, $secondaryObjects) {
                    $query->where('class_id', $classes[$i])
                          ->where('subject_id', $subjects[$i])
                          ->where('order_id', $orders[$i])
                          ->where('mode_id', $modes[$i]);

                    if ($primaryObjects[$i] > 0) {
                        $query->where('primaryObject_id', $primaryObjects[$i]);
                    }

                    if ($secondaryObjects[$i] > 0) {
                        $query->where('secondaryObject_id', $secondaryObjects[$i]);
                    }
                });
            } else {
                $query->orWhereHas('formType', function ($query) use ($i, $classes, $subjects, $orders, $modes, $primaryObjects, $secondaryObjects) {
                    $query->where('class_id', $classes[$i])
                          ->where('subject_id', $subjects[$i])
                          ->where('order_id', $orders[$i])
                          ->where('mode_id', $modes[$i]);

                    if ($primaryObjects[$i] > 0) {
                        $query->where('primaryObject_id', $primaryObjects[$i]);
                    }

                    if ($secondaryObjects[$i] > 0) {
                        $query->where('secondaryObject_id', $secondaryObjects[$i]);
                    }
                });
            }
        }

        dd($query->get());
    }

    public function paradigm(Request $request)
    {
        $forms = $this->search($request);
        $showMorphology = $request->showMorphology;

        $argumentDictionary = \App\Argument::all();
        $data = $this->loadHeaders($forms);
        $rows = $this->loadRows($forms);

        foreach($rows as $class => $argumentStructures) {
            $keys = array_keys($argumentStructures);
            $hasForms = false;

            for($i = 0; $i < count($argumentStructures); $i++) {
                $arguments = $keys[$i];

                if(count($rows[$class][$arguments]) > 0) {
                    $hasForms = true;
                    $model = $argumentDictionary->where('name', $arguments)->first();

                    // If the there is an argument without a number
                    if($this->hasNumberlessArgument($arguments) && $i < count($argumentStructures) - 1) {

                        $found = false;
                        $consecutive = 0;

                        $j = 1;

                        $possibleMatches = $this->generatePossibleMatches($arguments);

                        while($i + $j < count($keys) && in_array($keys[$i + $j], $possibleMatches)) {

                            if(count($rows[$class][$keys[$i + $j]]) > 0) {
                                $consecutive++;
                            }
                            $j++;
                        }

                        foreach($possibleMatches as $possibleMatch) {
                            if(isset($rows[$class][$possibleMatch]) && count($rows[$class][$possibleMatch]) > 0) {
                                $found = true;

                                foreach($rows[$class][$arguments] as $moving) {

                                    $moving->diffClass = $arguments;

                                    if($consecutive > 1) {
                                        $moving->span = $consecutive;
                                    } else {
                                        $moving->distant = true;
                                    }

                                    $rows[$class][$possibleMatch][] = $moving;
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

        return view('search.results.paradigm', compact('data', 'rows', 'showMorphology'));
    }

    protected function filterSubqueryUsingList($query, $subfield, $list, $field)
    {
        if ($list) {
            $query->whereHas($subfield, function ($query) use ($list, $field) {
                $query->whereIn($field, $list);
            });
        }
    }

    public function hasNumberlessArgument($args)
    {
        $arguments = preg_split("/[—+]/u", $args);
        $found = false;

        for($i = 0; $i < count($arguments) && !$found; $i++) {
            $found = $this->isNumberless($arguments[$i]);
        }

        return $found;
    }

    protected function isNumberless($arg)
    {
        return !in_array($arg{strlen($arg) - 1}, ['s', 'd', 'p']);
    }

    protected function generatePossibleMatches($args)
    {
        $options = [];
        $arguments = preg_split("/[—+]/u", $args);

        for($i = 0; $i < count($arguments); $i++) {
            if($this->isNumberless($arguments[$i])) {
                foreach(['s', 'd', 'p'] as $number) {
                    $clone = $arguments;
                    $clone[$i] .= $number;

                    $options[] = $this->repair($clone);
                }
            }
        }

        return $options;
    }

    protected function repair($tokens)
    {
        $output = $tokens[0];
        if(isset($tokens[1])) {
            $output .= "—".$tokens[1];
        }
        if(isset($tokens[2])) { // DOESN'T ACCOUNT FOR AI + 0
            $output .= "+".$tokens[2];
        }
        return $output;
    }

    protected function search($request)
    {
        $languages   = $request->languages;
        $modeSelect  = $request->modeSelect;
        $modes       = $request->modes;
        $orders      = $request->orders;
        $classes     = $request->classes;
        $affirmative = $request->affirmative;
        $negative    = $request->negative;
        $diminutive  = $request->diminutive;

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

        $query->whereIn('language_id', $languages);

        switch ($modeSelect) {
            case 'indicativeOnly':
                $query->whereHas('formType', function ($query) {
                    $query->where('mode_id', 1);
                });
                break;
            case 'selectModes':
                $this->filterSubqueryUsingList($query, 'formType', $modes, 'mode_id');
                break;
            default:
                break;
        }

        $this->filterSubqueryUsingList($query, 'formType', $classes, 'class_id');
        $this->filterSubqueryUsingList($query, 'formType', $orders, 'order_id');

        if($diminutive) {
            $query->whereHas('formType', function ($query) {
                $query->where('isDiminutive', 1);
            });
        }
        else {
            $query->whereHas('formType', function ($query) {
                $query->where('isDiminutive', 0);
            });
        }

        if($negative && !$affirmative) {
            $query->whereHas('formType', function ($query) {
                $query->where('isNegative', 1);
            });
        }

        if(!$negative && $affirmative) {
            $query->whereHas('formType', function ($query) {
                $query->where('isNegative', 0);
            });
        }

        return $query->get();
    }

    protected function loadHeaders($forms) {
        $output = [];

        foreach($forms as $form) {
            $formType = $form->formType;

            $output[$form->language->name][$formType->order->name][$formType->mode->name][$formType->absoluteStatus][$formType->negativeStatus][$formType->diminutiveStatus] = null;
        }

        return $output;
    }

    protected function loadRows($forms)
    {
        $output = Config::get('constants.paradigm_order');
        foreach($forms as $form) {
            $formType = $form->formType;
            $output[$formType->subClass][$formType->arguments][] = $form;
        }
        return $output;
    }
}

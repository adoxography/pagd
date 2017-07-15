<?php

namespace Algling\Verbals\Http\Controllers;

use App\Language;
use Illuminate\Http\Request;
use Algling\Verbals\Paradigm;
use Algling\Verbals\Models\Gap;
use Algling\Verbals\Models\Form;
use Algling\Verbals\Models\Mode;
use Algling\Verbals\Models\Order;
use Illuminate\Support\Facades\DB;
use Algling\Verbals\Models\Argument;
use App\Http\Controllers\Controller;
use Algling\Verbals\Models\VerbClass;

class SearchController extends Controller
{
    private $languages;
    private $modeSelect;
    private $modes;
    private $orders;
    private $classes;
    private $subclasses;
    private $affirmative;
    private $negative;
    private $diminutive;

    public function paradigm()
    {
        $orders    = Order::all();
        $languages = Language::select('name', 'id')->orderBy('name')->whereHas('forms', function($query) {
            $query->where('structure_type', 'verbStructures');
        })->get();
        $modes     = Mode::all();

        if(request()->preset){
            $preset = unserialize(request()->preset);
        }

        return view('verb::search.paradigm', compact('orders', 'languages', 'modes', 'preset'));
    }

    public function form()
    {
        $languages = Language::select('name', 'id')->orderBy('name')->whereHas('forms', function($query) {
            $query->where('structure_type', 'verbStructures');
        })->get();
        $arguments = Argument::all();
        $classes   = VerbClass::all();
        $modes     = Mode::all();
        $orders    = Order::all();

        return view('verb::search.form', compact('languages', 'arguments', 'classes', 'modes', 'orders'));
    }

    public function paradigmResults(Request $request)
    {
        $forms = $this->paradigmSearch($request);
        $sources = $forms->pluck('sources')
            ->flatten(1)
            ->unique('id')
            ->sortBy('disambiguator')
            ->sortByDesc('year')
            ->sortBy('name');
        $showMorphology = $request->showMorphology;

        $search = new Paradigm($forms);
        $data = $search->getHeaders();
        $rows = $search->getRows();

        $params = serialize($request->all());

        return view('verb::search.results.paradigm', compact('data', 'rows', 'showMorphology', 'search', 'params', 'sources'));
    }

    public function formResults(Request $request)
    {
        $languages = [];
        $classes          = $this->getModel($request->classes, VerbClass::class);
        $subclasses       = $request->subclasses;
        $primaryObjects   = $this->getModel($request->primaryObjects, Argument::class);
        $secondaryObjects = $this->getModel($request->secondaryObjects, Argument::class);
        $orders           = $this->getModel($request->orders, Order::class);
        $modes            = $this->getModel($request->modes, Mode::class);
        $searchAll        = $request->searchAll === "true";
        $subjects         = $this->getModel($request->subjects, Argument::class);
        $negatives        = $request->isNegative;
        $diminutives      = $request->isDiminutive;

        if($searchAll) {
            $languages = Language::select(['Languages.name', 'Languages.id', 'Languages.group_id'])
                ->join('Groups', 'Groups.id', '=', 'Languages.group_id')
                ->orderBy('Groups.position', 'asc')
                ->orderBy('Languages.position', 'asc')
                ->get();
        } else {
            $languageIds = array_filter($request->languages, function($language) {
                return is_numeric($language);
            });

            $languages = Language::whereIn('id', $languageIds)->get();
        }

        $structures = $this->generateStructures($subjects, $primaryObjects, $secondaryObjects, $classes, $orders, $modes, $negatives, $diminutives);


        $query = Form::with([
            'language.group',
            'structure.mode',
            'structure.verbClass',
            'structure.order',
            'structure.subject',
            'structure.primaryObject',
            'structure.secondaryObject',
            'morphemes' => function ($query) {
                $query->orderBy('position');
            },
            'morphemes.glosses',
            'morphemes.slot'
        ]);

        if(!$searchAll) {
            $query->whereIn('language_id', $languages->pluck('id'));
        }

        // Limit the forms by specifying which form types should be displayed
        for ($i = 0; $i < count($classes); $i++) {
            if($i == 0) {
                $query->whereHas('structure', function ($subquery) use ($i, $classes, $subclasses, $subjects, $orders, $modes, $primaryObjects, $secondaryObjects, $negatives, $diminutives) {
                    $subquery->where('class_id', $classes[$i]->id)
                          ->where('order_id', $orders[$i]->id)
                          ->where('mode_id', $modes[$i]->id)
                          ->where('isNegative', isset($negatives[$i]) ? 1 : 0)
                          ->where('isDiminutive', isset($diminutives[$i]) ? 1 : 0)
                          ->whereHas('subject', function($subsubquery) use ($i, $subjects) {
                            $subsubquery->where('person', $subjects[$i]->person)
                                     ->where('obviativeCode', $subjects[$i]->obviativeCode);

                            if(isset($subjects[$i]->number)) {
                                $subsubquery->where('number', $subjects[$i]->number);
                            }
                          });

                    if (isset($primaryObjects[$i])) {
                        $subquery->whereHas('primaryObject', function($subsubquery) use($i, $primaryObjects) {
                            $subsubquery->where('person', $primaryObjects[$i]->person)
                                     ->where('obviativeCode', $primaryObjects[$i]->obviativeCode);

                            if(isset($primaryObjects[$i]->number)) {
                                $subsubquery->where('number', $primaryObjects[$i]->number);
                            }
                        });
                    } else {
                        $subquery->whereNull('primaryObject_id');
                    }

                    if (isset($secondaryObjects[$i])) {
                        $subquery->whereHas('secondaryObject', function($subsubquery) use($i, $secondaryObjects) {
                            $subsubquery->where('person', $secondaryObjects[$i]->person)
                                     ->where('obviativeCode', $secondaryObjects[$i]->obviativeCode);

                            if(isset($secondaryObjects[$i]->number)) {
                                $subsubquery->where('number', $secondaryObjects[$i]->number);
                            }
                        });
                    } else {
                        $subquery->whereNull('secondaryObject_id');
                    }
                });
            } else {
                $query->orWhereHas('structure', function ($query) use ($i, $classes, $subclasses, $subjects, $orders, $modes, $primaryObjects, $secondaryObjects, $negatives, $diminutives) {
                    $query->where('class_id', $classes[$i]->id)
                          ->where('order_id', $orders[$i]->id)
                          ->where('mode_id', $modes[$i]->id)
                          ->where('isNegative', isset($negatives[$i]) ? 1 : 0)
                          ->where('isDiminutive', isset($diminutives[$i]) ? 1 : 0)
                          ->whereHas('subject', function($subquery) use ($i, $subjects) {
                            $subquery->where('person', $subjects[$i]->person)
                                     ->where('obviativeCode', $subjects[$i]->obviativeCode);

                            if(isset($subjects[$i]->number)) {
                                $subquery->where('number', $subjects[$i]->number);
                            }
                          });

                    if (isset($primaryObjects[$i])) {
                        $query->whereHas('primaryObject', function($subquery) use($i, $primaryObjects) {
                            $subquery->where('person', $primaryObjects[$i]->person)
                                     ->where('obviativeCode', $primaryObjects[$i]->obviativeCode);

                            if(isset($primaryObjects[$i]->number)) {
                                $subquery->where('number', $subjects[$i]->number);
                            }
                        });
                    } else {
                        $query->whereNull('primaryObject_id');
                    }

                    if (isset($secondaryObjects[$i])) {
                        $query->whereHas('secondaryObject', function($subquery) use($i, $secondaryObjects) {
                            $subquery->where('person', $secondaryObjects[$i]->person)
                                     ->where('obviativeCode', $secondaryObjects[$i]->obviativeCode);

                            if(isset($secondaryObjects[$i]->number)) {
                                $subquery->where('number', $subjects[$i]->number);
                            }
                        });
                    } else {
                        $query->whereNull('secondaryObject_id');
                    }
                });
            }
        }

        $results = $query->get();

        return view('verb::search.results.form', compact('results', 'languages', 'structures'));
    }

    protected function getModel($array, $class)
    {
        $ids = array_filter($array, 'is_numeric');

        return $class::whereIn('id', $ids)->get();
    }

    protected function generateStructures($subjects, $primaryObjects, $secondaryObjects, $classes, $orders, $modes, $negatives, $diminutives)
    {
        $output = [];

        for($i = 0; $i < count($subjects); $i++) {
            $output[] = [
                'subject' => $subjects[$i],
                'primaryObject' => isset($primaryObjects[$i]) ? $primaryObjects[$i] : null,
                'secondaryObject' => isset($secondaryObjects[$i]) ? $secondaryObjects[$i] : null,
                'class' => $classes[$i],
                'order' => $orders[$i],
                'mode' => $modes[$i],
                'negative' => isset($negatives[$i]) ? 1 : 0,
                'diminutive' => isset($diminutives[$i]) ? 1 : 0
            ];
        }

        return $output;
    }

    protected function filterSubqueryUsingList($query, $subfield, $list, $field)
    {
        if ($list) {
            $query->whereHas($subfield, function ($query) use ($list, $field) {
                $query->whereIn($field, $list);
            }, '>', '0');
        }
    }

    protected function filterSubqueryUsingFuzzyList($query, $subfield, $list, $field)
    {
        if($list) {
            $query->whereHas($subfield, function($query) use ($list, $field) {
                $query->whereNull($field);

                foreach($list as $item) {
                    $query->orWhere(DB::raw('BINARY `'.$field.'`'), 'LIKE', "%$item%");
                }
            }, '>', '0');
        }
    }

    protected function paradigmSearch($request)
    {
        $this->languages   = $request->languages;
        $this->modeSelect  = $request->modeSelect;
        $this->modes       = $request->modes;
        $this->orders      = $request->orders;
        $this->classes     = $request->classes;
        $this->subclasses  = $request->subclasses;
        $this->affirmative = $request->affirmative;
        $this->negative    = $request->negative;
        $this->nonDiminutive = $request->nonDiminutive;
        $this->diminutive  = $request->diminutive;

        if($this->modes && in_array(1, $this->modes)) {
            $this->modes[] = 17;
        }

        $formQuery = Form::with([
            'language',
            'language.group',
            'structure',
            'structure.mode',
            'structure.verbClass',
            'structure.order',
            'structure.subject',
            'structure.primaryObject',
            'structure.secondaryObject',
            'morphemes' => function ($query) {
                $query->orderBy('position');
            },
            'morphemes.glosses',
            'morphemes.slot',
            'sources'
        ]);

        $gapQuery = Gap::with([
            'language',
            'language.group',
            'structure',
            'structure.mode',
            'structure.verbClass',
            'structure.order',
            'structure.subject',
            'structure.primaryObject',
            'structure.secondaryObject'
        ]);

        $this->order($formQuery);
        $this->order($gapQuery);

        $this->filter($formQuery);
        $this->filter($gapQuery);

        return $formQuery->get(['Word_Forms.*'])->merge($gapQuery->get(['Word_Gaps.*']));
    }

    protected function order(&$query)
    {
        $query->join('Verb_Structures as Structures', 'Structures.id', '=', 'structure_id')
        ->join('Languages', 'Languages.id', '=', 'language_id')
        ->join('Groups', 'Groups.id', '=', 'Languages.group_id')
        ->join('Verb_Orders as Orders', 'Orders.id', '=', 'Structures.order_id')
        ->orderBy('Groups.position', 'asc')
        ->orderBy('Languages.position', 'asc')
        ->orderBy('Orders.position', 'asc')
        ->orderByRaw('-Structures.isAbsolute ASC')
        ->orderBy('Structures.isNegative', 'asc')
        ->orderBy('Structures.isDiminutive', 'asc');     
    }

    protected function filter(&$query)
    {
        $query->whereIn('language_id', $this->languages);

        switch ($this->modeSelect) {
            case 'indicativeOnly':
                $query->whereHas('structure', function ($query) {
                    $query->whereIn('mode_id', [1, 17]);
                });
                break;
            case 'selectModes':
                $this->filterSubqueryUsingList($query, 'structure', $this->modes, 'mode_id');
                break;
            default:
                break;
        }

        $this->filterSubqueryUsingList($query, 'structure', $this->classes, 'class_id');
        $this->filterSubqueryUsingFuzzyList($query, 'structure', $this->subclasses, 'subclass');
        $this->filterSubqueryUsingList($query, 'structure', $this->orders, 'order_id');

        if($this->diminutive && !$this->nonDiminutive) {
            $query->whereHas('structure', function ($query) {
                $query->where('isDiminutive', 1);
            });
        } elseif(!$this->diminutive && $this->nonDiminutive) {
            $query->whereHas('structure', function ($query) {
                $query->where('isDiminutive', 0);
            });
        }

        if($this->negative && !$this->affirmative) {
            $query->whereHas('structure', function ($query) {
                $query->where('isNegative', 1);
            });
        } elseif(!$this->negative && $this->affirmative) {
            $query->whereHas('structure', function ($query) {
                $query->where('isNegative', 0);
            });
        }
    }
}

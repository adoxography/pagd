<?php

namespace App\Http\Controllers;

use App\Language;
use App\Paradigm;
use App\Http\Requests;
use App\Search\SearchTable;
use Illuminate\Http\Request;
use Algling\Words\Models\Gap;
use Algling\Verbals\Models\Form;
use Algling\Verbals\Models\Mode;
use Algling\Verbals\Models\Order;
use Illuminate\Support\Facades\DB;
use Algling\Verbals\Models\Argument;
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

    public function index()
    {
        $searchType = request()->searchType;
        $preset = null;

        if(request()->preset) {
            $preset = str_replace(' ', '\u0020', json_encode(unserialize(request()->preset)));
        }

        // dd($preset);
        return view('search.index', compact('searchType', 'preset'));
    }

    protected function getModel($array, $class)
    {
        $output = [];

        foreach($array as $id) {
            if($id > 0) {
                $output[] = $class::find($id);
            } else {
                $output[] = null;
            }
        }

        return $output;
    }

    protected function generateStructures($subjects, $primaryObjects, $secondaryObjects, $classes, $orders, $modes, $negatives, $diminutives)
    {
        $output = [];

        for($i = 0; $i < count($subjects); $i++) {
            $output[] = [
                'subject' => $subjects[$i],
                'primaryObject' => $primaryObjects[$i],
                'secondaryObject' => $secondaryObjects[$i],
                'class' => $classes[$i],
                'order' => $orders[$i],
                'mode' => $modes[$i],
                'negative' => isset($negatives[$i]) ? 1 : 0,
                'diminutive' => isset($diminutives[$i]) ? 1 : 0
            ];
        }

        return $output;
    }

    public function form(Request $request)
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
            for($i = 0; $i < count($request->languages); $i+=2) {
                $languages[] = Language::find($request->languages[$i + 1]);
            }
        }

        $structures = $this->generateStructures($subjects, $primaryObjects, $secondaryObjects, $classes, $orders, $modes, $negatives, $diminutives);


        $query = Form::with([
            'language.group',
            'formType.mode',
            'formType.VerbClass',
            'formType.order',
            'formType.subject',
            'formType.primaryObject',
            'formType.secondaryObject',
            'morphemes' => function ($query) {
                $query->orderBy('position');
            },
            'morphemes.glosses',
            'morphemes.slot'
        ]);

        if(!$searchAll) {
            foreach($languages as $language) {
                $query->where('language_id', $language->id);
            }
        }

        // Limit the forms by specifying which form types should be displayed
        for ($i = 0; $i < count($classes); $i++) {
            if($i == 0) {
                $query->whereHas('formType', function ($subquery) use ($i, $classes, $subclasses, $subjects, $orders, $modes, $primaryObjects, $secondaryObjects, $negatives, $diminutives) {
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
                $query->orWhereHas('formType', function ($query) use ($i, $classes, $subclasses, $subjects, $orders, $modes, $primaryObjects, $secondaryObjects, $negatives, $diminutives) {
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

        return view('search.results.form', compact('results', 'languages', 'structures'));
    }

    public function general()
    {
        $search;
        $type = request()->type;
        $lookup = request()->lookup;

        $modelName = "\\App\\$type";
        $model = new $modelName();
        $results = $model->search($lookup)->get();

        $table = strtolower($model->table);

        return view('search/general-results', compact('table', 'results'));
    }

    public function paradigm(Request $request)
    {
        $forms = $this->paradigmSearch($request);
        $showMorphology = $request->showMorphology;

        $search = new Paradigm($forms);
        $data = $search->getHeaders();
        $rows = $search->getRows();

        $params = serialize($request->all());

        return view('search.results.paradigm', compact('data', 'rows', 'showMorphology', 'search', 'params'));
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
            'morphemes.slot'
        ]);

        $emptyFormQuery = Gap::with([
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
        $this->order($emptyFormQuery);

        $this->filter($formQuery);
        $this->filter($emptyFormQuery);

        return $formQuery->get(['Word_Forms.*'])->merge($emptyFormQuery->get(['Word_Gaps.*']));
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
                    $query->where('mode_id', 1);
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
        }

        if(!$this->diminutive && $this->nonDiminutive) {
            $query->whereHas('structure', function ($query) {
                $query->where('isDiminutive', 0);
            });
        }

        if($this->negative && !$this->affirmative) {
            $query->whereHas('structure', function ($query) {
                $query->where('isNegative', 1);
            });
        }

        if(!$this->negative && $this->affirmative) {
            $query->whereHas('structure', function ($query) {
                $query->where('isNegative', 0);
            });
        }
    }
}

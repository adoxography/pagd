<?php

namespace App\Http\Controllers;

use App\Form;
use App\Mode;
use App\Order;
use App\FormType;
use App\EmptyForm;
use App\FormClass;
use App\Http\Requests;
use App\Search\SearchTable;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

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

    protected function generateStructures($subjects, $primaryObjects, $secondaryObjects, $classes, $orders, $modes)
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
            ];
        }

        return $output;
    }

    public function form(Request $request)
    {
        $languages        = $this->getModel($request->languages, \App\Language::class);
        $classes          = $this->getModel($request->classes, \App\FormClass::class);
        $subclasses       = $request->subclasses;
        $primaryObjects   = $this->getModel($request->primaryObjects, \App\Argument::class);
        $secondaryObjects = $this->getModel($request->secondaryObjects, \App\Argument::class);
        $orders           = $this->getModel($request->orders, \App\Order::class);
        $modes            = $this->getModel($request->modes, \App\Mode::class);
        $searchAll        = $request->searchAll;
        $subjects         = $this->getModel($request->subjects, \App\Argument::class);

        if($searchAll) {
            $languages = \App\Language::select(['name', 'id'])->get();
        } else {

        }

        $structures = $this->generateStructures($subjects, $primaryObjects, $secondaryObjects, $classes, $orders, $modes);


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
                $query->whereHas('formType', function ($query) use ($i, $classes, $subclasses, $subjects, $orders, $modes, $primaryObjects, $secondaryObjects) {
                    $query->where('class_id', $classes[$i]->id)
                          ->where('subject_id', $subjects[$i]->id)
                          ->where('order_id', $orders[$i]->id)
                          ->where('mode_id', $modes[$i]->id);

                    if ($primaryObjects[$i]) {
                        $query->where('primaryObject_id', $primaryObjects[$i]->id);
                    }

                    if ($secondaryObjects[$i]) {
                        $query->where('secondaryObject_id', $secondaryObjects[$i]->id);
                    }
                });
            } else {
                $query->orWhereHas('formType', function ($query) use ($i, $classes, $subclasses, $subjects, $orders, $modes, $primaryObjects, $secondaryObjects) {
                    $query->where('class_id', $classes[$i]->id)
                          ->where('subject_id', $subjects[$i]->id)
                          ->where('order_id', $orders[$i]->id)
                          ->where('mode_id', $modes[$i]->id);

                    if ($primaryObjects[$i]) {
                        $query->where('primaryObject_id', $primaryObjects[$i]->id);
                    }

                    if ($secondaryObjects[$i]) {
                        $query->where('secondaryObject_id', $secondaryObjects[$i]->id);
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

        $search = new \App\Paradigm($forms);
        $data = $search->getHeaders();
        $rows = $search->getRows();

        $params = serialize($request->all());

        return view('search.results.paradigm', compact('data', 'rows', 'showMorphology', 'search', 'params'));
    }

    protected function filterSubqueryUsingList($query, $subfield, $list, $field)
    {
        if ($list) {
            $query->whereHas($subfield, function ($query) use ($list, $field) {
                $query->WhereIn($field, $list);
            });
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
            });
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
        $this->diminutive  = $request->diminutive;

        // dd($this->subclasses);

        $formQuery = Form::with([
            'language',
            'language.group',
            'formType',
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

        $emptyFormQuery = EmptyForm::with([
            'language',
            'language.group',
            'formType',
            'formType.mode',
            'formType.formClass',
            'formType.order',
            'formType.subject',
            'formType.primaryObject',
            'formType.secondaryObject'
        ]);

        $this->order($formQuery);
        $this->order($emptyFormQuery);

        $this->filter($formQuery);
        $this->filter($emptyFormQuery);

        return $formQuery->get(['Forms.*'])->merge($emptyFormQuery->get(['EmptyForms.*']));
    }

    protected function order(&$query)
    {
        $query->join('FormTypes', 'FormTypes.id', '=', 'formType_id')
        ->join('Languages', 'Languages.id', '=', 'language_id')
        ->join('Groups', 'Groups.id', '=', 'Languages.group_id')
        ->join('Orders', 'Orders.id', '=', 'FormTypes.order_id')
        ->orderBy('Groups.position', 'asc')
        ->orderBy('Languages.position', 'asc')
        ->orderBy('Orders.position', 'asc')
        ->orderByRaw('-FormTypes.isAbsolute ASC')
        ->orderBy('FormTypes.isNegative', 'asc')
        ->orderBy('FormTypes.isDiminutive', 'asc');     
    }

    protected function filter(&$query)
    {
        $query->whereIn('language_id', $this->languages);

        switch ($this->modeSelect) {
            case 'indicativeOnly':
                $query->whereHas('formType', function ($query) {
                    $query->where('mode_id', 1);
                });
                break;
            case 'selectModes':
                $this->filterSubqueryUsingList($query, 'formType', $this->modes, 'mode_id');
                break;
            default:
                break;
        }

        $this->filterSubqueryUsingList($query, 'formType', $this->classes, 'class_id');
        $this->filterSubqueryUsingFuzzyList($query, 'formType', $this->subclasses, 'subclass');
        $this->filterSubqueryUsingList($query, 'formType', $this->orders, 'order_id');

        if($this->diminutive) {
            $query->whereHas('formType', function ($query) {
                $query->where('isDiminutive', 1);
            });
        }
        else {
            $query->whereHas('formType', function ($query) {
                $query->where('isDiminutive', 0);
            });
        }

        if($this->negative && !$this->affirmative) {
            $query->whereHas('formType', function ($query) {
                $query->where('isNegative', 1);
            });
        }

        if(!$this->negative && $this->affirmative) {
            $query->whereHas('formType', function ($query) {
                $query->where('isNegative', 0);
            });
        }
    }
}

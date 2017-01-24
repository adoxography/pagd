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

class SearchController extends Controller
{
    public function index()
    {
        return view('search.index');
    }

    public function search(Request $request)
    {
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

        dd($forms);

        $result = new SearchTable($forms);
        return view('search.result', compact('result'));
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
        $languages  = $request->languages;
        $modeSelect = $request->modeSelect;
        $modes      = $request->modes;
        $orders     = $request->orders;
        $classes    = $request->classes;
        $negative   = $request->includeNegative;
        $diminutive = $request->includeDiminutive;

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

        $this->filterQueryUsingList($query, $languages, 'language_id');

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

        $this->filterSubqueryIfIsNotSet($query, 'formType', $negative, 'isNegative');
        $this->filterSubqueryIfIsNotSet($query, 'formType', $diminutive, 'isDiminutive');

        $result = new SearchTable($query->get());

        return view('search.result', compact('result'));
    }

    protected function filterQueryUsingList($query, $list, $field)
    {
        $firstTime = true;
        foreach ($list as $item) {
            if ($firstTime) {
                $firstTime = false;
                $query->where($field, $item);
            } else {
                $query->orWhere($field, $item);
            }
        }
    }

    protected function filterSubqueryUsingList($query, $subfield, $list, $field)
    {
        if ($list) {
            $query->whereHas($subfield, function ($query) use ($list, $field) {
                $this->filterQueryUsingList($query, $list, $field);
            });
        }
    }

    protected function filterSubqueryIfIsNotSet($query, $subfield, $value, $field)
    {
        if (!isset($value)) {
            $query->whereHas($subfield, function ($query) {
                $query->where($field, false);
            });
        }
    }
}

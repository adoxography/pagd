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

}

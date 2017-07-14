<?php

namespace Algling\Nominals\Http\Controllers;

use Algling\Nominals\Models\Form;
use Algling\Nominals\Models\ParadigmType;
use App\Http\Controllers\Controller;
use App\Language;

class SearchController extends Controller
{
    public function paradigm()
    {
        $languages = Language::select('name', 'id')->orderBy('name')->get();
        $types = ParadigmType::select('name', 'id')->orderBy('id')->get();

        return view('nom::search.paradigm', compact('languages', 'types'));
    }

    public function paradigmResults()
    {
        $typeIds = request()->types;
        $languageIds = array_filter(request()->languages, function($val) {
            return is_numeric($val);
        });
        $types = ParadigmType::whereIn('id', $typeIds)->get();
        $languages;

        if (count(request()->languages) > 0) {
            $languages = Language::whereIn('id', $languageIds)->get();
        } else {
            $languages = Language::all();
        }

        $forms = Form::whereIn('language_id', $languageIds)->whereHas('structure', function($query) use ($typeIds) {
            $query->whereHas('paradigm', function($query) use ($typeIds) {
                $query->whereIn('paradigmType_id', $typeIds);
            });
        })->get();

        return view('nom::search.results.paradigm', compact('languages', 'types', 'forms'));
    }
}

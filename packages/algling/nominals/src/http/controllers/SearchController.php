<?php

namespace Algling\Nominals\Http\Controllers;

use Algling\Nominals\Models\Form;
use Algling\Nominals\Models\ParadigmType;
use Algling\Nominals\Paradigm;
use App\Http\Controllers\Controller;
use App\Language;

class SearchController extends Controller
{
    public function paradigm()
    {
        $languages = Language::select('name', 'id')
            ->whereHas('forms', function ($query) {
                $query->where('structure_type', 'nominalStructures');
            })->orderBy('name')->get();
        $types = ParadigmType::select('name', 'id')->orderBy('id')->get();

        return view('nom::search.paradigm', compact('languages', 'types'));
    }

    public function paradigmResults()
    {
        $typeIds = request()->types;
        $languageIds = array_filter(request()->languages, function($val) {
            return is_numeric($val);
        });
        $showMorphology = false;
        $languages;

        if (count(request()->languages) > 0) {
            $languages = Language::whereIn('id', $languageIds)->get();
        } else {
            $languages = Language::all();
        }

        $dictionary = [
            '1', '1s', '2', '2s', '1p', '21', '2p', '3s', '3p', '3\'s', '3\'p', '0s', '0p', 'LOC', ''
        ];

        $forms = Form::with([
                'structure',
                'structure.nominalFeature',
                'structure.pronominalFeature',
                'structure.paradigm',
                'structure.paradigm.paradigmType',
                'morphemes',
                'morphemes.glosses',
                'morphemes.slot'
            ])->whereIn('language_id', $languageIds)
            ->whereHas('structure', function($query) use ($typeIds) {
                $query->with('paradigm')
                    ->whereHas('paradigm', function($query) use ($typeIds) {
                        $query->whereIn('paradigmType_id', $typeIds);
                    });
            })->get();

        $thirdPersonForms = $forms->filter(function($form) {
            return !$form->structure->paradigm->type->hasPronominalFeature;
        });

        $personalPronouns = $forms->filter(function($form) {
            return !$form->structure->paradigm->type->hasNominalFeature;
        });

        $possessedForms = $forms->filter(function($form) {
            return $form->structure->paradigm->type->hasNominalFeature && $form->structure->paradigm->type->hasPronominalFeature;
        });

        $paradigms = [
            'Third person forms' => new Paradigm($thirdPersonForms),
            'Person pronouns' => new Paradigm($personalPronouns),
            'Possessed forms' => new Paradigm($possessedForms)
        ];

        return view('nom::search.results.paradigm', compact('languages', 'paradigms', 'showMorphology'));
    }
}

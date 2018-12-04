<?php

namespace App\Http\Controllers\Nominals;

use App\Models\Nominals\Form;
use App\Models\Nominals\ParadigmType;
use App\Models\Nominals\ParadigmTable;
use App\Http\Controllers\Controller;
use App\Models\Language;

class SearchController extends Controller
{
    public function paradigm()
    {
        if (request()->preset) {
            $preset = unserialize(request()->preset);
        }

        $languages = Language::select('name', 'id')
            ->whereHas('forms', function ($query) {
                $query->where('structure_type', 'nominalStructures');
            })->orderBy('name')->get();
        $types = ParadigmType::select('name', 'id')->orderBy('id')->get();

        return view('nominals.search.paradigm', compact('languages', 'types', 'preset'));
    }

    public function paradigmResults()
    {
        $typeIds = request()->types;
        $languageIds = $this->getLanguageIds();

        $showMorphology = false;
        $types = $this->queryTypes($typeIds);
        $languages = $this->queryLanguages($languageIds);
        $paradigms = [];

        $forms = $this->queryForms($languageIds, $typeIds);
        $resultsFound = $forms->count() > 0;

        if ($resultsFound) {
            if ($types->contains(function ($type) {
                return !$type->hasPronominalFeature;
            })) {
                $thirdPersonForms = $forms->filter(function ($form) {
                    return !$form->structure->paradigm->type->hasPronominalFeature;
                });

                $paradigms['Third person forms'] = new ParadigmTable($thirdPersonForms);
            }

            if ($types->contains(function ($type) {
                return !$type->hasNominalFeature;
            })) {
                $personalPronouns = $forms->filter(function ($form) {
                    return !$form->structure->paradigm->type->hasNominalFeature;
                });

                $paradigms['Personal pronouns'] = new ParadigmTable($personalPronouns);
            }

            if ($types->contains(function ($type) {
                return $type->hasNominalFeature && $type->hasPronominalFeature;
            })) {
                $possessedNouns = $forms->filter(function ($form) {
                    return $form->structure->paradigm->type->hasNominalFeature && $form->structure->paradigm->type->hasPronominalFeature;
                });

                $paradigms['Possessed nouns'] = new ParadigmTable($possessedNouns);
            }
        }

        $params = serialize(request()->except('_token'));

        return view('nominals.search.results.paradigm', compact('languages', 'paradigms', 'resultsFound', 'showMorphology', 'params'));
    }

    protected function getLanguageIds()
    {
        /** @noinspection Annotator */
        $ids = array_filter(request()->languages ?? [], function ($val) {
            return is_numeric($val);
        });

        if (count($ids) == 0) {
            $ids = Language::select('id')->get()->pluck('id')->toArray();
        }

        return $ids;
    }

    protected function queryLanguages(array $languageIds)
    {
        return Language::whereIn('id', $languageIds)->get();
    }

    protected function queryTypes(array $typeIds)
    {
        return ParadigmType::whereIn('id', $typeIds)->get();
    }

    protected function queryForms(array $languageIds, array $typeIds)
    {
        return Form::with([
                'structure',
                'structure.nominalFeature',
                'structure.pronominalFeature',
                'structure.paradigm',
                'structure.paradigm.paradigmType',
                'morphemes',
                'morphemes.glosses',
                'morphemes.slot'
            ])->whereIn('language_id', $languageIds)
            ->whereHas('structure', function ($query) use ($typeIds) {
                $query->with('paradigm')
                    ->whereHas('paradigm', function ($query) use ($typeIds) {
                        $query->whereIn('paradigmType_id', $typeIds);
                    });
            })->get();
    }
}

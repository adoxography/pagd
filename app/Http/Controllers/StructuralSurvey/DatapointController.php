<?php

namespace App\Http\Controllers\StructuralSurvey;

use App\Models\Language;
use App\Models\StructuralSurvey\Variable;
use App\Models\StructuralSurvey\Datapoint;
use App\Http\Controllers\Controller;
use App\Http\Requests\DatapointRequest;

class DatapointController extends Controller
{
	public function __construct()
	{
		$this->middleware('auth')->except('index', 'show');
		$this->middleware('checkbox:isExtended')->only(['store', 'update']);
	}

	public function show(Datapoint $datapoint)
	{
		$datapoint->load(['language', 'variable', 'value', 'sources']);

		return view('datapoints.show', compact('datapoint'));
	}

	public function create()
	{
		return view('datapoints.create');
	}

    public function clone(Datapoint $datapoint)
    {
        $datapoint->load(['variable', 'value', 'sources']);

        return view('datapoints.create', compact('datapoint'));
    }

	public function store(DatapointRequest $request)
	{
		$datapoint = Datapoint::create($request->all());

		flash("{$datapoint->language->name}/{$datapoint->variable->name} updated successfully", 'is-success');
		return redirect("/datapoints/{$datapoint->id}");
	}

	public function edit(Datapoint $datapoint)
	{
		$datapoint->load(['language', 'variable', 'value', 'sources']);

		return view('datapoints.edit', compact('datapoint'));
	}

	public function update(DatapointRequest $request, Datapoint $datapoint)
	{
		$datapoint->update($request->all());

		flash("{$datapoint->language->name}/{$datapoint->variable->name} updated successfully", 'is-success');
		return redirect("/datapoints/{$datapoint->id}");
	}

	public function destroy(Datapoint $datapoint)
	{
		$datapoint->delete();

		return redirect("/variables/{$datapoint->variable_id}");
	}

	public function addDatapointToLanguage(Language $language)
	{
		return view('datapoints.create', compact('language'));
	}

    public function addDatapoint(Variable $variable, Language $language)
    {
        return view('datapoints.create', compact('variable', 'language'));
    }
}

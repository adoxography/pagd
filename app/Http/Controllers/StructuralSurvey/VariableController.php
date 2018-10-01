<?php

namespace App\Http\Controllers\StructuralSurvey;

use App\Models\StructuralSurvey\Type;
use App\Models\StructuralSurvey\Variable;
use App\Http\Requests\VariableRequest;
use App\Http\Controllers\AlgModelController;

class VariableController extends AlgModelController
{
    public function __construct()
    {
        $this->middleware('auth')->except('index', 'show');
    }

    public function index()
    {
        $types = Type::with('variables')->get();

        if(count($types) > 0) {
            $types = $types->filter(function($value) {
                        return count($value->variables) > 0;
                     });
        }

        return view('variables.index', compact('types'));
    }

    public function create()
    {
    	return view('variables.create');
    }

    public function clone(Variable $variable)
    {
        $variable->name = '';
        $variable->load(['values', 'sources', 'datapoints']);

        $used = $variable->datapoints->pluck('value')->unique();
        for($i = 0; $i < count($variable->values); $i++) {
            $value = $variable->values[$i];

            $variable->values[$i]->setUsed($used->contains(function($item) use ($value) {
                return $item->id == $value->id;
            }));
        }

        return view('variables.create', compact('variable'));
    }

    public function store(VariableRequest $request)
    {
    	$variable = Variable::create($request->all());

        flash("{$variable->name} created successfully", 'is-success');
        return redirect("/variables/{$variable->id}/basic");
    }

    public function show(Variable $variable)
    {
        return redirect("/variables/{$variable->id}/datapoints");
    }

    public function edit(Variable $variable)
    {
        $variable->load(['values', 'sources', 'datapoints']);

        $used = $variable->datapoints->pluck('value')->unique();
        for($i = 0; $i < count($variable->values); $i++) {
            $value = $variable->values[$i];

            $variable->values[$i]->setUsed($used->contains(function($item) use ($value) {
                return $item->id == $value->id;
            }));
        }

        return view('variables.edit', compact('variable'));
    }

    public function update(VariableRequest $request, Variable $variable)
    {
        $variable->update($request->all());

        flash("{$variable->name} updated successfully", 'is-success');
        return redirect("/variables/{$variable->id}/basic");
    }

    public function destroy(Variable $variable)
    {
        $variable->delete();

        return redirect('/variables');
    }
}

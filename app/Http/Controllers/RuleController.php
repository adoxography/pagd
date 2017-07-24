<?php

namespace App\Http\Controllers;

use App\Rule;
use App\Http\Requests\RuleRequest;

class RuleController extends AlgModelController
{
    /**
     * Initialize middleware
     */
    public function __construct()
    {
        $this->middleware('auth')->except('index', 'show');
    }

    public function show(Rule $rule)
    {
        if($this->shouldShow($rule)) {
            $rule->load('language');

            return view('rules.show', compact('rule'));
        } else {
            return view('errors.404');
        }
    }

    public function create()
    {
    	return view('rules.create');
    }

    public function edit(Rule $rule)
    {
    	$rule->load('language', 'sources');

        return view('rules.edit', compact('rule'));
    }

    public function store(RuleRequest $request)
    {
    	$rule = Rule::create($request->all());

        flash("{$rule->abv} added successfully.", 'is-success');
        return redirect("/rules/{$rule->id}");
    }

    public function update(RuleRequest $request, Rule $rule)
    {
    	$rule->update($request->all());

        flash("{$rule->abv} updated successfully.", 'is-success');
        return redirect("/rules/{$rule->id}");
    }

    public function destroy(Rule $rule)
    {
    	$rule->delete();

        flash("{$rule->abv} deleted successfully.");
        return redirect("/languages/{$rule->language_id}");
    }
}

<?php

namespace App\Http\Controllers;

use App\Rule;
use App\Http\Requests\RuleRequest;

class RuleController extends Controller
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
        $rule->load('language');

    	return view('rules.show', compact('rule'));
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

        return $rule->id;
    }

    public function update(RuleRequest $request, Rule $rule)
    {
    	$rule->update($request->all());

        return $rule->id;
    }

    public function destroy(Rule $rule)
    {
    	$rule->delete();

        return redirect("/languages/{$rule->language->iso}");
    }
}

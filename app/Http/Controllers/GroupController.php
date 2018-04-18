<?php

namespace App\Http\Controllers;

use App\Group;
use App\Http\Requests\GroupRequest;

class GroupController extends AlgModelController
{
    public function show(Group $group)
    {
    	$group->load([
    		'parent',
    		'allChildren',
    		'sources'
    	]);

        return view('groups.show', compact('group'));
    }

    public function create()
    {
    	return view('groups.create');
    }

    public function clone(Group $group)
    {
        $group->name = '';

        $group->load([
            'parent',
            'allChildren',
            'allChildren.languages'
        ]);

        return view('groups.create', compact('group'));
    }

	public function edit(Group $group)
	{
		$group->load([
			'parent',
			'allChildren',
			'allChildren.languages'
		]);

		return view('groups.edit', compact('group'));
	}

	public function store(GroupRequest $request)
	{
		$group = Group::create($request->all());

		flash("{$group->name} added successfully.", 'is-success');

		return redirect("/groups/{$group->id}");
	}

    public function update(GroupRequest $request, Group $group)
    {
    	$group->update($request->all());

    	return redirect("/groups/{$group->id}");
    }

    public function destroy(Group $group)
    {
    	if($group->parent) {
	    	$group->delete();

	    	flash("{$group->name} deleted successfully.", 'is-success');
    	} else {
    		flash("Failed to delete {$group->name}; no parent group specified.", 'is-danger');
    	}

    	return redirect('/groups/1');
    }
}

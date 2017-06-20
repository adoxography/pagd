<?php

namespace App\Http\Controllers;

use App\Group;
use Illuminate\Http\Request;

class GroupOrderController extends Controller
{
    public function edit(Group $group)
    {
    	$group->load([
    		'languages',
    		'allChildren'
    	]);

    	$this->assignTypes($group->languages);
    	$this->assignTypes($group->children);

    	return view('groups.order', compact('group'));
    }

    public function update(Request $request, Group $group)
    {
    	$ids = $request->ids;
    	$types = $request->types;
    	$positions = $request->positions;

    	for($i = 0; $i < count($ids); $i++) {
    		($types[$i])::where('id', $ids[$i])
    			->update(['position' => $positions[$i]]);
    	}

    	return redirect("/groups/{$group->id}");
    }

    protected function assignTypes(&$collection)
    {
    	foreach($collection as &$item) {
    		$item->type = get_class($item);
    	}
    }
}

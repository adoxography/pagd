<?php

namespace App\Http\Controllers;

use App\Group;
use App\Http\Requests;
use App\Language;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Redirect;

class GroupController extends ClosedController
{

    protected $plural   = 'Groups';
    protected $singular = 'Group';

    protected function getMembers()
    {
        return Group::all();
    }

    protected function createNew()
    {
        return new Group();
    }

    protected function getItem($id)
    {
        return Group::where('id', $id)->first();
    }
	
	// public function show($id){
	// 	$group = Group::where('id', $id)->with('languages')->first();

	// 	return view('groups.show', compact('group'));
	// }

	// public function addLanguage(Group $group){
	// 	$preset = ['group_id' => $group->id];
	// 	$groups = Group::all();
	// 	$parents = Language::all();

	// 	return view('languages.create', compact('groups', 'parents', 'preset'));
	// }
	
}

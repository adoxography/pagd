<?php

namespace App\Http\Controllers;

use App\Group;
use App\Http\Controllers\ClosedController;
use App\Http\Requests;
use App\Language;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Redirect;

class GroupController extends Controller
{
    public function index(){
    	$groups = Group::all();
    	return ClosedController::index($groups,'Groups','groups');
	}
	
	public function show(Group $group){
		$group->load('languages');

		return view('groups.show', compact('group'));
	}

	public function create(){
		return ClosedController::create('Group','/groups');
	}

	public function addTo(Group $group){
		$preset = ['group_id' => $group->id];
		$groups = Group::all();
		$parents = Language::all();

		return view('languages.create', compact('groups', 'parents', 'preset'));
	}

	public function insert(Request $request, Group $group){
		$this->validate($request,[
			'name' => ['required','unique:Groups,name']
		]);

		$group = new Group($request->all());
		$group->save();

		return Redirect::to('/groups/' . $group->id);
	}

	public function destroy(Group $group){
		$group->delete();

		return Redirect::to('/groups');
	}
	
}

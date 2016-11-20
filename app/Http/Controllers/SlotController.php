<?php

namespace App\Http\Controllers;

use App\Http\Controllers\ClosedWithAbvController;
use App\Http\Requests;
use App\Slot;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Redirect;

class SlotController extends Controller
{
    
    public function index(){
    	$slots = Slot::all();

    	return ClosedWithAbvController::index($slots,'Slots','slots');
    }

    public function create(){
		return ClosedWithAbvController::create('Slots','/slots');
    }

	public function destroy(Slot $slot){
		$slot->delete();

		return Redirect::to('/slots');
	}

	public function insert(Request $request, Slot $slot){
		$this->validate($request, [
			'name' => 'required',
			'abv'  => 'required'
		]);

		$slot = new Slot($request->all());
		$slot->save();

		return Redirect::to('/slots/' . $slot->id);
	}
	

    public function show(Slot $slot){
    	return ClosedWithAbvController::show($slot,'Slot','slots');
    }
    
}

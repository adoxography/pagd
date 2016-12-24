<?php

namespace App\Http\Controllers;

use App\Http\Requests;
use App\Slot;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Redirect;

class SlotController extends ClosedWithAbvController
{
    
    protected $plural   = 'Slots';
    protected $singular = 'Slot';

    protected function getMembers()
    {
        return Slot::all();
    }

    protected function createNew()
    {
        return new Slot();
    }

    protected function getItem($id)
    {
        return Slot::where('id', $id)->first();
    }
    
}

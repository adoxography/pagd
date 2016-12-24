<?php

namespace App\Http\Controllers;

use App\Http\Controllers\ClosedController;
use App\Http\Requests;
use App\Mode;
use Illuminate\Http\Request;

class ModeController extends ClosedController
{
    protected $plural   = 'Modes';
    protected $singular = 'Mode';

    protected function getMembers()
    {
        return Mode::all();
    }

    protected function createNew()
    {
        return new Mode();
    }

    protected function getItem($id)
    {
        return Mode::where('id', $id)->first();
    }
}

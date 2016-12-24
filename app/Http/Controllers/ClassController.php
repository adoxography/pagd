<?php

namespace App\Http\Controllers;

use App\FormClass;
use App\Http\Requests;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Redirect;

class ClassController extends ClosedWithAbvController
{
    protected $plural   = 'Classes';
    protected $singular = 'Class';

    protected function getMembers()
    {
        return FormClass::all();
    }

    protected function createNew()
    {
        return new FormClass();
    }

    protected function getItem($id)
    {
        return FormClass::where('id', $id)->first();
    }
    
    
}

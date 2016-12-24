<?php

namespace App\Http\Controllers;

use App\Gloss;
use App\Http\Requests;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Redirect;

class GlossController extends ClosedWithAbvController
{
    protected $plural = 'Glosses';
    protected $singular = 'Gloss';

    protected function getMembers()
    {
        return Gloss::all();
    }

    protected function createNew()
    {
        return new Gloss();
    }

    protected function getItem($id)
    {
        return Gloss::where('id', $id)->first();
    }
}

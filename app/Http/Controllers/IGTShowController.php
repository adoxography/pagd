<?php

namespace App\Http\Controllers;

use App\IGT;
use Illuminate\Http\Request;

class IGTShowController extends Controller
{
    public function basic(IGT $igt)
    {
        $igt->load([
            'language',
            'lines',
            'lines.type'
        ]);
        return view('igt.show.basic', compact('igt'));
    }
}

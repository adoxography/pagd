<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use App\Http\Requests;

abstract class ClosedWithAbvController extends ClosedController
{
    public function index()
    {
        $model   = $this->plural;
        $members = $this->getMembers();

        return view('closedWithAbv.index', compact('model', 'members'));
    }

    public function create()
    {
        $modelPl = $this->plural;
        $modelSg = $this->singular;

        return view('closedWithAbv.create', compact('modelPl', 'modelSg'));
    }

    public function store(Request $request)
    {
        $newModel = $this->createNew();

        $newModel->name        = $request->name;
        $newModel->abv         = $request->abv;
        $newModel->description = $request->description;

        $newModel->save();
        
        return redirect('/'.strtolower($this->plural).'/'.$newModel->id);
    }
}

<?php

namespace App\Http\Controllers;

use App\Closed;
use App\Http\Requests;
use Illuminate\Http\Request;

abstract class ClosedController extends Controller
{
    protected $plural;
    protected $singular;
    abstract protected function getMembers();
    abstract protected function createNew();
    abstract protected function getItem($id);
    
    public function index()
    {
        $model   = $this->plural;
        $members = $this->getMembers();

        return view('closed.index', compact('model', 'members'));
    }
    
    public function create()
    {
        $singular = $this->singular;
        $plural   = $this->plural;

        return view('closed.create', compact('singular', 'plural'));
    }

    public function destroy($id)
    {
        $this->getItem($id)->delete();

        return redirect('/'.strtolower($this->plural));
    }

    public function show($id)
    {
        $item   = $this->getItem($id);
        $plural = $this->plural;

        return view('closed.show', compact('item', 'plural'));
    }

    public function store(Request $request)
    {
        $newModel = $this->createNew();

        $newModel->name        = $request->name;
        $newModel->description = $request->description;

        $newModel->save();
        
        return redirect('/'.strtolower($this->plural).'/'.$newModel->id);
    }
}

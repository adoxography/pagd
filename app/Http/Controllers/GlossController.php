<?php

namespace App\Http\Controllers;

use App\Gloss;
use App\Http\Requests;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Redirect;

class GlossController extends Controller
{
    public function index()
    {
        $items = Gloss::orderBy('abv')->get();
        $model = 'glosses';

        return view('closedWithAbv.index', compact('items', 'model'));
    }

    public function show(Gloss $gloss)
    {
        $item = $gloss;
        $modelSG = 'gloss';
        $modelPL = 'glosses';
        return view('closedWithAbv.show', compact('item', 'modelSG', 'modelPL'));
    }

    public function edit(Gloss $gloss)
    {
        $item = $gloss;
        $modelSG = 'gloss';
        $modelPL = "glosses";

        return view('closedWithAbv.edit', compact('item', 'modelSG', 'modelPL'));
    }

    public function update(Request $request, Gloss $gloss)
    {
        $gloss->update($request->all());

        flash("{$gloss->abv} updated successfully", "is-success");
        return redirect("/glosses/{$gloss->id}");
    }
}

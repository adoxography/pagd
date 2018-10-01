<?php

namespace App\Http\Controllers\Words;

use App\Models\Words\Feature;
use App\Http\Requests\Words\FeatureRequest;
use App\Http\Controllers\Controller;

class FeatureController extends Controller
{
    public function __construct()
    {
        $this->middleware(['role:developer|leader']);
    }

    public function store(FeatureRequest $request)
    {
        Feature::create($request->all());
        return back();
    }

    public function destroy(Feature $feature)
    {
        $feature->delete();
        return back();
    }
}

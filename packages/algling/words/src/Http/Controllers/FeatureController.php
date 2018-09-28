<?php

namespace Algling\Words\Http\Controllers;

use Algling\Words\Models\Feature;
use Algling\Words\Http\Requests\FeatureRequest;
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

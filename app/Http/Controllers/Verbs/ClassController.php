<?php

namespace App\Http\Controllers\Verbs;

use App\Models\Verbs\VerbClass;
use App\Http\Controllers\AlgModelController;

class ClassController extends AlgModelController
{
    public function __construct()
    {
        $this->middleware(['role:developer|leader']);
    }

    public function store()
    {
        $data = request()->validate(['name' => 'required']);
        VerbClass::create($data);
        return back();
    }

    public function destroy(VerbClass $class)
    {
        $class->delete();
        return back();
    }
}

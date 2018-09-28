<?php

namespace Algling\Verbals\Http\Controllers;

use Algling\Verbals\Models\VerbClass;
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

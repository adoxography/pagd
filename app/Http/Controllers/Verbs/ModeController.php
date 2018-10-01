<?php

namespace App\Http\Controllers\Verbs;

use App\Models\Verbs\Mode;
use App\Http\Controllers\AlgModelController;

class ModeController extends AlgModelController
{
    public function __construct()
    {
        $this->middleware(['role:developer|leader']);
    }

    public function store()
    {
        $data = request()->validate(['name' => 'required']);
        Mode::create($data);
        return back();
    }

    public function destroy(Mode $mode)
    {
        $mode->delete();
        return back();
    }
}

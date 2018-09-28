<?php

namespace Algling\Verbals\Http\Controllers;

use Algling\Verbals\Models\Mode;
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

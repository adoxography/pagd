<?php

namespace App\Http\Controllers;

use App\Models\Users\RegistrationCode;
use Illuminate\Http\Request;

class RegistrationCodeController extends Controller
{
    public function __construct()
    {
        $this->middleware('role:developer|leader');
    }

    public function create(Request $request) {
        $data = $request->validate(['code' => 'required']);
        RegistrationCode::create($data);
        return back();
    }

    public function enable(RegistrationCode $code) {
        $code->valid = true;
        $code->save();
        return back();
    }

    public function disable(RegistrationCode $code) {
        $code->valid = false;
        $code->save();
        return back();
    }

    public function destroy(RegistrationCode $code) {
        if ($code->users()->count() == 0) {
            $code->delete();
        }
        return back();
    }
}

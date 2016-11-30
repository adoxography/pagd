<?php

namespace App\Http\Controllers;

use JavaScript;
use Illuminate\Http\Request;

use App\Http\Requests;

class SandboxController extends Controller
{
    
    public function index(){

    	return view('sandbox');
    }

    public function store(Request $request){
    	dd($request);
    }
    
    
}

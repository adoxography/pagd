<?php

namespace App\Http\Controllers;

use App\Http\Requests;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Artisan;
use JavaScript;

class SandboxController extends Controller
{
    
    public function index(){

    	return view('sandbox');
    }

    public function store(Request $request){
    	Artisan::call('db:backup',['--database' => 'mysql', '--destination' => 'local', '--destinationPath' => '/backups/test', '--compression' => 'null']);
    	return response()->file(storage_path('app/backups/test'));
    }
    
    
}

<?php

namespace App\Http\Controllers;

use Carbon\Carbon;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Artisan;

class BackupController extends Controller
{
    public function store(){
    	$date = Carbon::now()->format('Y-m-d-H-i-s');

    	Artisan::call('db:backup',['--database' => 'mysql', '--destination' => 'local', '--destinationPath' => "/backups/algling_{$date}", '--compression' => 'gzip']);
    	return response()->download(storage_path("app/backups/algling_$date.gz"), "algling_$date.gz");
    }
}

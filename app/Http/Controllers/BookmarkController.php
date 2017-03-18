<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class BookmarkController extends Controller
{
    public function bookmark($model, $id)
    {
    	$modelName = ucwords($model);
    	$item = ("app\\$modelName")::find($id);

    	dd($item->bookmark());
    }
}

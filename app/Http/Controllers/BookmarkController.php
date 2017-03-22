<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Auth;

class BookmarkController extends Controller
{
    public function bookmark($table, $id)
    {
    	$comment = request()->comment;
    	$item = $this->getModel($table, $id);

    	$item->bookmark($comment);

    	return 'success';
    }

    public function unbookmark($table, $id)
    {
    	$item = $this->getModel($table, $id);

    	$item->unbookmark();

    	return 'success';
    }

    protected function getModel($table, $id)
    {
    	$model;

    	// Special case for tables with semi-irregular plurals
    	if($table === 'glosses') {
    		$model = \App\Gloss::find($id);
    	} else {
	    	$modelName = '\\App\\'.ucfirst(substr($table, 0, strlen($table) - 1));
	    	$model = $modelName::find($id);
    	}

    	return $model;
    }
}

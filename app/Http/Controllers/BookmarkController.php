<?php

namespace App\Http\Controllers;

use App\Models\Morphology\Gloss;

class BookmarkController extends Controller
{

    protected function getModel($table, $id)
    {
    	// Special case for tables with semi-irregular plurals
    	if($table === 'glosses') {
    		$model = Gloss::find($id);
    	} else {
	    	$modelName = '\\App\\'.ucfirst(substr($table, 0, strlen($table) - 1));
	    	$model = $modelName::find($id);
    	}

    	return $model;
    }
}

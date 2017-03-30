<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class AlgModelController extends Controller
{
    /**
     * Toggles a model's visibility from the public
     * 
     * @param \App\Language The model
     * @return \Illuminate\Http\Response
     */
    public function hide($model)
    {
        $val = false;

        $model->toggleVisibility();

        if(request()->ajax()) {
        	return json_encode(['hidden' => $model->isHidden()]);
        } else {
        	return back();
        }
    }

    protected function shouldShow($model)
    {
    	return Auth::user() || (!$model->isHidden() && !$model->language->isHidden());
    }
}

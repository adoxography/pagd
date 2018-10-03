<?php

namespace App\Http\Controllers;

use Auth;

class AlgModelController extends Controller
{
    /**
     * Toggles a model's visibility from the public
     * 
     * @param \App\Models\Language The model
     * @return \Illuminate\Http\Response
     */
    public function hide($model)
    {
        $model->toggleVisibility();

        if(request()->ajax()) {
        	return json_encode(['hidden' => $model->isHidden()]);
        } else {
        	return back();
        }
    }

    protected function shouldShow($model)
    {
    	return Auth::user() || (!$model->isHidden() && isset($model->language) && !$model->language->isHidden());
    }

    public function bookmark($model)
    {
        $comment = request()->comment;
        $model->bookmark($comment);

        return 'success';
    }

    public function unbookmark($model)
    {
        $model->unbookmark();

        return 'success';
    }
}

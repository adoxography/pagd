<?php

namespace App\Http\Controllers;

use Auth;

class AlgModelController extends Controller
{
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

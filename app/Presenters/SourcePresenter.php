<?php

namespace App\Presenters;

use App\Presenters\AlgPresenter;

class SourcePresenter extends AlgPresenter
{
    public function preview() : string
    {
        return $this->model->long;
    }
}

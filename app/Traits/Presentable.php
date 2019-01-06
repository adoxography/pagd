<?php

namespace App\Traits;

use App\Presenters\AlgPresenter;

trait Presentable
{
    public $presenter = AlgPresenter::class;
    public $presenterDefaultMethod = 'name';

    public function present($method = null)
    {
        $method = $method ?? $this->presenterDefaultMethod;
        return new $presenter($this, $method);
    }
}

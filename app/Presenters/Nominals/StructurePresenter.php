<?php

namespace App\Presenters\Nominals;

use App\Models\Nominals\Structure;
use App\Presenters\AlgPresenter;

class StructurePresenter extends AlgPresenter
{
    public function __construct(Structure $model, string $method = 'summary')
    {
        parent::__construct($model, $method);
    }

    public function summary()
    {
        return $this->features() . '&nbsp' . $this->model->paradigm->present('link');
    }

    public function features(string $format = '')
    {
        $output = '';

        if ($this->model->pronominalFeature) {
            $output .= $this->model->pronominalFeature->name;

            if ($this->model->nominalFeature) {
                $output .= '→' . $this->model->nominalFeature->name;
            }
        } else {
            $output .= $this->model->nominalFeature->name;
        }

        return $output;
    }
}

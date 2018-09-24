<?php

namespace App\Observers;

use App\IGT;
use App\IGTLine;

class IGTObserver
{
    public function saving(IGT $model)
    {
        $this->extractLines($model);
    }

    public function saved(IGT $model)
    {
        $this->syncLines($model);
    }

    public function deleting(IGT $model)
    {
        $this->destroyLines($model);
    }

    protected function extractLines(IGT $model)
    {
        $model->newLines = $model->lines;
        unset($model['lines']);
    }

    protected function syncLines(IGT $model)
    {
        foreach ($model->newLines as $line) {
            IGTLine::create($line + ['igt_id' => $model->id]);
        }
        $model->newLines = null;
    }

    protected function destroyLines(IGT $model)
    {
        //
    }
}

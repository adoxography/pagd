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
        $oldLines = $model->lines;
        $newLines = $model->newLines;
        $numLines = max(count($newLines), $oldLines->count());

        for ($i = 0; $i < $numLines; $i++) {
            if ($i >= count($newLines)) {
                $oldLines[$i]->delete();
            } elseif ($i >= $oldLines->count()) {
                $model->lines()->create($newLines[$i]);
            } else {
                $oldLines[$i]->update($newLines[$i]);
            }
        }

        $model->newLines = null;
    }

    protected function destroyLines(IGT $model)
    {
        foreach ($model->lines as $line) {
            $line->delete();
        }
    }
}

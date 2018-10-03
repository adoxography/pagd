<?php

namespace App\Observers;

use App\Models\IGT\IGT;
use App\Models\IGT\IGTLine;

class IGTObserver
{
    /**
     * Fires before the IGT has saved
     *
     * Extracts the information for IGT lines off of the model's attributes
     * onto a property on the model itself so that the database doesn't try to
     * save the lines itself.
     *
     * @param App\Models\IGT\IGT  $model
     */
    public function saving(IGT $model)
    {
        $this->extractLines($model);
    }

    /**
     * Fires after the IGT has saved
     *
     * Synchronizes the extracted lines with the existing lines.
     *
     * @param App\Models\IGT\IGT  $model
     */
    public function saved(IGT $model)
    {
        $this->syncLines($model);
    }

    /**
     * Fires before the IGT has beend deleted
     *
     * Ensures all of the model's lines also get deleted.
     *
     * @param App\Models\IGT\IGT  $model
     */
    public function deleting(IGT $model)
    {
        $this->destroyLines($model);
    }

    /**
     * Extracts the lines from the model's attributes and onto an instance on
     * the object itself
     *
     * @param App\Models\IGT\IGT  $model
     */
    protected function extractLines(IGT $model)
    {
        $model->newLines = $model->lines;
        unset($model['lines']);
    }

    /**
     * Synchronizes the lines on the model's newLines property with the lines
     * it already has
     *
     * Existing lines are updated in order with the data from the new lines.
     * Remaining existing lines are deleted, and extra new lines are created.
     *
     * @param App\Models\IGT\IGT  $model
     */
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

    /**
     * Deletes all of the model's lines
     *
     * @param App\Models\IGT\IGT  $model
     */
    protected function destroyLines(IGT $model)
    {
        foreach ($model->lines as $line) {
            $line->delete();
        }
    }
}

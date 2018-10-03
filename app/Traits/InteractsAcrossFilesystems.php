<?php

namespace App\Traits;

use Storage;

trait InteractsAcrossFilesystems
{
    /**
     * Moves a file from one filesystem to another and deletes the old file
     *
     * @param string $fromPath   The location of the file to move
     * @param string $fromSystem The filesystem to move the file from
     * @param string $toSystem   The filesystem to move the file to
     * @param string $toPath     An optional name for the copied file
     */
    protected function move(string $fromPath, string $fromSystem, string $toSystem, string $toPath = null)
    {
        $this->copy($fromPath, $fromSystem, $toSystem, $toPath);

        $this->delete($fromPath, $fromSystem);
    }

    /**
     * Copies a file from one filesystem to another
     *
     * @param string $fromPath   The location of the file to move
     * @param string $fromSystem The filesystem to move the file from
     * @param string $toSystem   The filesystem to move the file to
     * @param string $toPath     An optional name for the copied file
     */
    protected function copy(string $fromPath, string $fromSystem, string $toSystem, string $toPath = null)
    {
        $toPath ?: $fromPath;

        $fileContents = Storage::disk($fromSystem)->get($fromPath);

        Storage::disk($toSystem)->put($toPath, $fileContents);
    }

    /**
     * Deletes a file from a filesystem
     *
     * @param string $path The location of the file
     * @param string $disk The filesystem to delete from
     */
    protected function delete(string $path, string $disk)
    {
        Storage::disk($disk)->delete($path);
    }
}

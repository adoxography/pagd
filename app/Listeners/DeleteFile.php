<?php

namespace App\Listeners;

use Storage;
use App\Events\Audio\Deleting;
use Illuminate\Contracts\Queue\ShouldQueue;

class DeleteFile implements ShouldQueue
{
    /**
     * Handle the event.
     *
     * @param  Deleting  $event
     * @return void
     */
    public function handle($event)
    {
        $file = $event->file;
        $disk = $event->disk;

        Storage::disk($disk)->delete($file);
    }
}

<?php

namespace App\Listeners;

use Storage;
use App\Events\Audio\Deleting;
use Illuminate\Queue\InteractsWithQueue;
use Illuminate\Contracts\Queue\ShouldQueue;

class DeleteFile implements ShouldQueue
{
    /**
     * Create the event listener.
     *
     * @return void
     */
    public function __construct()
    {
        //
    }

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

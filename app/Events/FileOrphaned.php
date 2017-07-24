<?php

namespace App\Events;

use Illuminate\Broadcasting\Channel;
use Illuminate\Queue\SerializesModels;
use Illuminate\Broadcasting\PrivateChannel;
use Illuminate\Foundation\Events\Dispatchable;
use Illuminate\Broadcasting\InteractsWithSockets;

class FileOrphaned
{
    use Dispatchable, InteractsWithSockets, SerializesModels;

    public $file;
    public $disk;

    /**
     * Create a new event instance.
     *
     * @param $file
     * @param $disk
     */
    public function __construct($file, $disk)
    {
        $this->file = $file;
        $this->disk = $disk;
    }

    /**
     * Get the channels the event should broadcast on.
     *
     * @return Channel|array
     */
    public function broadcastOn()
    {
        return new PrivateChannel('channel-name');
    }
}

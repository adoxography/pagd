<?php

namespace App\Events\Audio;

use App\Models\Audio;
use Illuminate\Broadcasting\Channel;
use Illuminate\Broadcasting\InteractsWithSockets;
use Illuminate\Broadcasting\PrivateChannel;
use Illuminate\Foundation\Events\Dispatchable;
use Illuminate\Queue\SerializesModels;

class Deleting
{
    use Dispatchable, InteractsWithSockets, SerializesModels;

    public $model;
    public $file;
    public $disk;

    /**
     * Create a new event instance.
     *
     * @param Audio $audio
     */
    public function __construct(Audio $audio)
    {
        $this->model = $audio;
        $this->disk = $audio->getDisk();
        $this->file = $audio->fileName;
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

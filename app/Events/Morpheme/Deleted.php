<?php

namespace App\Events\Morpheme;

use App\Morpheme;
use Illuminate\Broadcasting\Channel;
use Illuminate\Queue\SerializesModels;
use Illuminate\Broadcasting\PrivateChannel;
use Illuminate\Broadcasting\PresenceChannel;
use Illuminate\Foundation\Events\Dispatchable;
use Illuminate\Broadcasting\InteractsWithSockets;
use Illuminate\Contracts\Broadcasting\ShouldBroadcast;

class Deleted
{
    use Dispatchable, InteractsWithSockets, SerializesModels;

    public $morpheme;

    /**
     * Create a new event instance.
     *
     * @return void
     */
    public function __construct(Morpheme $morpheme)
    {
        $this->morpheme = $morpheme;
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

<?php

namespace App\Models\Tickets;

use App\Models\Model;
use App\Models\Tickets\Ticket;
use App\Models\Users\User;

class Comment extends Model
{
    protected $fillable = ['ticket_id', 'user_id', 'comment'];
    protected $touches = ['ticket'];

    public function ticket()
    {
        return $this->belongsTo(Ticket::class);
    }

    public function author()
    {
        return $this->belongsTo(User::class, 'user_id');
    }
}

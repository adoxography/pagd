<?php

namespace App\Http\Controllers;

use App\Comment;
use App\Ticket;
use Illuminate\Http\Request;

class CommentController extends Controller
{
    public function create(int $ticket)
    {
        $ticket = Ticket::find($ticket);

        $fields = request()->validate([
            'comment' => 'required'
        ]);

        Comment::create([
            'ticket_id' => $ticket->id,
            'user_id' => auth()->user()->id,
            'comment' => $fields['comment']
        ]);

        $ticket->notifySubscribers();

        flash('Your comment has been added!', 'is-success');
        return redirect()->back();
    }
}

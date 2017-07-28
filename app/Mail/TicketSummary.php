<?php

namespace App\Mail;

use App\User;
use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Database\Eloquent\Collection;
use Illuminate\Mail\Mailable;
use Illuminate\Queue\SerializesModels;

class TicketSummary extends Mailable
{
    use Queueable, SerializesModels;

    public $urgentTickets;
    public $nonUrgentTickets;
    public $user;

    /**
     * Create a new message instance.
     *
     * @return void
     */
    public function __construct(Collection $tickets, User $user)
    {
        $this->urgentTickets = $tickets->where('isUrgent', true);
        $this->nonUrgentTickets = $tickets->where('isUrgent', false);
        $this->user = $user;
    }

    /**
     * Build the message.
     *
     * @return $this
     */
    public function build()
    {
        return $this->markdown('tickets.mail.summary');
    }
}

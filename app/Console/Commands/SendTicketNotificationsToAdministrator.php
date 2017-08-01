<?php

namespace App\Console\Commands;

use Mail;
use App\Mail\TicketSummary;
use App\Ticket;
use App\User;
use Carbon\Carbon;
use Illuminate\Console\Command;

class SendTicketNotificationsToAdministrator extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'algling:send-ticket-notifications-to-administrator';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Sends an email to the administrator containing all of the recently opened non-urgent tickets';

    protected $tickets;

    protected $users;

    /**
     * Create a new command instance.
     *
     * @return void
     */
    public function __construct()
    {
        parent::__construct();

        $this->users = User::role('developer')->get();

        $this->tickets = Ticket::where('isClosed', false)
            ->where(function($query) {
                $query->where('isUrgent', true)
                      ->orWhere('created_at', '>=', Carbon::now()->subDay());
            })->get();
    }

    /**
     * Execute the console command.
     *
     * @return mixed
     */
    public function handle()
    {
        if ($this->tickets->count() > 0) {
            foreach ($this->users as $user) {
                Mail::to($user)->send(new TicketSummary($this->tickets, $user));
            }
        }
    }
}

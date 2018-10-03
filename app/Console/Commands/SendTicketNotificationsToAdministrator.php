<?php

namespace App\Console\Commands;

use Mail;
use App\Mail\TicketSummary;
use App\Models\Tickets\Ticket;
use App\Models\Users\User;
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

    /**
     * Create a new command instance.
     *
     * @return void
     */
    public function __construct()
    {
        parent::__construct();
    }

    /**
     * Execute the console command.
     *
     * @return mixed
     */
    public function handle()
    {
        $tickets = $this->loadTickets();
        $users = $this->loadUsers();

        if ($tickets->count() > 0) {
            foreach ($users as $user) {
                Mail::to($user)->send(new TicketSummary($tickets, $user));
            }
        }
    }

    protected function loadTickets()
    {
        $query = Ticket::whereNull('closedBy_id')
            ->where(function ($query) {
                $query->where('isUrgent', true)
                      ->orWhere('created_at', '>=', Carbon::now()->subDay());
            });

        return $query->get();
    }

    protected function loadUsers()
    {
        $query = User::role('developer');

        return $query->get();
    }
}

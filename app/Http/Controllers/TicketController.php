<?php

namespace App\Http\Controllers;

use App\Mail\TicketOpened;
use App\Ticket;
use App\TicketType;
use App\User;
use Auth;
use Illuminate\Database\Eloquent\Collection;
use Mail;

class TicketController extends Controller
{
    public function __construct()
    {
        $this->middleware('auth');
        $this->middleware('checkbox:isUrgent')->only('store');
    }

    public function index()
    {
        $ticket = Ticket::with('type')->get();

        $open = $this->mapTicketsToType($ticket->filter(function ($ticket) {
            return !$ticket->isClosed();
        }));

        $closed = $this->mapTicketsToType($ticket->filter(function ($ticket) {
            return $ticket->isClosed();
        })->sortBy('updated_at'));

        return view('tickets.index', compact('open', 'closed'));
    }

    public function show(Ticket $ticket)
    {
        $ticket->load(['openedBy', 'closedBy']);

        return view('tickets.show', compact('ticket'));
    }

    public function create()
    {
        $types = TicketType::all();

        return view('tickets.create', compact('types'));
    }

    public function store()
    {
        $ticket = new Ticket(request()->only(
            ['title', 'url', 'current', 'desired', 'comments', 'ticketType_id', 'isUrgent']
        ));
        $ticket->openedBy_id = Auth::user()->id;
        $ticket->save();

        if (request()->notify) {
            $ticket->subscribe(Auth::user());
        }

        if (request()->isUrgent) {
            $this->notifyDevelopers($ticket);
        }

        return redirect("/tickets/{$ticket->id}");
    }

    public function subscribe(Ticket $ticket)
    {
        $ticket->toggleSubscription(Auth::user()->id);

        return back();
    }

    public function respond(Ticket $ticket)
    {
        return view('tickets.respond', compact('ticket'));
    }

    public function updateResponse(Ticket $ticket)
    {
        $response = request()->response;

        $ticket->close($response, Auth::user());

        $ticket->notifySubscribers();

        $ticket->removeSubscriptions();

        return redirect("/tickets/{$ticket->id}");
    }

    protected function notifyDevelopers(Ticket $ticket)
    {
        $developers = User::role('developer')->get();

        foreach ($developers as $developer) {
            Mail::to($developer)->send(new TicketOpened($ticket, $developer));
        }
    }

    protected function mapTicketsToType(Collection $tickets)
    {
        $map = [];
        $types = $tickets->pluck('type')->unique()->sortBy('id');
        foreach ($types as $type) {
            $map[$type->name] = $tickets->where('ticketType_id', $type->id);
        }

        return $map;
    }
}

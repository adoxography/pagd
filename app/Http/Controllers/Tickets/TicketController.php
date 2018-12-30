<?php

namespace App\Http\Controllers\Tickets;

use App\Http\Controllers\Controller;
use App\Mail\TicketOpened;
use App\Models\Tickets\Ticket;
use App\Models\Tickets\TicketType;
use App\Models\Users\User;
use Auth;
use Illuminate\Database\Eloquent\Collection;
use Mail;

class TicketController extends Controller
{
    public function __construct()
    {
        $this->middleware('auth');
        $this->middleware('checkbox:is_urgent')->only('store');
    }

    public function index()
    {
        $query = Ticket::with('type');

        if (env('DB_CONNECTION') == 'mysql') {
            $query->orderByRaw('ISNULL(closed_at) DESC');
        }

        $tickets = $query->orderByDesc('updated_at')
                         ->simplePaginate(20);

        return view('tickets.index', compact('tickets'));
    }

    public function show(Ticket $ticket)
    {
        $ticket->load(['openedBy', 'closedBy', 'comments', 'comments.author']);

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
            ['title', 'url', 'current', 'desired', 'etc', 'ticket_type_id', 'is_urgent']
        ));
        $ticket->openedBy_id = Auth::user()->id;
        $ticket->save();

        if (request()->notify) {
            $ticket->subscribe(Auth::user());
        }

        if (request()->is_urgent) {
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
            $map[$type->name] = $tickets->where('ticket_type_id', $type->id);
        }

        return $map;
    }
}

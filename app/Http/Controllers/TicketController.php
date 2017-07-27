<?php

namespace App\Http\Controllers;

use App\Mail\TicketOpened;
use App\Ticket;
use App\TicketType;
use Auth;
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
    	$ticket = Ticket::all();

    	$open = $ticket->where('isClosed', false);
    	$closed = $ticket->where('isClosed', true)->sortBy('updated_at');

    	return view('tickets.index', compact('open', 'closed'));
    }

    public function show(Ticket $ticket)
    {
    	$ticket->load('user');

    	return view('tickets.show', compact('ticket'));
    }

    public function create()
    {
        $types = TicketType::all();

    	return view('tickets.create', compact('types'));
    }

    public function store()
    {
    	$ticket = new Ticket(request()->only(['title', 'url', 'current', 'desired', 'comments', 'ticketType_id', 'isUrgent']));
    	$ticket->user_id = Auth::user()->id;
    	$ticket->save();

    	if(request()->notify) {
    		$ticket->subscribe(Auth::user());
    	}

        if(request()->isUrgent) {
            $this->notifyAdministrator($ticket);
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

    	$ticket->response = $response;
    	$ticket->isClosed = true;
    	$ticket->save();

    	$ticket->notifySubscribers();

    	$ticket->removeSubscriptions();

    	return redirect("/tickets/{$ticket->id}");
    }

    protected function notifyAdministrator(Ticket $ticket)
    {
        $admin = Auth::user()->find(1);
        Mail::to($admin)->send(new TicketOpened($ticket, $admin));
    }
}

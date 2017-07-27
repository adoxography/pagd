<p>Hi {{ $user->firstName }},</p>

<p>The following urgent tickets remain open:</p>

<ul>
	@foreach ($urgentTickets as $ticket)
		<li><a href="http://alglang.net/tickets/{{ $ticket->id }}">{{ $ticket->title }}</a></li>
	@endforeach
</ul>

<p>Additionally, the following non-urgent tickets were opened in the last day:</p>

<ul>
	@foreach ($nonUrgentTickets as $ticket)
		<li><a href="http://alglang.net/tickets/{{ $ticket->id }}">{{ $ticket->title }}</a></li>
	@endforeach
</ul>
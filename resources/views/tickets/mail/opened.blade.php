<p>Hi {{ $user->firstName }},</p>

<p>{{ $ticket->user->name }} has made the following request on Alglang.net:</p>

<p>{{ $ticket->title }}</p>

<p><a href="http://alglang.net/tickets/{{ $ticket->id }}">Click here to view the ticket</a>
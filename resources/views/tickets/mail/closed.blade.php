<p>Hi {{ $user->firstName }},</p>

<p>This is to let you know that the ticket "{{ $ticket->title }}," which you had asked to be notified about, has been updated.</p>

@if ($ticket->response)
	{!! $ticket->response !!}
@endif

<p><a href="http://alglang.net/tickets/{{ $ticket->id }}">Click here to check it out!</a></p>

<p>Best regards,<br />
Alglang.net</p>
@component('mail::message')
Hi {{ $user->firstName }},

This is to let you know that the ticket "[{{ $ticket->title }}](http://alglang.net/tickets/{{ $ticket->id }})," which you had asked to be notified about, has been updated.

@if ($ticket->response)
The following message was included:
@component('mail::panel')
    {{ strip_tags($ticket->response) }}
@endcomponent
&nbsp;
@endif

Best regards,  
Alglang.net
@endcomponent
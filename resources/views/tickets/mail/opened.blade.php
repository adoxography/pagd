@component('mail::message')
Hi {{ $user->firstName }},

{{ $ticket->user->name }} has made the following urgent request on alglang.net:

@component('mail::panel')
#{{ $ticket->title }}
@endcomponent
&nbsp;
@component('mail::button', ['url' => "http://alglang.net/tickets/{$ticket->id}"])
View the ticket
@endcomponent
@endcomponent
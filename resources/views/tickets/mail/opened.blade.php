@component('mail::message')
Hi {{ $user->first_name }},

{{ $ticket->openedBy->name }} has opened the following urgent ticket on alglang.net:

@component('mail::panel')
#{{ $ticket->title }}
@endcomponent
&nbsp;
@component('mail::button', ['url' => "http://alglang.net/tickets/{$ticket->id}"])
View the ticket
@endcomponent
@endcomponent

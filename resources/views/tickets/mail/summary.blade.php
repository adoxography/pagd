@component('mail::message')
Hi {{ $user->firstName }},

The following urgent tickets remain open:

@foreach ($urgentTickets as $ticket)
- [{{ $ticket->title }}](http://alglang.net/tickets/{{ $ticket->id }})
@endforeach

Additionally, the following non-urgent tickets were opened in the last day:

@if (count($nonUrgentTickets) > 0)
@foreach ($nonUrgentTickets as $ticket)
- [{{ $ticket->title }}](http://alglang.net/tickets/{{ $ticket->id }})
@endforeach
@endif
@endcomponent
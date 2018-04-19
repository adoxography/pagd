@component('mail::message')
Hi {{ $user->firstName }},

This is to let you know that the ticket "[{{ $ticket->title }}](http://alglang.net/tickets/{{ $ticket->id }})," which you had asked to be notified about, has been updated.

@if ($ticket->response)
The ticket has been closed with the following message:
@component('mail::panel')
    {{ strip_tags($ticket->response) }}
@endcomponent

@else

@php
    $comment = $ticket->comments->last();
@endphp

The following comment was added:
@component('mail::panel')
    <article class="message is-primary">
        <header class="message-header">
            <p>
                {{ $comment->author->name }} said...
            </p>
        </header>
        <div class="message-body">
            {!! $comment->comment !!}
        </div>
    </article>
@endcomponent
&nbsp;
@endif

Best regards,
Alglang.net
@endcomponent

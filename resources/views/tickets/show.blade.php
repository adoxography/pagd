@extends('layout', ['title' => $ticket->title])

@section('title')
    <label>Ticket:</label>
    {{ $ticket->title }}
@endsection

@section('icons')
	@if(!$ticket->isClosed() && Auth::user() && Auth::user()->hasRole('developer'))
		<a href="/tickets/{{ $ticket->id }}/respond" class="card-header-icon">
			<span class="icon">
				<i class="fa fa-reply"></i>
			</span>
		</a>
	@endif
@endsection

@section('content')
	<div class="columns">
		<div class="column">
			<div class="field is-one-line">
				<span class="label">Opened by:</span>
				{{ $ticket->openedBy->name }}
			</div>

			<div class="field is-one-line">
				<span class="label">Ticket type:</span>
				{{ $ticket->type->name }}
				@if ($ticket->isUrgent)
					&nbsp;
					<span class="tag is-danger">Urgent</span>
				@endif
			</div>

			@if ($ticket->url)
				<div class="field is-one-line">
					<span class="label">URL:</span>
					<a href="{{ $ticket->url }}">link</a>
				</div>
			@endif

			@if ($ticket->current)
				<div class="field">
					<span class="label">Current functionality</span>
					{!! replaceTags($ticket->current) !!}
				</div>
			@endif

			@if ($ticket->desired)
				<div class="field">
					<span class="label">Desired functionality</span>
					{!! replaceTags($ticket->desired) !!}
				</div>
			@endif

			@if ($ticket->etc)
				<div class="field">
					<span class="label">Other comments</span>
					{!! replaceTags($ticket->etc) !!}
				</div>
			@endif
		</div>

		<div class="column">
			<div class="field is-one-line">
				<span class="label">Status:</span>
				{{ $ticket->isClosed() ? 'Closed on ' . $ticket->closedOn() . ' by ' . $ticket->closedBy->name : 'Opened on ' . $ticket->openedOn() }}
			</div>
			@if (!$ticket->isClosed())
				@if ($ticket->isUrgent)
					<div class="field" style="color: red">
						<span class="icon">
							<i class="fa fa-exclamation-circle"></i>
						</span>
						Ticket is urgent
					</div>
				@endif

				<div class="field">
					@if (Auth::user()->isSubscribedTo($ticket))
						You will be notified when updates are made to this ticket. <a href="/tickets/{{ $ticket->id }}/subscribe">(Unsubscribe)</a>
					@else
						<a href="/tickets/{{ $ticket->id }}/subscribe">Subscribe</a> to be notified when updates are made to this ticket.
					@endif
				</div>
			@endif

			@if ($ticket->response)
				<div class="field">
					<span class="label">Response</span>
					{!! replaceTags($ticket->response) !!}
				</div>
			@endif
		</div>
	</div>

	@if ($ticket->comments && $ticket->comments->count() > 0 || !$ticket->isClosed())
		<hr>
	@endif
	@if ($ticket->comments)
	<div class="ticket-comments">
		@foreach ($ticket->comments as $comment)
			<article class="message is-primary">
				<header class="message-header">
					<p>
						{!! $comment->author->present() !!} said...
					</p>
					<p class="is-pulled-right">{{ $comment->created_at->diffForHumans() }}</p>
				</header>
				<div class="message-body">
					{!! $comment->comment !!}
				</div>
			</article>
		@endforeach
	</div>
	@endif
	@if (!$ticket->isClosed())
		@component('components.form', ['action' => "/tickets/{$ticket->id}/comment", 'visible' => 'true'])
			@component('components.form.textarea', ['name' => 'comment', 'label' => 'Add a comment'])
				@slot('value')
					@if(isset($language))
						{{ $language->notes }}
					@endif
				@endslot
			@endcomponent
		@endcomponent
	@endif
@endsection

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

			@if ($ticket->comments)
				<div class="field">
					<span class="label">Other comments</span>
					{!! replaceTags($ticket->comments) !!}
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
						You will be notified when the status changes. <a href="/tickets/{{ $ticket->id }}/subscribe">(Unsubscribe)</a>
					@else
						<a href="/tickets/{{ $ticket->id }}/subscribe">Subscribe</a> to be notified when the status changes.
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
@endsection

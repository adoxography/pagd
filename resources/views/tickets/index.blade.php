@extends('layout')

@section('title')
	Ticket list
@endsection

@section('content')
	<div class="field">
		<a class="button is-primary" href="/tickets/create">Open a new ticket</a>
	</div>

	<alg-tabs>
		<alg-tab name="Open" :selected="true">
			@if ($open->count() > 0)
				<ul>
					@foreach ($open as $ticket)
						<li>{!! $ticket->present('link') !!}</li>
					@endforeach
				</ul>
			@else
				No open requests
			@endif
		</alg-tab>
		<alg-tab name="Closed">
			@if ($closed->count() > 0)
				<ul>
					@foreach ($closed as $ticket)
						<li>{!! $ticket->present('link') !!}</li>
					@endforeach
				</ul>
			@else
				No closed requests
			@endif
		</alg-tab>
	</alg-tabs>
@endsection
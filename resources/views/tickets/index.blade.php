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
			@if (count($open) > 0)
				<alg-tabs>
					@foreach ($open as $name => $tickets)
						<alg-tab name="{{ $name }}" @if($loop->first) :selected="true" @endif>
							<table class="table">
								<thead>
									<tr>
										<th>Ticket</th>
										<th>Date opened</th>
									</tr>
								</thead>
								<tbody>
									@foreach ($tickets as $ticket)
										<tr>
											<td>{!! $ticket->present('link') !!}</td>
											<td>{!! $ticket->openedOn() !!}</td>
										</tr>
									@endforeach
								</tbody>
							</table>
						</alg-tab>
					@endforeach
				</alg-tabs>
			@else
				No open tickets
			@endif
		</alg-tab>
		<alg-tab name="Closed">
			@if (count($closed) > 0)
				<alg-tabs>
					@foreach ($closed as $name => $tickets)
						<alg-tab name="{{ $name }}" @if($loop->first) :selected="true" @endif>
							<table class="table">
								<thead>
									<tr>
										<th>Ticket</th>
										<th>Date opened</th>
										<th>Date closed</th>
									</tr>
								</thead>
								<tbody>
									@foreach ($tickets as $ticket)
										<tr>
											<td>{!! $ticket->present('link') !!}</td>
											<td>{{ $ticket->openedOn() }}</td>
											<td>{{ $ticket->closedOn() }}</td>
										</tr>
									@endforeach
								</tbody>
							</table>
						</alg-tab>
					@endforeach
				</alg-tabs>
			@else
				No closed tickets
			@endif
		</alg-tab>
	</alg-tabs>
@endsection

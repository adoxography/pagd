@extends('layout')

@section('title')
	Ticket list
@endsection

@section('content')
	<div class="field">
		<a class="button is-primary" href="/tickets/create">Open a new ticket</a>
	</div>
	{{ $tickets->links() }}

	<table class="table" style="width: 100%;">
		<thead>
			<tr>
				<th>Category</th>
				<th>Title</th>
				<th>Status</th>
				<th>Last Updated</th>
			</tr>
		</thead>
		<tbody>
		@foreach ($tickets as $ticket)
			<tr style="{{ $ticket->isClosed() ? '' : 'background: aliceblue;' }}">
				<td>
					{{ $ticket->type->name }}
				</td>
				<td>
					{!! $ticket->present('link') !!}
				</td>
				<td>
					{{ $ticket->isClosed() ? 'Closed' : 'Open' }}
				</td>
				<td>
					{{ $ticket->updated_at->toFormattedDateString() }}
				</td>
			</tr>
		@endforeach
		</tbody>
	</table>
	{{ $tickets->links() }}
 @endsection

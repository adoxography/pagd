@extends('layout', ['title' => 'Activity log'])

@section('title')
	Activity log
@endsection

@section('content')
	<table class="table is-striped">
		<thead>
			<hr>
				<td>Contributor</td>
				<td>Data item</td>
				<td>Language</td>
				<td>Field</td>
				<td>Old value</td>
				<td>New value</td>
				<td>Time</td>
			</hr>
		</thead>
		<tbody>
			@foreach($log as $entry)
				<tr>
					<td>{!! $entry['revision']->userResponsible()->renderLink() !!}</td>
					<td>{!! $entry['model']->renderLink() !!}</td>
					<td>
						@if($entry['model']->language)
							{!! $entry['model']->language->renderLink() !!}
						@else
							N/A
						@endif
					</td>
					<td>
						@if($entry['revision']->key != 'created_at')
							{{ $entry['revision']->fieldName() }}
						@else
							N/A
						@endif
					</td>
					<td>{!! condenseString($entry['revision']->oldValue()) !!}</td>
					<td>
						{!! $entry['revision']->fieldName() == 'created_at' ? '[Created]' : condenseString($entry['revision']->newValue()) !!}
					</td>
					<td>
						{{ Carbon\Carbon::parse($entry['revision']->created_at)->setTimezone('America/Winnipeg')->toDayDateTimeString() }}
					</td>
				</tr>
			@endforeach
		</tbody>
	</table>
@endsection
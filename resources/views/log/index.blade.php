@extends('layout', ['title' => 'Activity log'])

@section('title')
	Activity log
@endsection

@section('content')
	{{ $revisions->links() }}

	<table class="table is-striped">
		<thead>
			<tr>
				<td>Contributor</td>
				<td>Data item</td>
				<td>Language</td>
				<td>Field</td>
				<td>Old value</td>
				<td>New value</td>
				<td>Time</td>
			</tr>
		</thead>
		<tbody>
			@foreach($log as $entry)
				<tr>
					<td>{!! $entry['revision']->userResponsible()->present('link') !!}</td>
					<td>{!! method_exists($entry['model'], 'present') ? $entry['model']->present('link') : $entry['model']->renderLink() !!}</td>
					<td>
						@if($entry['model']->language)
							{!! $entry['model']->language->present('link') !!}
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
						{!! strpos($entry['revision']->fieldName(), 'created') !== false ? '[Created]' : condenseString($entry['revision']->newValue()) !!}
					</td>
					<td>
						{{ Carbon\Carbon::parse($entry['revision']->created_at)->setTimezone('America/Winnipeg')->toDayDateTimeString() }}
					</td>
				</tr>
			@endforeach
		</tbody>
	</table>

	{{ $revisions->links() }}
@endsection
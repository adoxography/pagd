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
					<td>{!! $entry['revision']->oldValue() !!}</td>
					<td>
						@if($entry['revision']->key != 'created_at')
							{!! $entry['revision']->newValue() !!}
						@else
							[Created]
						@endif
					</td>
				</tr>
			@endforeach
		</tbody>
	</table>
@endsection
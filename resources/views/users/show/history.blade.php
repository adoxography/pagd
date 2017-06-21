@extends('users.show')

@section('content')
	<table class="table is-striped">
		<thead>
			<tr>
				<th>Data</th>
				<th>Language</th>
				<th>Field</th>
				<th>Old value</th>
				<th>New value</th>
				<th>Time</th>
			</tr>
		</thead>
		<tbody>
			@foreach($user->revisions as $revision)
				@php
					$model = $revision->historyOf();
				@endphp

				@if($model)
					<tr>
						<td>{!! $model->renderLink() !!}</td>
						<td>{!! $model->language ? $model->language->renderLink() : 'N/A' !!}</td>
						<td>{{ $revision->fieldName() == 'created_at' ? 'N/A' : $revision->fieldName() }}</td>
						<td>{!! condenseString($revision->oldValue()) !!}</td>
						<td>{!! $revision->fieldName() == 'created_at' ? '[Created]' : condenseString($revision->newValue()) !!}</td>
						<td>{{ Carbon\Carbon::parse($revision->created_at)->setTimezone('America/Winnipeg')->toDayDateTimeString() }}</td>
					</td>
				@endif
			@endforeach
		</tbody>
	</table>
@endsection
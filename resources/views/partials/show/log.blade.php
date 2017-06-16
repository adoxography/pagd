@php
$userIDs = $model->revisionHistory->pluck('user_id');
$users = App\User::whereIn('id', $userIDs)->orderBy('name')->get();
@endphp

@if($users->count() > 0)
	<div class="field">
		<span class="label">Contributors to this record:</span>
		@foreach($users as $user)
			{!! $user->renderLink() !!}@if(!$loop->last), @endif
		@endforeach
	</div>
	<br />
@endif

<div class="field">
	<span class="label">Changelog</span>
	<table class="table is-striped">
		<thead>
			<hr>
				<td>Contributor</td>
				<td>Field</td>
				<td>Old value</td>
				<td>New value</td>
				<td>Time</td>
			</hr>
		</thead>
		<tbody>
			@foreach($model->revisionHistory as $revision)
			<tr>
				<td>{!! $revision->userResponsible() ? $revision->userResponsible()->renderLink() : 'Anonymous' !!}</td>
				<td>{!! $revision->fieldName() !!}</td>
				<td>{!! condenseString($revision->oldValue()) !!}</td>
				<td>{!! $revision->fieldName() == '[created]' ? '' : condenseString($revision->newValue()) !!}</td>
				<td>{{ Carbon\Carbon::parse($revision->created_at)->setTimezone('America/Winnipeg')->toDayDateTimeString() }}</td>
			</tr>
			@endforeach
		</tbody>
	</table>
</div>
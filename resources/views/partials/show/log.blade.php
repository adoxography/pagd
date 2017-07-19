@php

$userIDs = $model->revisionHistory->pluck('user_id');
$users = App\User::whereIn('id', $userIDs)->orderBy('lastName')->get();

$creation = $model->revisionHistory->where('key', 'created_at')->first();
@endphp

@if($users->count() > 0)
	<div class="field">
		<span class="label">Contributors to this record:</span>
		@foreach($users as $user)
			{!! $user->present('link') !!}@if(!$loop->last), @endif
		@endforeach
	</div>
	<br />
@endif

@if($creation)
	<p>Created on <strong>{{ parseTime($creation->created_at) }}</strong>

	@if($creation->user_id)
		by <strong>{{ $users->where('id', $creation->user_id)->first()->name }}</strong></p>
	@endif
@endif

@if($model->revisionHistory->count() > 0)
	@php
		$revision = $model->revisionHistory->last();
	@endphp

	<p>Last modified on <strong>{{ parseTime($revision->created_at) }}</strong>

	@if($revision->user_id)
		by <strong>{{ $users->where('id', $revision->user_id)->first()->name }}</strong></p>
	@endif
@endif
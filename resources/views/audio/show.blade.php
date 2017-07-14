@extends('layout')

@section('title')
	<label>Audio clip details</label>
@endsection

@include('components.show-icons', ['model' => $audio])

@section('content')
	<div class="columns">
		<div class="column">
			<div class="field">
				<label class="label">Name</label>
				{{ $audio->name }}
			</div>
		</div>

		<div class="column">
			<div class="field">
				<label class="label">Clip</label>
				{!! $audio->present('player') !!}
			</div>
		</div>

		<div class="column">
			<div class="field">
				<label class="label">Language</label>
				{!! $audio->language->present('link') !!}
			</div>
		</div>
	</div>

	@if (isset($audio) && $audio->comments)
		<div class="field">
			<label class="label">Comments</label>
			{!! replaceTags($audio->comments) !!}
		</div>
	@endif
@endsection
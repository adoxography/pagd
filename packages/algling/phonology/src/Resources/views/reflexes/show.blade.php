@extends('layout', ['title' => $reflex->name])

@section('title')
	<label>Reflex details:</label>
	{!! $reflex->parent->present()->as('link', 'reflexes')->before('language', 'link') . '&nbsp>&nbsp' .  $reflex->reflex->present()->as('link', 'reflexes')->before('language', 'link') !!}
@endsection

@include('components.show-icons', ['model' => $reflex])

@section('content')
	<div class="columns">
		<div class="column">
			<div class="field">
				<span class="label">Environment</span>
				{{ $reflex->environment or 'Elsewhere case' }}
			</div>
		</div>
		<div class="column">

			@if($reflex->publicNotes)
				<div class="field">
					<span class="label">Public notes</span>
					{!! replaceTags($reflex->publicNotes, $reflex->reflex->language_id) !!}
				</div>
			@endif

			@if ($reflex->privateNotes && Auth::user() && Auth::user()->hasPermissionTo('add content'))
				<div class="field">
					<span class="label">Private notes</span>
					{!! replaceTags($reflex->privateNotes, $reflex->reflex->language_id) !!}
				</div>
			@endif
		</div>
	</div>

	<div class="field">
		<span class="label">Sources</span>
		@include('components.model.sourcelist', ['sources' => $reflex->sources])
	</div>
@endsection
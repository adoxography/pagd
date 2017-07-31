@extends('layout')

@section('title')
	<label>Phoneme example details:</label>
	{!! $example->present()->as('name', 'bold')->then('language')->as('link') !!}
@endsection

@include('components.show-icons', ['model' => $example])

@section('content')
	<div class="columns">
		<div class="column">
			<div class="field">
				<span class="label">Translation</span>
				{{ $example->translation }}
			</div>
		</div>
		<div class="column">
			<div class="field">
				<span class="label">Phonemic representation</span>
				{{ $example->phonemicRepresentation }}
			</div>
		</div>
		@if ($example->parent)
			<div class="column">
				<div class="field">
					<span class="label">Parent</span>
					{!! $example->parent->present('link')->then('language')->as('link') !!}
				</div>
			</div>
		@endif
	</div>

	<div class="columns">
		@if($example->publicNotes)
			<div class="column">
				<div class="field">
					<span class="label">Public notes</span>
					{!! replaceTags($example->publicNotes, $example->language_id) !!}
				</div>
			</div>
		@endif

		@if($example->privateNotes && Auth::user() && Auth::user()->hasPermissionTo('add content'))
			<div class="column">
				<div class="field">
					<span class="label">Private notes</span>
					{!! replaceTags($example->privateNotes, $example->language_id) !!}
				</div>
			</div>
		@endif
	</div>
@endsection
@extends('words.examples.show')

@section('content')
	<div class="columns">
		<div class="column">
			@if ($example->form)
				<div class="field">
					<span class="label">Form</span>
					{!! $example->form->present('stub') !!}
				</div>
			@endif
			<div class="field">
				<span class="label">Morphology</span>
				{!! $example->present('phonemicForm') !!}
				{!! $example->printMorphemes() !!}
			</div>
			<div class="field">
				<span class="label">Translation</span>
				{{ $example->translation }}
			</div>
		</div>
		<div class="column">
			@if($example->parent)
				<div class="field">
					<span class="label">Historical notes</span>
					Parent: {!! $example->parent->present()->as('unique', 'link')->then('language')->as('link') !!}
				</div>
			@endif
			@if($example->publicNotes)
				<div class="field">
					<span class="label">Notes</span>
					{!! replaceTags($example->publicNotes, $example->language->id) !!}
				</div>
			@endif
			@if(Auth::user() && Auth::user()->hasPermissionTo('add content') && $example->privateNotes)
				<div class="field">
					<span class="label">Private notes</span>
					{!! replaceTags($example->privateNotes, $example->language->id) !!}
				</div>
			@endif
		</div>
	</div>
	<span class="label">Sources</span>
	@include('components.model.sourcelist', ['sources' => $example->sources])
@endsection

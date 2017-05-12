@extends('word::examples.show')

@section('content')
	<div class="columns">
		<div class="column">
			<div class="field">
				<span class="label">Form</span>
				{!! $example->form->renderHTML() !!}
			</div>
			<div class="field">
				<span class="label">Morphology</span>
				{{ $example->phonemicForm or $example->name }}
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
					<em>Parent:</em>{{ $example->parent->renderHTML() }} ({!! $example->parent->language->renderHTML() !!})
				</div>
			@endif
			@if($example->publicNotes)
				<div class="field">
					<span class="label">Notes</span>
					{!! replaceTags($example->publicNotes, $example->language_id) !!}
				</div>
			@endif
			@if(Auth::user() && Auth::user()->permissions->canEdit && $example->privateNotes)
				<div class="field">
					<span class="label">Private notes</span>
					{!! replaceTags($example->privateNotes, $example->language_id) !!}
				</div>
			@endif
		</div>
	</div>
	<span class="label">Sources</span>
	@include('components.model.sourcelist', ['sources' => $example->sources])
@endsection
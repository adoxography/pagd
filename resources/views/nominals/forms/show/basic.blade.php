@extends('nominals.forms.show')

@section('details')
	<div class="columns">
		<div class="column">
			<div class="field">
				<span class="is-one-line">
					<span class="label">Paradigm:</span>
					<a href="/nominals/paradigms/{{ $form->structure->paradigm_id }}">{{ $form->structure->paradigm->name }}</a>
				</span>

				@if($form->structure->pronominalFeature)
					<span class="is-one-line">
						<span class="label">Pronominal feature:</span>
						{{ $form->structure->pronominalFeature->name }}
					</span>
				@endif

				@if($form->structure->nominalFeature)
					<span class="is-one-line">
						<span class="label">Nominal feature:</span>
						{{ $form->structure->nominalFeature->name }}
					</span>
				@endif
			</div>

			<div class="field">
				<span class="label">Morphology</span>
				{!! $form->present('phonemicForm') !!}
				{!! $form->printMorphemes() !!}
			</div>

			@if($form->parent)
				<div class="field">
					<span class="label">Historical parent form</span>
					{!! $form->parent->present()->as('link')->then('language')->as('link', 'verbs') !!}
					{!! $form->parent->printMorphemes() !!}
				</div>
			@endif

			@if($form->historicalNotes)
				<div class="field">
					<span class="label">Historical notes</span>
					{!! replaceTags($form->historicalNotes, $form->language_id) !!}
				</div>
			@endif
		</div>
		<div class="column">
			<div class="field">
				@if($form->isStemless() && $form->examples()->count() > 0)
					<span class="label">Translation</span>
					{{ $form->examples()->first()->translation }}
				@else
					<span class="label">Examples @component('components.model.add-icon', ['uri' => "/forms/{$form->id}/addExample"]) @endcomponent</span>
					@if(count($form->examples) > 0)
						<ul>
							@foreach($form->examples as $example)
								<li>{!! $example->present('link') !!} '{{ $example->translation }}'</li>
							@endforeach
						</ul>
					@else
						None
					@endif
				@endif
			</div>

			@if($form->allomorphyNotes)
				<div class="field">
					<span class="label">Allomorphy</span>
					{!! replaceTags($form->allomorphyNotes, $form->language_id) !!}
				</div>
			@endif

			@if($form->usageNotes)
				<div class="field">
					<span class="label">Usage notes</span>
					{!! replaceTags($form->usageNotes, $form->language_id) !!}
				</div>
			@endif

			@if(Auth::user() && Auth::user()->hasPermissionTo('add content') && $form->privateNotes)
				<div class="field">
					<span class="label">Private notes</span>
					{!! replaceTags($form->privateNotes, $form->language_id) !!}
				</div>
			@endif

			<div class="field">
				<span class="label">Sources</span>
				@include('components.model.sourcelist', ['sources' => $form->sources])
			</div>
		</div>
	</div>
@endsection

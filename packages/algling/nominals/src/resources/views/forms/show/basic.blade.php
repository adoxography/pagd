@extends('nom::forms.show')

@section('content')
	<div class="columns">
		<div class="column">
			<div class="field">
				<span class="label">Paradigm</span>
				<a href="/nominals/paradigms/{{ $form->structure->paradigm_id }}">{{ $form->structure->paradigm->name }}</a>

				@if($form->structure->pronominalFeature)
					<span class="is-one-line">
						<label class="label">Pronominal feature:</label>
						{{ $form->structure->pronominalFeature->name }}
					</span>
				@endif
				
				@if($form->structure->nominalFeature)
					<span class="is-one-line">
						<label class="label">Nominal feature:</label>
						{{ $form->structure->nominalFeature->name }}
					</span>
				@endif

				<span class="is-one-line">
					<label class="label">Mode:</label>
					{{ $form->structure->mode->name }}
				</span>
			</div>

			<div class="field">
				<span class="label">Morphology</span>
				{{ $form->phonemicForm or $form->name }}
				{!! $form->printMorphemes() !!}
			</div>

			<div class="field">
			</div>
		</div>
		<div class="column">
			<div class="field">
				<span class="label">Examples @component('components.model.add-icon', ['uri' => "/forms/{$form->id}/addExample"]) @endcomponent</span>
				@if(count($form->examples) > 0)
					<ul>
						@foreach($form->examples as $example)
							<li><a href="/examples/{{ $example->id }}">{{ $example->name }}</a>
						@endforeach
					</ul>
				@else
					None
				@endif
			</div>

			@if($form->usageNotes)
				<div class="field">
					<span class="label">Usage notes</span>
					{!! replaceTags($form->usageNotes, $form->language_id) !!}
				</div>
			@endif

			@if($form->allomorphyNotes)
				<div class="field">
					<span class="label">Allomorphy</span>
					{!! replaceTags($form->allomorphyNotes, $form->language_id) !!}
				</div>
			@endif

			@if($form->parent || $form->historicalNotes)
				<div class="field">
					<span class="label">Historical notes</span>
					@if($form->parent)
						<em>Parent form:</em> {!! $form->parent->renderHTML() !!} ({!! $form->parent->language->renderHTML() !!})
					@endif
					@if($form->historicalNotes)
						{!! replaceTags($form->historicalNotes, $form->language_id) !!}
					@endif
				</div>
			@endif

			@if(Auth::user() && Auth::user()->permissions->canEdit && $form->privateNotes)
				<div class="field">
					<span class="label">Private notes</span>
					{!! replaceTags($form->privateNotes, $form->language_id) !!}
				</div>
			@endif
		</div>
	</div>
	<div class="field">
		<span class="label">Sources</span>
		@include('components.model.sourcelist', ['sources' => $form->sources])
	</div>
@endsection
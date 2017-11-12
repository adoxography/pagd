@extends('verb::forms.show')

@section('content')
	<div class="columns is-multiline">
		<div class="column is-half">
			<div class="field">
				<span class="label">
					Description
					<alg-tooltip
						label="Verb form descriptions are given in the following&#10;order:&#10;&#10;Subject—(Primary object)+(Secondary object)&#10;Class&#10;Order&#10;Mode"
						size="large"
						placement="top"
					>
						<a class="icon">
							<span class="icon is-small">
								<i class="fa fa-question-circle-o"></i>
							</span>
						</a>
					</alg-tooltip>
				</span>
				{!! $form->structure->present()->then('modifiers') !!}
				<br />
				<a href="/verbs/search/paradigm/results?languages%5B%5D={{ $form->language->name }}&languages%5B%5D_id={{ $form->language_id }}&classes[]={{ $form->structure->class_id }}&subclasses[]={{ $form->structure->subclass }}&orders[]={{ $form->structure->order_id }}&affirmative={{ $form->structure->isNegative ? '0' : '1' }}&negative={{ $form->structure->isNegative or '0' }}&diminutive={{ $form->structure->isDiminutive or '0' }}&modeSelect=selectModes&modes[]={{ $form->structure->mode_id }}">View paradigm</a>
			</div>
			<div class="field">
				<span class="label">Morphology</span>
				{!! $form->present('phonemicForm') !!}
				{!! $form->printMorphemes() !!}
			</div>
		</div>
		<div class="column is-half">
			<div class="field">
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
						<em>Parent form:</em> {!! $form->parent->present()->as('link')->then('language')->as('link', 'verbs') !!}
					@endif
					@if($form->historicalNotes)
						{!! replaceTags($form->historicalNotes, $form->language_id) !!}
					@endif
				</div>
			@endif

			@if(Auth::user() && Auth::user()->hasPermissionTo('add content') && $form->privateNotes)
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

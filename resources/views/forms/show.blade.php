@extends('layout', ['title' => "{$form->surfaceForm} ({$form->language->name})"])

@section('content')

<div class="heading">
	<h1 class="title">Form Details</h1>
</div>
<br />

@component('components.model', ['uri' => "/forms/{$form->id}", 'history' => $form->revisionHistory])
	@slot('header')
		{{ $form->surfaceForm }} <span class="detail-title-language">(<a href="/languages/{{ $form->language_id }}">{{ $form->language->name }}</a>)</span>
	@endslot

	<model-tab name="Basic Details" selected = "true">
		<div class="column is-half">
			@component('components.model.field', ['width' => 'is-12'])
				@slot('label')
					Description
					<a class="icon">
						<span class="icon is-small" title="?">
							<i class="fa fa-question-circle-o"></i>
						</span>
					</a>
				@endslot
				<ul class="description-list">
					<li>
						{{ $form->formType->getArguments() }}
					</li>
					<li>
						<a href="/classes/{{ $form->formType->class_id }}">{{ $form->formType->formClass->name }}</a>
					</li>
					<li>
						<a href="/orders/{{ $form->formType->order_id }}">{{ $form->formType->order->name }}</a>
					</li>
					<li>
						<a href="/modes/{{ $form->formType->mode_id }}">{{ $form->formType->mode->name }}</a>
					</li>
					@if($form->formType->hasModifiers())
						<li>(
							@if($form->formType->isNegative)
								Negative
							@endif									
							@if($form->formType->isDiminutive)
								Diminutive
							@endif									
							@if(isset($form->formType->isAbsolute))
								@if($form->formType->isAbsolute)
									Absolute
								@else
									Objective
								@endif
							@endif
						)</li>
					@endif
				</ul>
				</br />
				<a href="/search/paradigm?languages[]={{ $form->language_id }}&classes[]={{ $form->formType->class_id }}&orders[]={{ $form->formType->order_id }}&affirmative={{ $form->formType->isNegative ? '0' : '1' }}&negative={{ $form->formType->isNegative or '0' }}&diminutive={{ $form->formType->isDiminutive or '0' }}&modeSelect=modeSelect&modes[]={{ $form->formType->mode_id }}" style="text-decoration: underline;"><em>View Paradigm</em></a>
			@endcomponent

			@component('components.model.field', ['width' => 'is-12', 'label' => 'Morphology'])
				@if($form->phoneticForm)
					<p>{{ $form->phoneticForm }}</p>
				@else
					<p>{{ str_replace('*', '', $form->surfaceForm) }}</p>
				@endif
					{!! $form->printMorphemes() !!}
				@if($form->initialChange)
					(Affected by initial change)
				@endif
			@endcomponent

			@component('components.model.field', ['width' => 'is-12', 'label' => 'Duplicates'])
				@if(count($form->duplicates) > 0)
					<ul>
						@foreach($form->duplicates as $duplicate)
							<li><a href="/forms/{{ $duplicate->id }}">{{ $duplicate->surfaceForm }}</a></li>
						@endforeach
					</ul>
				@else
					None
				@endif
			@endcomponent
		</div>

		<div class="column is-half">
			@if($form->usageNotes)
				@component('components.model.field', ['width' => 'is-12', 'label' => 'Usage Notes'])
					{{ $form->usageNotes }}
				@endcomponent
			@endif	
			@if($form->allomorphyNotes)
				@component('components.model.field', ['width' => 'is-12', 'label' => 'Allomorphy Notes'])
					{{ $form->allomorphyNotes }}
				@endcomponent
			@endif
			@component('components.model.field', ['width' => 'is-12', 'label' => 'Historical Notes'])
				<p>
					<em>Parent Form: </em>
					@if($form->parent)
						<a href="/forms/{{ $form->parent_id }}">{{ $form->parent->uniqueName() }}</a> (<a href="/languages/{{ $form->parent->language_id }}">{{ $form->parent->language->name }}</a>)
					@else
						Unknown/Unclear
					@endif
				</p>
				@if($form->changeType)
					<em>Change Type: </em>{{ $form->changeType->name }}
				@endif
				@if($form->historicalNotes)
					{{ $form->historicalNotes }}
				@endif
			@endcomponent											
			@if(Auth::user() && $form->comments)
				@component('components.model.field', ['width' => 'is-12', 'label' => 'Private Comments'])
					{{ $form->comments }}
				@endcomponent
			@endif
		</div>

		@component('components.model.field', ['width' => 'is-12', 'label' => 'Sources (hover over a source for the full citation)'])
			@include('components.model.sourcelist', ['sources' => $form->sources])
		@endcomponent

	</model-tab>

	<model-tab name="Cognates">
		@include('components.model.cognates', ['list' => $cognates, 'current' => $form, 'model' => 'forms'])
	</model-tab>

	<model-tab name="Examples">
		@component('components.model.field', ['width' => 'is-half', 'label' => 'Examples'])
			@slot('label')
				Examples @component('components.model.add-icon', ['uri' => "/forms/{$form->id}/addExample"]) @endcomponent
			@endslot
			@if(count($form->examples) > 0)
				<ul>
				@foreach($form->examples as $example)
					<li><a href="/examples/{{ $example->id }}">{{ $example->name }}</a></li>
				@endforeach
				</ul>
			@else
				None
			@endif
		@endcomponent
	</model-tab>
@endcomponent

@stop
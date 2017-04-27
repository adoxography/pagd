@extends('layout', ['title' => "{$form->formType->summary} ({$form->language->name})"])

@section('content')

<div class="heading">
	<h1 class="title">Form Details</h1>
</div>
<br />

@component('components.model', ['uri' => "/empty-forms/{$form->id}", 'model' => $form])
	@slot('header')
		{{ $form->formType->summary }} <span class="detail-title-language">(<a href="/languages/{{ $form->language_id }}">{{ $form->language->name }}</a>)</span>
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
				<a href="/search/paradigm?languages[]={{ $form->language_id }}&classes[]={{ $form->formType->class_id }}&orders[]={{ $form->formType->order_id }}&affirmative={{ $form->formType->isNegative ? '0' : '1' }}&negative={{ $form->formType->isNegative or '0' }}&diminutive={{ $form->formType->isDiminutive or '0' }}&modeSelect=selectModes&modes[]={{ $form->formType->mode_id }}" style="text-decoration: underline;"><em>View Paradigm</em></a>
			@endcomponent
		</div>

		<div class="column is-half">
			@include('components.model.text', ['width' => 'is-12', 'label' => 'Historical Notes', 'text' => $form->historicalNotes, 'language_id' => $form->language_id])						
			@if(Auth::user())
				@include('components.model.text', ['width' => 'is-12', 'label' => 'Private Comments', 'text' => $form->comments, 'language_id' => $form->language_id])
			@endif
		</div>

		@component('components.model.field', ['width' => 'is-12', 'label' => 'Sources (hover over a source for the full citation)'])
			@include('components.model.sourcelist', ['sources' => $form->sources])
		@endcomponent

	</model-tab>
@endcomponent

@stop
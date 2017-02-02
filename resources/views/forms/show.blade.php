@extends('layout', ['title' => "{$form->surfaceForm} ({$form->language->name})"])

@section('content')
	<div id="root">
		<div class="heading">
			<h1 class="title">Form Details</h1>
		</div>
		<br />

		@component('components.model', ['header' => $form->surfaceForm, 'uri' => "/forms/{$form->id}", 'history' => $form->revisionHistory])

			<model-tab name="Basic Details" selected = "true">
				<div class="column is-half" style="padding: 0;">
					@component('components.model.field', ['width' => 'is-12'])
						@slot('label')
							Description
							<a class="icon">
								<span class="icon is-small" title="?">
									<i class="fa fa-question-circle-o"></i>
								</span>
							</a>
						@endslot
						<ul class="description-list" style="list-style: none;">
							<li>
								{{ $form->formType->subject->name }}
								@if($form->formType->primaryObject)
									- {{ $form->formType->primaryObject->name }}
								@endif
								@if($form->formType->secondaryObject)
									+ {{ $form->formType->secondaryObject->name }}
								@endif
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
							<p>{{ $form->surfaceForm }}</p>
						@endif
						<div class="columns">
							@foreach($form->morphemeList() as $morpheme)
								<div class="column is-narrow">
								@if($morpheme instanceof App\Morpheme)
									@if($morpheme->name !== 'V')
										<a href='/morphemes/{{ $morpheme->id }}'>{{ str_replace('-', '', $morpheme->name) }}</a>
									@else
										{{ $morpheme->name }}
									@endif

									<p><a href="/glosses/{{ $morpheme->gloss_id }}"><span class="gloss">{{ $morpheme->gloss->abv }}</span></a></p>
								@else
									{{ $morpheme['name'] }}
									@if(Auth::user())
										<a class="icon is-danger">
											@if($morpheme['exists'])
											<span class="icon is-small" title="Disambiguation required">
												<i class="fa fa-exclamation-triangle"></i>
											</span>
											@else
											<span class="icon is-small" title="No such morpheme in the database">
												<i class="fa fa-exclamation-triangle"></i>
											</span>
											@endif
										</a>
									@endif
								@endif
								</div>

								@if(!$loop->last)
									<div class="column is-narrow" style="padding-left: 0; padding-right: 0;">
									-
									</div>
								@endif
							@endforeach
						</div>
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

				<div class="column is-half" style="padding: 0;">
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
				<div class="column">
				@component('components.model.field', ['label' => 'Cognates'])
					@include('components.model.cognates', ['list' => $cognates, 'current' => $form, 'model' => 'forms'])
				@endcomponent
				</div>
			</model-tab>

			<model-tab name="Examples">
				@component('components.model.field', ['width' => 'is-half', 'label' => 'Examples'])
					@if(count($form->examples) > 0)
						<!-- fill in later -->
					@else
						None
					@endif
				@endcomponent
			</model-tab>
		@endcomponent
	</div>

@stop
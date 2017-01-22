@extends('layout')

@section('content')
	<div id="root">
		<div class="heading">
			<h1 class="title">Form Details</h1>
		</div>
		<br />

		<model-card>
			<template slot="header">
				<em>{{ $form->surfaceForm }}</em>
				<span style="margin-left: .5rem">
					(<a href="/languages/{{ $form->language_id }}">{{ $form->language->name }}</a>)
				</span>
			</template>

			<model-card-tab name="Basic Details" selected = "true">
				<div class="column is-half" style="padding: 0;">
					<field-card width="is-12">
						<template slot="label">
							<p class="card-header-title" style="margin-bottom: 0;">
								Description
								<a class="icon">
									<span class="icon is-small" title="?">
										<i class="fa fa-question-circle-o"></i>
									</span>
								</a>
							</p>
						</template>
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
								<a href="/classes/{{ $form->formType->order_id }}">{{ $form->formType->order->name }}</a>
							</li>
							<li>
								<a href="/classes/{{ $form->formType->mode_id }}">{{ $form->formType->mode->name }}</a>
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
						<br />
					</field-card>
					<field-card width="is-12">
						<template slot="label">
							<p class="card-header-title">Morphology</p>
						</template>
						@if($form->phoneticForm)
							<p>{{ $form->phoneticForm }}</p>
						@else
							<p>{{ $form->surfaceForm }}</p>
						@endif
						<p>
							@if(count($form->morphemes) > 0)
								@foreach($form->morphemes as $morpheme)
									@if($morpheme->name !== 'V')
										<a href='/morphemes/{{ $morpheme->id }}'>{{ $morpheme->name }}</a>
									@else
										{{ $morpheme->name }}
									@endif

									@if(!$loop->last)
										-
									@endif
								@endforeach
							@else
								Unknown/Unclear
							@endif
						</p>
					</field-card>

					<field-card width="is-12">
						<template slot="label">
							<p class="card-header-title">Duplicates</p>
						</template>
						@if(count($form->duplicates) > 0)
							<!-- fill in later -->
						@else
							None
						@endif
					</field-card>
				</div>				
				<div class="column is-half" style="padding: 0;">
					@if($form->usageNotes)
						<field-card width="is-12">
							<template slot="label">
								<p class="card-header-title">Usage Notes</p>
							</template>
							{{ $form->usageNotes }}
						</field-card>
					@endif	
					@if($form->allomorphyNotes)
						<field-card width="is-12">
							<template slot="label">
								<p class="card-header-title">Allomorphy Notes</p>
							</template>
							{{ $form->allomorphyNotes }}
						</field-card>
					@endif	
					<field-card width="is-12">
						<template slot="label">
							<p class="card-header-title">Historical Notes</p>
						</template>
						<p>
							<em>Parent Form: </em>
							@if($form->parent)
								<a href="/forms/{{ $form->parent_id }}">{{ $form->parent->surfaceForm }} ({{ $form->parent->language->name }})</a>
							@else
								Unknown/Unclear
							@endif
						</p>
						@if($form->historicalNotes)
							{{ $form->historicalNotes }}
						@endif
					</field-card>											
					@if(Auth::user() && $form->comments)
						<field-card width="is-12">
							<template slot="label">
								<p class="card-header-title">Private Comments</p>
							</template>
							{{ $form->comments }}
						</field-card>
					@endif
				</div>

				<field-card width="is-12">
					<template slot="label">
						<p class="card-header-title">Sources (hover over a source for the full citation)</p>
					</template>
					@if(count($form->sources) > 0)
						<ol>
							@foreach($form->sources as $source)
								<li title="{{ $source->long }}">{{ $source->short }}</li>
							@endforeach
						</ol>
					@else
						None
					@endif
				</field-card>

			</model-card-tab>

			<model-card-tab name="Examples">
				<field-card width="is-half">
					<template slot="label">
						<p class="card-header-title">Examples</p>
					</template>
					@if(count($form->examples) > 0)
						<!-- fill in later -->
					@else
						None
					@endif
				</field-card>
			</model-card-tab>

			@if(Auth::user())
				<template slot="footer">
					<a class="card-footer-item" href = "/forms/{{ $form->id }}/edit">Edit</a>
					<a class="card-footer-item">Delete</a>
				</template>
			@endif
		</model-card>
	</div>

@stop
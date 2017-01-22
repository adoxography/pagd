@extends('layout')

@section('content')
	<div id="root">
		<div class="heading">
			<h1 class="title">Form Details</h1>
		</div>
		<br />
		<alg-message>
			<template slot="header">Some thoughts I had while putting this together...</template>
			<ul style="list-style: circle">
				<li>The morphology section needs labels, especially the phonemic representation, since it could be a phonemic representation or it could not be.</li>
				<li>The duplicate section should be hidden if there are no duplicates; I left it as it is just so it can be visualized easier.</li>
				<li>The ? icon doesn't pull up the information just yet, but it will. I'm trying to decide between a tooltip and a modal. Either way, I want it to activate on click, not on hover, because that gets distracting.</li>
			</ul>
		</alg-message>

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
							<p class="card-header-title">Description</p>
							<a class="card-header-icon">
								<span class="icon" title="?">
									<i class="fa fa-question-circle is-small"></i>
								</span>
							</a>
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

{{-- 				<field-card width="is-2">
					<template slot="label">
						<p class="card-header-title">Class</p>
					</template>
					<a href="/classes/{{ $form->formType->class_id }}">{{ $form->formType->formClass->name }}</a>
				</field-card>				
				<field-card width="is-2">
					<template slot="label">
						<p class="card-header-title">Order</p>
					</template>
					<a href="/classes/{{ $form->formType->order_id }}">{{ $form->formType->order->name }}</a>
				</field-card>				
				<field-card width="is-2">
					<template slot="label">
						<p class="card-header-title">Mode</p>
					</template>
					<a href="/classes/{{ $form->formType->mode_id }}">{{ $form->formType->mode->name }}</a>
				</field-card>
				<field-card width="is-half">
					<template slot="label">
						<p class="card-header-title">Argument Structure</p>
					</template>
					{{ $form->formType->subject->name }}
					@if($form->formType->primaryObject)
						- {{ $form->formType->primaryObject->name }}
					@endif
					@if($form->formType->secondaryObject)
						+ {{ $form->formType->secondaryObject->name }}
					@endif
				</field-card>

				<field-card width="is-half">
					<template slot="label">
						<p class="card-header-title">Morphemes</p>
					</template>
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
				</field-card>
				<field-card width="is-half">
					<template slot="label">
						<p class="card-header-title">Pronunciation</p>
					</template>
					@if($form->phoneticForm)
						{{ $form->phoneticForm }}
					@else
						Unknown/Unclear
					@endif
				</field-card>

				<field-card width="is-half">
					<template slot="label">
						<p class="card-header-title">Parent</p>
					</template>
					@if($form->parent)
						<a href="/forms/{{ $form->parent_id }}">{{ $form->parent->surfaceForm }} ({{ $form->parent->language->name }})</a>
					@else
						Unknown/Unclear
					@endif
				</field-card>

				<template slot="tags">
					@if($form->formType->isNegative)
						<div class="level-item">
							<span class="tag is-info">Negative</span>
						</div>	
					@endif
					@if($form->formType->isDiminutive)			
						<div class="level-item">
							<span class="tag is-info">Diminutive</span>
						</div>
					@endif
					@if(isset($form->formType->isAbsolute))
						<div class="level-item">
							<span class="tag is-info">
								@if($form->formType->isAbsolute)
									Absolute
								@else
									Objective
								@endif
							</span>
						</div>
					@endif
				</template> --}}

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

{{-- 		<br />

		<div class="box">
			<h4 class="title is-4">Sources</h4>
			<h6 class="subtitle is-6">Hover to see full citation</h6>
			<div class="content">
			@if(count($form->sources) > 0)
				<ol>
					@foreach($form->sources as $source)
						<li title="{{ $source->long }}">{{ $source->short }}</li>
					@endforeach
				</ol>
			@else
				None
			@endif
			</div>
		</div> --}}
	</div>

{{-- 	<div class = 'show'>
		<h1>{{ $form->surfaceForm }} (<a href = '/languages/{{ $form->language->id }}'>{{ $form->language->name }}</a>) (<a href = '/forms/{{ $form->id }}/edit'>Edit</a>)</h1>
		<table>
			<tr>
				<td class = 'label'>Phonetic Form</td>
				<td class = 'value'>
					@if($form->phoneticForm)
						{{ $form->phoneticForm }}
					@else
						Unknown
					@endif
				</td>
			</tr>
			<tr>
				<td class = 'label'>Morphemes</td>
				<td class = 'value'>
					@if(count($form->morphemes) > 0)
						@foreach($form->morphemes as $morpheme)
							@if($morpheme->name !== 'V')
								<a href = '/morphemes/{{ $morpheme->id }}'>
							@endif
							{{ $morpheme->name }}
							@if($morpheme->name !== 'V')
								</a>
							@endif
						@endforeach
					@else
						Unclear
					@endif
				</td>
			</tr>
			<tr>
				<td class = 'label'>Argument Structure</td>
				<td class = 'value'>
					{{ $form->formType->subject->name }}
					@if($form->formType->primaryObject)
						- {{ $form->formType->primaryObject->name }}
					@endif
					@if($form->formType->secondaryObject)
						+ {{ $form->formType->secondaryObject->name }}
					@endif
				</td>
			</tr>
			<tr>
				<td class = 'label'>Parent</td>
				<td class = 'value'>
					@if($form->parent)
						<a href = '/forms/{{ $form->parent->id }}'>{{ $form->parent->surfaceForm }}</a> (<a href = '/languages/{{ $form->parent->language->id }}'>{{ $form->parent->language->name }}</a>)
					@else
						Unknown
					@endif
				</td>
			<tr>
				<td class = 'label'>Class</td>
				<td class = 'value'>{{ $form->formType->formClass->name }}</td>
			</tr>
			<tr>
				<td class = 'label'>Order</td>
				<td class = 'value'>{{ $form->formType->order->name }}</td>
			</tr>
			<tr>
				<td class = 'label'>Mode</td>
				<td class = 'value'>{{ $form->formType->mode->name }}</td>
			</tr>
			<tr>
				<td class = 'label'>Duplicates</td>
				<td class = 'itemList'>
					@if(count($form->duplicates) > 0)
						@foreach($form->duplicates as $duplicate)
							<ul>
								<li><a href = '/forms/{{ $duplicate->id }}'>{{ $duplicate->formType->subject->name }}</a></li>
							</ul>
						@endforeach
					@else
						None
					@endif
				</td>
			</tr>
			<tr>
				<td class = 'label'>Examples (<a href = '/forms/{{ $form->id }}/addExample'>Add another</a>)</td>
				@if(count($form->examples) > 0)
					<td class = 'itemList'>
						<ul>
							@foreach($form->examples as $example)
								<li><a href = '/examples/{{ $example->id }}'>{{ $example->name }}</a></li>
							@endforeach
						</ul>
					</td>
				@else
					<td class = 'value'>None</td>
				@endif
			</tr>
			<tr>
				<td class = 'label'>Sources</td>
				@if(count($form->sources) > 0)
					<td class = 'itemList'>
						<ul>
							@foreach($form->sources as $source)
								<li><span title = '{{ $source->long }}'>{{ $source->short }}</span>, {{ $source->pivot->extraInfo }}</li>
							@endforeach
						</ul>
					</td>
				@else
					<td class = 'value'>None</td>
				@endif
			</tr>
		</table>
		<form method = 'POST' action = '/forms/{{ $form->id }}' class = 'deleteButton'>
			{{ method_field('DELETE') }}
			{{ csrf_field() }}
			<button type='submit'>Delete</button>
		</form>
	</div> --}}

@stop
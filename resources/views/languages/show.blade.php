@extends('layout', ['title' => $language->name])

@section('content')
	<div class="heading">
		<h1 class="title">Language Details</h1>
	</div>
	<br />

	@component('components.model', ['model' => $language, 'uri' => "/languages/{$language->id}", 'history' => $language->revisionHistory])
		@slot('header')
			{{ $language->name }}
			@if($language->alternateNames)
				<span class="detail-title-language">({{ $language->alternateNames }})</span>
			@endif
		@endslot
		<model-tab name="Basic Details" selected="true">
			{{-- Group field --}}
			@component('components.model.field', ['width' => 'is-half', 'label' => 'Group'])
				<a href="/groups/{{ $language->group_id }}">{{ $language->group->name }}</a>
			@endcomponent

			{{-- Parent field --}}
			@if($language->parent)
				@component('components.model.field', ['width' => 'is-half', 'label' => 'Parent'])
					@if($language->parent)
						<a href="/languages/{{ $language->parent_id }}">{{ $language->parent->name }}</a>
					@else
						None
					@endif
				@endcomponent
			@else
				<div class="column is-half"></div>
			@endif

			{{-- ISO field --}}
			@component('components.model.field', ['width' => 'is-half', 'label' => 'ISO Code'])
				{{ $language->iso }}
			@endcomponent

			{{-- Algonquianist code field --}}
			@component('components.model.field', ['width' => 'is-half', 'label' => 'Algonquianist Code'])
				{{ $language->algoCode }}
			@endcomponent

			@include('components.model.text', ['width' => 'is-12', 'label' => 'Notes', 'text' => $language->notes, 'language_id' => $language->id])
		</model-tab>

		<model-tab name="Children">
			@component('components.model.field', ['width' => 'is-half', 'label' => 'Children'])
				@slot('label')
					Children @component('components.model.add-icon', ['uri' => "/languages/{$language->id}/addChild"]) @endcomponent
				@endslot
				@if(count($language->children) > 0)
					<ul>
						@foreach($language->children as $child)
							<li><a href="/languages/{{ $child->id }}">{{ $child->name }}</a></li>
						@endforeach
					</ul>
				@else
					None
				@endif
			@endcomponent	
		</model-tab>

		<model-tab name="Forms">
			@component('components.model.field', ['width' => 'is-one-third'])
				@slot('label')
					Forms @component('components.model.add-icon', ['uri' => "/languages/{$language->id}/addForm"]) @endcomponent
				@endslot
				@if(count($language->forms) > 0)
					<ul>
						@foreach($language->forms as $form)
							<li><a href="/forms/{{ $form->id }}">{!! $form->renderHTML() !!}</a></li>
						@endforeach
					</ul>
				@else
					None
				@endif
			@endcomponent

			@if(count($language->emptyForms) > 0)
			@component('components.model.field', ['width' => 'is-one-third'])
				@slot('label')
					Empty Forms
				@endslot
				<ul>
					@foreach($language->emptyForms as $form)
						<li><a href="/empty-forms/{{ $form->id }}">{{ $form->formType->summary }}</a></li>
					@endforeach
				</ul>
			@endcomponent
			@endif

			@component('components.model.field', ['width' => 'is-one-third', 'label' => 'Examples'])
				@slot('label')
					Examples @component('components.model.add-icon', ['uri' => "/languages/{$language->id}/addExample"]) @endcomponent
				@endslot
				@if(count($language->examples) > 0)
					<ul>
						@foreach($language->examples as $example)
							<li><a href="/examples/{{ $example->id }}">{{ $example->name }}</a></li>
						@endforeach
					</ul>
				@else
					None
				@endif
			@endcomponent
		</model-tab>

		<model-tab name="Morphemes">
			@component('components.model.field', ['width' => 'is-half'])
				@slot('label')
					Morphemes @component('components.model.add-icon', ['uri' => "/languages/{$language->id}/addMorpheme"]) @endcomponent
				@endslot
				@if(count($language->morphemes) > 0)
					<alg-filter-list list="{{ $language->morphemes }}" filteroptions="{{ $language->morphemes->pluck('slot')->unique()->sortBy('abv')->values() }}">
				@else
					None
				@endif
			@endcomponent
		</model-tab>

		<model-tab name="Paradigms">
			<ul>
			@foreach($language->getParadigms() as $title => $paradigmSet)
				<li>
					{{ $title }}
					@foreach($paradigmSet as $paradigm)
						<a href="/search/paradigm?classes%5B%5D={{ $paradigm['class']->id }}&orders%5B%5D={{ $paradigm['order']->id }}&modeSelect=selectModes&modes%5B%5D={{ $paradigm['mode']->id }}&affirmative=on&nonDiminutive=on&languages%5B%5D={{ $language->name }}&languages%5B%5D_id={{ $language->id }}">
							{{ $paradigm['class']->name }}
						</a>
					@endforeach
				</li>
			@endforeach
			</ul>
		</model-tab>

		<model-tab name="Structural Survey">
			<table class="table" style="display: block;">
				<thead>
					<tr>
						<th>Variable</th>
						<th>Value</th>
					</tr>
				</thead>
				<tbody>
					@foreach($variables as $variable)
						<tr>
							<td><a href="/variables/{{ $variable->id }}">{{ $variable->name }}</a></td>
							<td>
								<?php
									$index = $language->datapoints->search(function($val) use ($variable) {
										return $val->variable_id == $variable->id;
									});
								?>
								@if($index !== false)
									<a href="/datapoints/{{ $language->datapoints[$index]->id }}">
										{{ $language->datapoints[$index]->value->name }}
									</a>
								@else
									Not entered
									@if(Auth::user() && Auth::user()->permissions->canEdit)
										(<a href="/variables/{{ $variable->id }}/languages/{{ $language->id }}/addDatapoint">Add</a>)
									@endif
								@endif
							</td>
						</tr>
					@endforeach
				</tbody>
			</table>
		</model-tab>

		@if(count($language->rules) > 0)
			<model-tab name="Rules">
				@component('components.model.field', ['width' => 'is-half'])
					@slot('label')
						Rules @component('components.model.add-icon', ['uri' => "/languages/{$language->id}/addRule"]) @endcomponent
					@endslot
					<ul>
						@foreach($language->rules as $rule)
							<li><a href="/rules/{{ $rule->id }}">{{ $rule->name }}</a></li>
						@endforeach
					</ul>
				@endcomponent
			</model-tab>
		@endif

		@if($sources)
			<model-tab name="Sources">
				@component('components.model.field', ['width' => 'is-12', 'label' => 'Sources (hover over a source for the full citation)'])
					@include('components.model.sourcelist', ['sources' => $sources])
				@endcomponent
			</model-tab>
		@endif

	@endcomponent

@stop
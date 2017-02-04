@extends('layout', ['title' => $language->name])

@section('content')
	<div class="heading">
		<h1 class="title">Language Details</h1>
	</div>
	<br />

	@component('components.model', ['uri' => "/languages/{$language->id}", 'history' => $language->revisionHistory])
		@slot('header')
			{{ $language->name }}
			@if($language->alternateNames)
				<span style="padding-left: .25em;">({{ $language->alternateNames }}</span>)
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
			@component('components.model.field', ['width' => 'is-half'])
				@slot('label')
					Forms @component('components.model.add-icon', ['uri' => "/languages/{$language->id}/addForm"]) @endcomponent
				@endslot
				@if(count($language->forms) > 0)
					<ul>
						@foreach($language->forms as $form)
							<li><a href="/forms/{{ $form->id }}">{{ $form->uniqueName() }}</a></li>
						@endforeach
					</ul>
				@else
					None
				@endif
			@endcomponent

			@component('components.model.field', ['width' => 'is-half', 'label' => 'Examples'])
				@slot('label')
					Examples @component('components.model.add-icon', ['uri' => "/languages/{$language->id}/addExample"]) @endcomponent
				@endslot @if(count($language->examples) > 0)
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
					<ul>
						@foreach($language->morphemes as $morpheme)
							@if($morpheme->name != "V")
								<li><a href="/morphemes/{{ $morpheme->id }}">{{ $morpheme->name }}<sup><em>{{ $morpheme->disambiguator }}</em></sup> (<span class="gloss">{{ $morpheme->gloss->abv }}</span>)</a></li>
							@endif
						@endforeach
					</ul>
				@else
					None
				@endif
			@endcomponent
		</model-tab>

		<model-tab name="Sources">
			@component('components.model.field', ['width' => 'is-12', 'label' => 'Sources (hover over a source for the full citation)'])
				@include('components.model.sourcelist', ['sources' => $sources])
			@endcomponent
		</model-tab>
	@endcomponent

@stop
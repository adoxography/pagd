@extends('layout', ['title' => "{$morpheme->name} ({$morpheme->language->name})"])

@section('content')
	<div id="root">

		<div class="heading">
			<h1 class="title">Morpheme Details</h1>
		</div>
		<br />

		@component('components.model', ['uri' => "/morphemes/{$morpheme->id}", 'history' => $morpheme->revisionHistory])
			@slot('header')
				{{ $morpheme->name }}<em><sup>{{ $morpheme->disambiguator }}</sup></em> <span style="padding-left: .25em;">(<a href="/languages/{{ $morpheme->language_id }}">{{ $morpheme->language->name }}</a>)</span>
			@endslot

			<model-tab name="Basic Details" selected="true">
				<div class="column is-half" style="padding: 0;">
					<div class="columns is-multiline">

						{{-- Gloss field --}}
						@component('components.model.field', ['width' => 'is-half', 'label' => 'Gloss'])
							@if($morpheme->translation)
								{{ str_replace(" ", ".", $morpheme->translation) }}
							@else
								<a href="/glosses/{{ $morpheme->gloss_id }}"><span class="gloss">{{ $morpheme->gloss->abv }}</span> ({{ $morpheme->translation or $morpheme->gloss->name }})</a>
							@endif
						@endcomponent

						{{-- Slot field --}}
						@component('components.model.field', ['width' => 'is-half', 'label' => 'Slot'])
							<a href="/slots/{{ $morpheme->slot_id }}">{{ $morpheme->slot->abv }} ({{ $morpheme->slot->name }})</a>
						@endcomponent

						{{-- Alternate name field --}}
						@if($morpheme->hasAlternateName())
							@component('components.model.field', ['width' => 'is-12', 'label' => 'Initial change'])
								{{ $morpheme->alternateName }}
							@endcomponent
						@endif

						{{-- Sources --}}
						@component('components.model.field', ['label' => "Sources (Hover a source for the full citation)"])
							@include('components.model.sourcelist', ['sources' => $morpheme->sources])
						@endcomponent
					</div>
				</div>
				<div class="column is-half" style="padding: 0;">
					<div class="columns is-multiline">
						@include('components.model.text', ['width' => 'is-12', 'label' => 'Allomorphy Notes', 'text' => $morpheme->allomorphyNotes])

						{{-- Historical Notes --}}
						@component('components.model.field', ['width' => 'is-12', 'label' => 'Historical Notes'])
							<p>
								<em>Parent Morpheme: </em>
								@if($morpheme->parent)
									<a href="/morphemes/{{ $morpheme->parent_id }}">{{ $morpheme->parent->uniqueName() }}</a> (<a href="/languages/{{ $morpheme->parent->language_id }}">{{ $morpheme->parent->language->name }}</a>)
								@else
									Unknown/Unclear
								@endif
							</p>
							@if($morpheme->changeType)
								<em>Change Type: </em>{{ $morpheme->changeType->name }}
							@endif
						@endcomponent
						@include('components.model.text', ['width' => 'is-12', 'text' => $morpheme->historicalNotes])

						{{-- Comments --}}
						@if(Auth::user())
							@include('components.model.text', ['width' => 'is-12', 'label' => 'Private Comments', 'text' => $morpheme->comments])
						@endif
					</div>
				</div>
			</model-tab>

			@if(count($cognates->allChildren) > 0)
				<model-tab name="Cognates">
					@include('components.model.cognates', ['list' => $cognates, 'current' => $morpheme, 'model' => 'morphemes'])
				</model-tab>
			@endif

			<model-tab name="Forms">
				@component('components.model.field', ['width' => 'is-half', 'label' => 'Forms that contain this morpheme'])
					@if($morpheme->forms)
						<ul>
							@foreach($morpheme->forms as $form)
								<li><a href="/forms/{{ $form->id }}">{{ $form->uniqueName() }}</a></li>
							@endforeach
						</ul>
					@else
						None
					@endif
				@endcomponent
			</model-tab>

		@endcomponent
	</div>

@stop
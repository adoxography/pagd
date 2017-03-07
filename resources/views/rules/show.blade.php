@extends('layout', ['title' => $rule->name])

@section('content')
<div class="heading">
	<h1 class="title">Rule Details</h1>
</div>
<br />

@component('components.model', ['uri' => "/rules/{$rule->id}"])
	@slot('header')
		{{ $rule->name }}
		<span class="detail-title-language">(<a href="/languages/{{ $rule->language->iso }}">{{ $rule->language->name }}</a>)</span>
	@endslot
	<model-tab name="Basic Details" selected="true">
		<div class="column is-half">
			{{-- Rule field --}}
			@component('components.model.field', ['width' => 'is-12', 'label' => 'Rule'])
				{{ $rule->rule }}
			@endcomponent

			@if(Auth::user())
				{{-- Abbreviation field --}}
				@component('components.model.field', ['label' => 'Abbreviation'])
					{{ $rule->abv }}
				@endcomponent
			@endif

			{{-- Sources --}}
			@component('components.model.field', ['label' => "Sources (Hover a source for the full citation)"])
				@include('components.model.sourcelist', ['sources' => $rule->sources])
			@endcomponent
		</div>
		<div class="column is-half">

			{{-- Public comments field --}}
			@include('components.model.text', ['width' => 'is-12', 'label' => 'Comments', 'text' => $rule->publicComments, 'language_id' => $rule->language_id])	

			@if(Auth::user())
				{{-- Private comments field --}}
				@include('components.model.text', ['width' => 'is-12', 'label' => 'Private Comments', 'text' => $rule->privateComments, 'language_id' => $rule->language_id])
			@endif
		</div>
	</model-tab>
@endcomponent
@endsection
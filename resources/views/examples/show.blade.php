@extends('layout', ['title' => "{$example->name} ({$example->language->name})"])

@section('content')

<div class="heading">
	<h1 class="title">Example Details</h1>
</div>
<br />

@component('components.model', ['uri' => "/examples/{$example->id}", 'model' => $example, 'history' => $example->revisionHistory])
	@slot('header')
		{{ $example->name }} <span class="detail-title-language">(<a href="/languages/{{ $example->language->id }}">{{ $example->language->name }}</a>)
	@endslot

	<model-tab name="Basic Details" selected="true">
		<div class="column is-half">

			{{-- form field --}}
			@component('components.model.field', ['width' => 'is-12', 'label' => 'Form'])
				<a href="/forms/{{ $example->form_id }}">{!! $example->form->uniqueName !!}</a>
			@endcomponent

			{{-- morphology field --}}
			@component('components.model.field', ['width' => 'is-12', 'label' => 'Morphology'])
				@if($example->morphemicForm)
					{!! $example->printMorphemes() !!}
				@endif
			@endcomponent

			{{-- translation field --}}
			@component('components.model.field', ['width' => 'is-12', 'label' => 'Translation'])
				{{ $example->translation }}
			@endcomponent

			{{-- sources --}}
			@component('components.model.field', ['width' => 'is-12', 'label' => 'Sources (hover over a source for the full citation)'])
				@include('components.model.sourcelist', ['sources' => $example->sources])
			@endcomponent
		</div>

		<div class="column is-half">
			@include('components.model.text', ['width' => 'is-12', 'label' => 'Notes', 'text' => $example->notes, 'language_id' => $example->language->id])

			@if(Auth::user())
				@include('components.model.text', ['width' => 'is-12', 'label' => 'Private Comments', 'text' => $example->comments, 'language_id' => $example->language->id])
			@endif
		</div>
	</model-tab>
@endcomponent
@endsection
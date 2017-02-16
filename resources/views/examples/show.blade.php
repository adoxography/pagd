@extends('layout', ['title' => "{$example->name} ({$example->language->name})"])

@section('content')

<div class="heading">
	<h1 class="title">Example Details</h1>
</div>
<br />

@component('components.model', ['uri' => "/examples/{$example->id}", 'history' => $example->revisionHistory])
	@slot('header')
		{{ $example->name }} <span class="detail-title-language">(<a href="/languages/{{ $example->language->id }}">{{ $example->language->name }}</a>)
	@endslot

	<model-tab name="Basic Details" selected="true">
		<div class="column is-half">
			@component('components.model.field', ['width' => 'is-12', 'label' => 'Form'])
				<a href="/forms/{{ $example->form_id }}">{{ $example->form->uniqueName }}</a>
			@endcomponent

			@component('components.model.field', ['width' => 'is-12', 'label' => 'Morphology'])
				{!! $example->printMorphemes() !!}
				@if($example->form->initialChange)
					(Affected by initial change)
				@endif
			@endcomponent

			@component('components.model.field', ['width' => 'is-12', 'label' => 'Translation'])
				{{ $example->translation }}
			@endcomponent

			@component('components.model.field', ['width' => 'is-12', 'label' => 'Sources (hover over a source for the full citation)'])
				@include('components.model.sourcelist', ['sources' => $example->sources])
			@endcomponent
		</div>

		<div class="column is-half">
			@if($example->notes)
				@component('components.model.field', ['width' => 'is-12', 'label' => 'Notes'])
					{{ $example->notes }}
				@endcomponent
			@endif

			@if($example->comments && Auth::user())
				@component('components.model.field', ['width' => 'is-12', 'label' => 'Comments'])
					{{ $example->comments }}
				@endcomponent
			@endif
		</div>
	</model-tab>
@endcomponent



@endsection
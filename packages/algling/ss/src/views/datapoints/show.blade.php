@extends('layout', ['title' => $datapoint->name])

@section('content')

<div class="heading">
	<h1 class="title">Datapoint Details</h1>
</div>
<br />

@component('components.model', ['model' => $datapoint, 'uri' => "/datapoints/{$datapoint->id}"])
	<div class="columns">
		<div class="column">
			@component('components.model.field', ['label' => 'Language'])
				{!! $datapoint->language->renderHTML() !!}
			@endcomponent

			@component('components.model.field', ['label' => 'Variable'])
				<a href="/variables/{{ $datapoint->variable->id }}">{{ $datapoint->variable->name }}</a>
			@endcomponent

			@component('components.model.field', ['label' => 'Value'])
				{{ $datapoint->value->name }}
			@endcomponent
		</div>

		<div class="column">
			@include('components.model.text', ['width' => 'is-12', 'label' => 'Notes', 'text' => $datapoint->notes, 'language_id' => $datapoint->language->id])
		</div>
	</div>

	@component('components.model.field', ['width' => 'is-12', 'label' => 'Sources (hover over a source for the full citation)'])
		@include('components.model.sourcelist', ['sources' => $datapoint->sources])
	@endcomponent

@endcomponent

@endsection
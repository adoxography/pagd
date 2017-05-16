@extends('layout', ['title' => $paradigm->name])

@section('title')
	<label>Nominal paradigm details:</label>
	{{ $paradigm->name }}
@endsection

@include('components.show-icons', ['model' => $paradigm, 'uri' => '/nominals/paradigms/'])

@section('content')
	<div class="field">
		<span class="label">Language</span>
		{!! $paradigm->language->renderHTML() !!}
	</div>

	<div class="field">
		<span class="label">Type</span>
		{{ $paradigm->type->name }}
	</div>

	<div class="field">
		<span class="label">Sources</span>
		@include('components.model.sourcelist', ['sources' => $paradigm->sources])
	</div>
@endsection
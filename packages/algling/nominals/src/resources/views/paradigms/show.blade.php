@extends('layout', ['title' => $paradigm->name])

@section('title')
	<label>Nominal paradigm details:</label>
	{!! $paradigm->present('name')->then('language')->as('link') !!}
@endsection

@include('components.show-icons', ['model' => $paradigm, 'uri' => '/nominals/paradigms/'])

@section('content')
	<div class="columns">
		<div class="column">
			<div class="field">
				<span class="label">Paradigm</span>
				{!! $paradigm->present('table') !!}
			</div>
		</div>

		<div class="column">
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
		</div>
	</div>
@endsection
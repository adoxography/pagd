@extends('layout', ['title' => $example->name])

@section('title')
	<label>Example details:</label>
	{!! $example->present()
				->as('name', 'bold')
				->then('language')
				->as('link',
					 optional($example->form)->structure_type == 'nominalStructures' ? 'nominals' : 'verbs'
				)
	!!}
@endsection

@include('components.show-icons', ['model' => $example])

@section('panel')
	@include('words.examples.partials.panel')
@endsection

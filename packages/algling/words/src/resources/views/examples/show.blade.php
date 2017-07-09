@extends('layout', ['title' => $example->name])

@section('title')
	<label>Example details:</label>
	{!! $example->present()->then('language')->as('link', $example->form->structure_type == 'verbStructures' ? 'verbs' : 'nominals') !!}
@endsection

@include('components.show-icons', ['model' => $example])

@section('panel')
	@include('word::examples.partials.panel')
@endsection
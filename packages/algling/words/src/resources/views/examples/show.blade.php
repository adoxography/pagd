@extends('layout', ['title' => $example->name])

@section('title')
	<label>Example details:</label>
	{{ $example->name }} ({!! $example->language->renderHTML() !!})
@endsection

@include('components.show-icons', ['model' => $example])

@section('panel')
	@include('word::examples.partials.panel')
@endsection
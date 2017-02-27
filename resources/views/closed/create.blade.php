@extends('layout')

@section('content')

	<h1>{{ $modelSg }} Input</h1>

	@component('components.form', ['method' => 'POST', 'class' => 'box', 'url' => '/'.strtolower($item->plural)])
		@include('closed.partials.form')
	@endcomponent

	@include('errors.list')
@stop
@extends('layout')

@section('content')

	<div class="heading">
		<h1 class="title">Add a {{ $item->singular }}</h1>
	</div>
	<br />

	@component('components.form', ['method' => 'POST', 'class' => 'box', 'url' => '/'.strtolower($item->plural)])
		@include('closed.partials.form')
	@endcomponent

	@include('errors.list')
@stop
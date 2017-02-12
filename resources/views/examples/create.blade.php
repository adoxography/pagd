@extends('layout', ['title' => 'Add an example'])

@section('content')

	<div class="heading">
		<h1 class="title">Add an example</h1>
	</div>
	<br />
	
	@component('components.form', ['method' => 'POST', 'class' => 'box', 'url' => '/examples'])
		@include('examples.partials.form')
	@endcomponent

	@include('errors.list')

@stop
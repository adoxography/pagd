@extends('layout')

@section('content')

	<div class="heading">
		<h1 class="title">Add a Language</h1>
	</div>
	<br />
	
	<div id="root">
		@component('components.form', ['method' => 'POST', 'class' => 'box', 'url' => '/languages'])
			@include('languages.partials.form')
		@endcomponent
	</div>

	@include('errors.list')

@stop
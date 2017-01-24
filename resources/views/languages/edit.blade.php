@extends('layout')

@section('content')

	<div class="heading">
		<h1 class="title">Edit a Language</h1>
	</div>
	<br />

	<div id="root">
		@component('components.form', ['method' => 'PATCH', 'class' => 'box', 'url' => '/languages/'.$language->id])
			@include('languages.partials.form')
		@endcomponent
	</div>

	@include('errors.list')

@stop
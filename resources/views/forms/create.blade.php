@extends('layout', ['title' => 'Add a form'])

@section('content')
	<div class="heading">
		<h1 class="title">Add a form</h1>
	</div>
	<br />

	<div id="root">
		@component('components.form', ['url' => '/forms', 'class' => 'box'])
			@include('forms.partials.form')
		@endcomponent
	</div>

	@include('errors.list')
@stop
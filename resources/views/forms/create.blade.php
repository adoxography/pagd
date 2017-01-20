@extends('layout')

@section('content')
	<div class="heading">
		<h1 class="title">Add a form</h1>
	</div>
	<br />

	<div id="root">
		{{ Form::open(['url' => '/forms', 'class' => "box"]) }}
			@include('forms.partials.form')
		{{ Form::close() }}
	</div>

	@include('errors.list')
@stop
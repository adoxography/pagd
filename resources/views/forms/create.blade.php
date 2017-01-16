@extends('layout')

@section('content')
	<div class="heading">
		<h1 class="title">Add a form</h1>
	</div>
	<br />

	{{ Form::open(['url' => '/forms', 'class' => "box"]) }}
		@include('forms.partials.form')
	{{ Form::close() }}

	@include('errors.list')
@stop
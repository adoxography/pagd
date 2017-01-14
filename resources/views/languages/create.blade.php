@extends('layout')

@section('content')

<div class="container">
	<div class="heading">
		<h1 class="title">Add a Language</h1>
	</div>
	<br />
	
	{{ Form::open(['url' => '/languages', 'class' => 'box']) }}
		@include('languages.partials.form')
	{{ Form::close() }}
</div>

	@include('errors.list')

@stop
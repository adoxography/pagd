@extends('layout')

@section('content')

	<h1>Language Input</h1>
	{{ Form::open(['url' => '/languages', 'class' => 'inputForm']) }}
		@include('languages.partials.form')
	{{ Form::close() }}

	@include('errors.list')

@stop
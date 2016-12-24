@extends('layout')

@section('content')

	{{ Form::open(['url' => '/examples', 'method' => 'post', 'class' => 'inputForm']) }}
		@include('examples.partials.form')
	{{ Form::close() }}

	@include('errors.list')

@stop
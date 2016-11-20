@extends('layout')

@section('content')
	<h1>Form Input</h1>

	{{ Form::open(['url' => '/forms', 'class' => 'inputForm']) }}
		@include('forms.partials.form')
	{{ Form::close() }}

	@include('errors.list')
@stop
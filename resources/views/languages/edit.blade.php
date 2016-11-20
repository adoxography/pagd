@extends('layout')

@section('content')

	<h1>Edit the Language</h1>

	{{ Form::model($language, ['url' => '/languages/'.$language->id, 'method' => 'PATCH', 'class' => 'inputForm']) }}
		@include('languages.partials.form')
	{{ Form::close() }}

	@include('errors.list')

@stop
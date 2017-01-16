@extends('layout')

@section('content')
	<h1>Edit a Form</h1>
	{{ Form::model($form->toArray(),['method' => 'PATCH', 'url' => '/forms/'.$form->id, 'class' => 'box']) }}
		@include('forms.partials.form');
	{{ Form::close() }}
	@include('errors.list')
@stop
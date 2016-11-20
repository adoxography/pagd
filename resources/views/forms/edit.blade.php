@extends('layout')

@section('content')
	<h1>Edit a Form</h1>
	{{ Form::model($form,['method' => 'PATCH', 'url' => '/forms/'.$form->id, 'class' => 'inputForm']) }}
		@include('forms.partials.form');
	{{ Form::close() }}
	@include('errors.list')
@stop
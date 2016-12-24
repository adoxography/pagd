@extends('layout')

@section('content')
	<h1>{{ $singular }} Input</h1>
	{{ Form::open(['url' => '/'.strtolower($plural), 'class' => 'inputForm']) }}
		<fieldset>
			{{ Form::label('name') }}
			{{ Form::text('name') }}
			{{ Form::label('description') }}
			{{ Form::textarea('description') }}
		</fieldset>
		<fieldset class = 'formButtons'>
			{{ Form::submit('Submit') }}
		</fieldset>
	{{ Form::close() }}
	
	@include('errors.list')
@stop
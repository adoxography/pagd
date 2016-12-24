@extends('layout')

@section('content')

	<h1>{{ $modelSg }} Input</h1>

	{{ Form::open(['url' => '/'.strtolower($modelPl), 'class' => 'inputForm'])}}

		<fieldset>
			{{ Form::label('name') }}
			{{ Form::text('name') }}
			{{ Form::label('abv', 'Abreviation') }}
			{{ Form::text('abv') }}
			{{ Form::label('description') }}
			{{ Form::textarea('description') }}
		</fieldset>
		<fieldset class = 'formButtons'>
			{{ Form::submit('Submit') }}
		</fieldset>

	{{ Form::close() }}

	@include('errors.list')
@stop
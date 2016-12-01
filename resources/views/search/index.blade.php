@extends('layout')

@section('content')

	{{ Form::open(['method' => 'POST', 'url' => '/search']) }}
		<fieldset>
			<legend>Search for:</legend>
			{{ Form::select('searchType', ['lang' => 'Language', 'form' => 'Form', 'morph' => 'Morpheme']) }}
			<input type = 'text' name = 'lookup' />
		</fieldset>
		<fieldset>
			<legend>Limit by:</legend>
			{{ Form::label('order') }}
			{{ Form::select('order', ['NULL' => 'Do not limit'] + $orders) }}
			{{ Form::label('mode') }}
			{{ Form::select('mode', ['NULL' => 'Do not limit'] + $modes) }}
			{{ Form::label('class') }}
			{{ Form::select('class', ['NULL' => 'Do not limit'] + $classes) }}
		</fieldset>
		<fieldset>
			{{ Form::submit('Submit') }}
		</fieldset>
	{{ Form::close() }}

@stop
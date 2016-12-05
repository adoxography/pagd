@extends('layout')

@section('content')

{{ Form::open(['method' => 'POST', 'url' => '/sources']) }}

	{{ Form::label('short', 'Short Form:') }}
	{{ Form::text('short') }}
	{{ Form::label('long', 'Long Form:') }}
	{{ Form::textarea('long', null, ['rows' => 3]) }}
	{{ Form::submit('Submit') }}

{{ Form::close() }}

@stop
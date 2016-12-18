@extends('layout')

@section('content')

{{ Form::open() }}
	{{ Form::label('subject') }}
	{{ Form::text('subject') }}
	{{ Form::label('body', 'Message') }}
	{{ Form::textarea('body') }}
	{{ Form::label('from', 'Your email')}}
	{{ Form::email('from') }}
	{{ Form::submit('Send') }}
{{ Form::close() }}

@stop
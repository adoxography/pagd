@extends('layout')

@section('content')

<p>Insert welcome information here later</p>

{{ Form::open(['url' => '/login']) }}
	{{ Form::label('email', 'Email:')}}
	{{ Form::text('email') }}
	{{ Form::label('password', 'Password:') }}
	{{ Form::password('password') }}
	{{ Form::submit() }}
{{ Form::close() }}

@stop
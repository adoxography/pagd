@extends('layout')

@section('content')
	<h1>Morpheme Input</h1>
	{{ Form::open(['url' => '/morphemes', 'class' => 'inputForm']) }}
		@include('morphemes.partials.form')
	{{ Form::close() }}
	@include('errors.list')
@stop
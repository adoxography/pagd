@extends('layout')

@section('content')
	{{ Form::model($morpheme, ['method' => 'PATCH', 'url' => '/morphemes/'.$morpheme->id, 'class' => 'inputForm']) }}
		@include('morphemes.partials.form')
	{{ Form::close() }}
	@include('errors.list')
@stop
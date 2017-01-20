@extends('layout')

@section('content')

	<div class="heading">
		<h1 class="title">Edit a Language</h1>
	</div>
	<br />

	<div id="root">
		{{ Form::model($language, ['url' => '/languages/'.$language->id, 'method' => 'PATCH', 'class' => 'box']) }}
			@include('languages.partials.form')
		{{ Form::close() }}
	</div>

	@include('errors.list')

@stop
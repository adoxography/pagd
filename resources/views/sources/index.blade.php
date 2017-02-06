@extends('layout')

@section('content')
	<div class="heading">
		<h1 class="title">Sources</h1>
	</div>
	<br />

	@include('components.index', ['items' => $sources, 'model' => 'sources'])

@stop

@extends('layout')

@section('content')
	<div class="heading">
		<h1 class="title">{{ $model }}</h1>
	</div>
	<br />

	@include('components.index', ['items' => $items, 'model' => $model])

@stop
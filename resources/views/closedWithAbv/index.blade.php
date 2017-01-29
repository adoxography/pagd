@extends('layout')

@section('content')
	<div class="heading">
		<h1 class="title">Glosses</h1>
	</div>
	<br />

	@include('components.index', ['items' => $items, 'model' => $model])

@stop
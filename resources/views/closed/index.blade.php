@extends('layout')

@section('content')
	<div class="heading">
		<h1 class="title">{{ $model }}</h1>
		@if(Auth::user() && Auth::user()->permissions->canEdit)
			<h3 class="subtitle"><a href="/{{ strtolower($model) }}/create">Add another</a></h3>
		@endif
	</div>
	<br />

	@include('components.index', ['items' => $items, 'model' => $model])

@stop
@extends('layout')

@section('title')
	{{ ucfirst($model) }}
@endsection

@section('content')
	@if(Auth::user() && Auth::user()->permissions->canEdit)
		<h3 class="subtitle"><a href="/{{ strtolower($model) }}/create">Add another</a></h3>
	@endif

	@include('components.index', ['items' => $items, 'model' => $model])

@stop
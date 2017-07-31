@extends('layout')

@section('title')
	{{ ucfirst($model) }}
@endsection

@section('content')
	@can('add content')
		<h3 class="subtitle"><a href="/{{ strtolower($model) }}/create">Add another</a></h3>
	@endcan

	@include('components.index', ['items' => $items, 'model' => $model])

@stop
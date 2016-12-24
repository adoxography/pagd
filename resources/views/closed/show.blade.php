@extends('layout')

@section('content')

	<div class = 'show'>
		<h1>{{ $item->name }} (<a href = '/{{ strtolower($plural) }}/{{ $item->id }}/edit'>Edit</a>)</h1>
		@if(isset($item->abv))
			{{ Html::field('Abbreviation:', $item->abv) }}
		@endif
		{{ Html::para('Description:', $item->description) }}
	</div>

	{{ Form::open(['method' => 'DELETE', 'url' => '/'.strtolower($plural).'/'.$item->id])}}
		{{ Form::submit('Delete') }}
	{{ Form::close() }}

@stop
@extends('layout')

@section('content')

<ul>
	@foreach($sources as $source)
		<li>{{ $source->short }}</li>
	@endforeach
</ul>

@stop

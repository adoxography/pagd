@extends('layout')

@section('content')
	<div class="heading">
		<h1 class="title">Sources</h1>
	</div>
	<br />

	<div class="box">
		<ul>
			@foreach($sources as $source)
				<li><a href="/sources/{{ $source->id }}">{{ $source->short }}</a></li>
			@endforeach
		</ul>
	</div>

@stop

@extends('layout')

@section('content')
	<div class="heading">
		<h1 class="title">Sources</h1>
	</div>
	<br />

	@include('components.index', ['items' => $sources, 'model' => 'sources'])

{{-- 	<div class="box">
		<ul>
			@foreach($sources as $source)
				<li><a href="/sources/{{ $source->id }}">{{ $source->short }}</a></li>
			@endforeach
		</ul>
	</div> --}}

@stop

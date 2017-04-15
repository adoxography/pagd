@extends('layout')

@section('content')
	<div class="heading">
		<h1 class="title">Sources</h1>
		@if(Auth::user())
			<h3 class="subtitle"><a href="/sources/create">Add another</a></h3>
		@endif
	</div>
	<br />

	<alg-source-index sources="{{ json_encode($sources) }}"></alg-source-index>

@stop

@extends('layout')

@section('content')
	<div class="heading">
		<h1 class="title">Paradigm search results</h1>
	</div>
	<br />

	<div class="box">
		{!! $result->toHTML() !!}
	</div>

@stop
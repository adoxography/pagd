@extends('layout')

@section('title')
	Sources
@endsection

@section('content')
	@if(Auth::user() && Auth::user()->permisssions->canEdit)
		<h3 class="subtitle"><a href="/sources/create">Add another</a></h3>
	@endif

	<alg-source-index sources="{{ json_encode($sources) }}"></alg-source-index>

@stop

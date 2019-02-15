@extends('layout', ['title' => 'Add an example'])

@section('title')
	<h1 class="title is-4">Add example</h1>
@endsection

@section('content')
	@include('words.examples.partials.form', ['method' => 'POST', 'action' => '/examples'])
@stop

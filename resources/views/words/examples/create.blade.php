@extends('layout', ['title' => 'Add an example'])

@section('title')
	Add example
@endsection

@section('content')
	@include('words.examples.partials.form', ['method' => 'POST', 'action' => '/examples'])
@stop

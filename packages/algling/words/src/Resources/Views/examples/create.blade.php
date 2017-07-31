@extends('layout', ['title' => 'Add an example'])

@section('title')
	Add example
@endsection

@section('content')
	@include('word::examples.partials.form', ['method' => 'POST', 'action' => '/examples'])
@stop
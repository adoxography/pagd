@extends('layout', ['title' => 'Add IGT'])

@section('title')
	Add IGT
@endsection

@section('content')
	@include('igt.partials.form', ['method' => 'POST', 'action' => '/igt'])
@stop

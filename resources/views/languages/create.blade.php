@extends('layout', ['title' => 'Add language'])

@section('title')
	Add language
@endsection

@section('content')
	@include('languages.partials.form', ['method' => 'POST', 'action' => '/languages'])
@stop
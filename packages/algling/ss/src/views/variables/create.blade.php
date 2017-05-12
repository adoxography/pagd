@extends('layout', ['title' => 'Add variable'])

@section('title')
	Add variable
@endsection

@section('content')
	@include('ss::variables.partials.form', ['method' => 'POST', 'action' => '/variables'])
@endsection
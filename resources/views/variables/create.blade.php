@extends('layout', ['title' => 'Add variable'])

@section('title')
	Add variable
@endsection

@section('content')
	@include('variables.partials.form', ['method' => 'POST', 'action' => '/variables'])
@endsection

@extends('layout', ['title' => 'Add reflex'])

@section('title')
    Add reflex
@endsection

@section('content')
	@include('reflexes.partials.form', ['method' => 'POST', 'action' => '/reflexes'])
@endsection

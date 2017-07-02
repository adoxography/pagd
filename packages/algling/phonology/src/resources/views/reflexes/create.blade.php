@extends('layout', ['title' => 'Add reflex'])

@section('title')
    Add reflex
@endsection

@section('content')
	@include('phon::reflexes.partials.form', ['method' => 'POST', 'action' => '/reflexes'])
@endsection
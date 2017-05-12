@extends('layout', ['title' => 'Add rule'])

@section('title')
	Add rule
@endsection

@section('content')
	@include('rules.partials.form', ['method' => 'POST', 'action' => '/rules'])
@endsection
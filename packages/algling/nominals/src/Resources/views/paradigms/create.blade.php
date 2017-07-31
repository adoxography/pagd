@extends('layout', ['title' => 'Add nominal paradigm'])

@section('title')
	Add nominal paradigm
@endsection

@section('content')
	@include('nom::paradigms.partials.form', ['method' => 'POST', 'action' => '/nominals/paradigms'])
@endsection
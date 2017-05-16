@extends('layout', ['title' => "Edit {$paradigm->name}"])

@section('title')
	<label>Editing </label>
	{{ $paradigm->name }}
@endsection

@section('content')
	@include('nom::paradigms.partials.form', ['method' => 'PATCH', 'action' => "/nominals/paradigms/{$paradigm->id}"])
@endsection
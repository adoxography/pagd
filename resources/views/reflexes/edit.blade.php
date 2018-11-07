@extends('layout', ['title' => 'Add reflex'])

@section('title')
    <label>Editing</label>
    {{ $reflex->name }}
@endsection

@section('content')
	@include('reflexes.partials.form', ['method' => 'PATCH', 'action' => "/reflexes/{$reflex->id}"])
@endsection

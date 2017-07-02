@extends('layout', ['title' => 'Add reflex'])

@section('title')
    <label>Editing</label>
    {{ $reflex->name }}
@endsection

@section('content')
	@include('phon::reflexes.partials.form', ['method' => 'PATCH', 'action' => "/reflexes/{$reflex->id}"])
@endsection
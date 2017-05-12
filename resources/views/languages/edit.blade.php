@extends('layout', ['title' => "Edit {$language->name}"])

@section('title')
	<label>Editing </label>
	{{ $language->name }}
@endsection

@section('content')
	@include('languages.partials.form', ['method' => 'PATCH', 'action' => "/languages/{$language->id}"])
@stop
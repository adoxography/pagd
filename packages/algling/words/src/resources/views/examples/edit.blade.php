@extends('layout', ['title' => "Edit {$example->name}"])

@section('title')
	<label>Editing </label>
	{{ $example->name }}
@endsection

@section('content')
	@include('word::examples.partials.form', ['method' => 'PATCH', 'action' => "/examples/{$example->id}"])
@stop
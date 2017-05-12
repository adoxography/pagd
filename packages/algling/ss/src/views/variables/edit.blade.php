@extends('layout', ['title' => "Edit {$variable->name}"])

@section('title')
	<label>Editing </label>
	{{ $variable->name }}
@endsection

@section('content')
	@include('ss::variables.partials.form', ['method' => 'PATCH', 'action' => "/variables/{$variable->id}"])
@endsection
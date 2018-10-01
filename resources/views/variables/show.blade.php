@extends('layout', ['title' => $variable->name])

@section('title')
	<label>Variable details:</label>
	{{ $variable->name }}
@endsection

@include('components.show-icons', ['model' => $variable])

@section('panel')
	@include('variables.partials.panel')
@endsection

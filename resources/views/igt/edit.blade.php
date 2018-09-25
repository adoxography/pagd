@extends('layout', ['title' => "Edit IGT"])

@section('title')
	<label>Editing IGT</label>
@endsection

@section('content')
	@include('igt.partials.form', ['method' => 'PATCH', 'action' => "/igt/{$igt->id}"])
@stop

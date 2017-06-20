@extends('layout', ['title' => "Add group"])

@section('title')
	Add group
@endsection

@section('content')
	@include('groups.partials.form', ['method' => 'POST', 'action' => "/groups"])
@stop
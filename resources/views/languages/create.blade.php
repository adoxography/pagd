@extends('layout', ['title' => 'Add language'])

@section('title')
    <h1 class="title is-4">Add language</h1>
@endsection

@section('content')
	@include('languages.partials.form', ['method' => 'POST', 'action' => '/languages'])
@stop

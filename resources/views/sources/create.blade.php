@extends('layout', ['title' => 'Add source'])

@section('title')
    <h1 class="title is-4">Add source</h1>
@endsection

@section('content')
	@include('sources.partials.form', ['method' => 'POST', 'action' => '/sources'])
@stop

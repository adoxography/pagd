@extends('layout', ['title' => 'Add source'])

@section('title')
	Add source
@endsection

@section('content')
	@include('sources.partials.form', ['method' => 'POST', 'action' => '/sources'])
@stop
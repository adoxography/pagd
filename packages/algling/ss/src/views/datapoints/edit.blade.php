@extends('layout', ['title' => 'Edit datapoint'])

@section('title')
	<label>Editing</label>
	{{ $datapoint->language->name}}/{{ $datapoint->variable->name }}
@endsection

@section('content')
	@include('ss::datapoints.partials.form', ['method' => 'PATCH', 'action' => "/datapoints/{$datapoint->id}"])
@endsection
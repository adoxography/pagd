@extends('layout', ['title' => 'Edit a datapoint'])

@section('content')

<div class="heading">
	<h1 class="title">Edit a Datapoint</h1>
</div>
<br />

<alg-datapoint-form
	method="PATCH"
	action="/datapoints/{{ $datapoint->id }}"
	languages="{{ $languages }}"
	variables="{{ $variables }}"
	datapoint="{{ $datapoint }}">
</alg-datapoint-form>

@endsection
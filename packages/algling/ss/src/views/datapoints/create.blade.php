@extends('layout', ['title' => 'Add a datapoint'])

@section('content')

<div class="heading">
	<h1 class="title">Add a Datapoint</h1>
</div>
<br />

<alg-datapoint-form
	method="POST"
	action="/datapoints"
	languages="{{ $languages }}"
	variables="{{ $variables }}"
	language="{{ $language or '' }}"
	variable="{{ $variable or '' }}">
</alg-datapoint-form>

@endsection
@extends('layout', ['title' => "Edit {$example->name} ({$example->language->name})"])

@section('content')

	<div class="heading">
		<h1 class="title">Edit an example</h1>
	</div>
	<br />

	<alg-example-form method="PATCH"
				   	  action="/examples/{{ $example->id }}"
				   	  languages="{{ $languages }}"
				   	  example="{{ $example->toJson() }}">
	</alg-example-form>

	@include('errors.list')

@stop
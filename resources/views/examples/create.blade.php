@extends('layout', ['title' => 'Add an example'])

@section('content')

	<div class="heading">
		<h1 class="title">Add an example</h1>
	</div>
	<br />

	<alg-example-form method="POST"
				   	  action="/forms"
				   	  languages="{{ $languages }}">
	</alg-example-form>

@stop
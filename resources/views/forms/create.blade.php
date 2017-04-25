@extends('layout', ['title' => 'Add a form'])

@section('content')

	<div class="heading">
		<h1 class="title">Add a form</h1>
	</div>
	<br />

	@include('forms.partials.form', ['method' => 'POST', 'action' => '/forms'])

{{-- 	<alg-form-form method="POST"
				   action="/forms"
				   languages="{{ $languages }}"
				   args="{{ $arguments }}"
				   classes="{{ $classes }}"
				   orders="{{ $orders }}"
				   modes="{{ $modes }}"
				   change-types="{{ $changeTypes }}"
				   language="{{ $presetLanguage or "" }}">
	</alg-form-form> --}}

@stop
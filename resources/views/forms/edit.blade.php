@extends('layout', ['title' => "Edit {$form->surfaceForm} ({$form->language->name})"])

@section('content')

	<div class="heading">
		<h1 class="title">Edit a form</h1>
	</div>
	<br />

	<alg-form-form method="PATCH"
				   action="/forms/{{ $form->id }}"
				   languages="{{ $languages }}"
				   args="{{ $arguments }}"
				   classes="{{ $classes }}"
				   orders="{{ $orders }}"
				   modes="{{ $modes }}"
				   change-types="{{ $changeTypes }}"
				   model="{{ $form }}">
	</alg-form-form>

@stop
@extends('layout', ['title' => "Edit {$language->name}"])

@section('content')

	<div class="heading">
		<h1 class="title">Edit a Language</h1>
	</div>
	<br />

	<alg-language-form method="PATCH"
					   action="/languages/{{ $language->id }}"
					   languages="{{ $parents }}"
					   groups="{{ $groups }}"
					   language="{{ $language }}">
	</alg-language-form>

@stop
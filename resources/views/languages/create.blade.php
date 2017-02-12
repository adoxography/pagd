@extends('layout', ['title' => 'Add a language'])

@section('content')

	<div class="heading">
		<h1 class="title">Add a Language</h1>
	</div>
	<br />

	<alg-language-form method="POST"
					   action="/languages"
					   languages="{{ $parents }}"
					   groups="{{ $groups }}"
					   parent="{{ $presetParent or "" }}">
	</alg-language-form>

@stop
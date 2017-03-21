@extends('layout', ['title' => "Edit $source->short"])

@section('content')
	<div class="heading">
		<h1 class="title">Edit a Source</h1>
	</div>
	<br />

	<alg-source-form method="PATCH" action="/sources/{{ $source->id }}" source="{{ $source }}"></alg-source-form>

@endsection
@extends('layout', ['title' => 'Edit '.($item->abv ? $item->abv : $item->name)])

@section('content')

	<div class="heading">
		<h1 class="title">Edit a {{ $item->singular }}</h1>
	</div>
	<br />

	@component('components.form', ['method' => 'PATCH', 'class' => 'box', 'url' => '/'.strtolower($item->plural)."/{$item->id}"])
		@include('closed.partials.form')
	@endcomponent

	@include('errors.list')

@endsection
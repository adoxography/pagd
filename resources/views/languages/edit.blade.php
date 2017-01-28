@extends('layout', ['title' => "Edit {$language->name}"])

@section('content')

	<div class="heading">
		<h1 class="title">Edit a Language</h1>
	</div>
	<br />

	@component('components.form', ['method' => 'PATCH', 'class' => 'box', 'url' => '/languages/'.$language->id])
		@include('languages.partials.form')
	@endcomponent

	@include('errors.list')

@stop
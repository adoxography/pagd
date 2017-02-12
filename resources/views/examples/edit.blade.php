@extends('layout', ['title' => "Edit {$example->name} ({$example->language->name})"])

@section('content')

	<div class="heading">
		<h1 class="title">Edit an example</h1>
	</div>
	<br />
	
	@component('components.form', ['method' => 'PATCH', 'class' => 'box', 'url' => "/examples/{$example->id}"])
		@include('examples.partials.form')
	@endcomponent

	@include('errors.list')

@stop
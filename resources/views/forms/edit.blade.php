@extends('layout', ['title' => "Edit {$form->surfaceForm} ({$form->language->name})"])

@section('content')

	<div class="heading">
		<h1 class="title">Edit a form</h1>
	</div>
	<br />

	<div id="root">
		@component('components.form', ['method' => 'PATCH', 'url' => '/forms/'.$form->id, 'class' => 'box'])
			@include('forms.partials.form')
		@endcomponent
	</div>

	@include('errors.list')
@stop
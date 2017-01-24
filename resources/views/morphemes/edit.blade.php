@extends('layout', ['title' => "Edit {$morpheme->name} ({$morpheme->language->name})"])

@section('content')
	<div class="heading">
		<h1 class="title">Edit a Morpheme</h1>
	</div>
	<br />
	
	<div id="root">
		@component('components.form', ['method' => 'PATCH', 'url' => '/morphemes/'.$morpheme->id, 'class' => 'box'])
			@include('morphemes.partials.form')
		@endcomponent
	</div>

	@include('errors.list')
@stop
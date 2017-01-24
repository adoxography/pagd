@extends('layout')

@section('content')
	<div class="heading">
		<h1 class="title">Add a Morpheme</h1>
	</div>
	<br />
	
	<div id="root">
		@component('components.form', ['url' => '/morphemes', 'class' => 'box'])
			@include('morphemes.partials.form')
		@endcomponent
	</div>

	@include('errors.list')
@stop
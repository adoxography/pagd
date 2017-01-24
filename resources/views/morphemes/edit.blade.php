@extends('layout')

@section('content')
	<div class="heading">
		<h1 class="title">Edit a Morpheme</h1>
	</div>
	<br />
	
	<div id="root">
		@component('components.form', ['method' => 'PATCH', 'url' => '/morphemes/'.$morpheme->id, 'class' => 'inputForm'])
			@include('morphemes.partials.form')
		@endcomponent
	</div>

	@include('errors.list')
@stop
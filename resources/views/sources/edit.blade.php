@extends('layout')

@section('content')
	<div class="heading">
		<h1 class="title">Edit a Source</h1>
	</div>
	<br />

	@component('components.form', ['method' => 'PATCH', 'class' => 'box', 'url' => '/sources/'.$source->id])
		@include('sources.partials.form')
	@endcomponent

	@include('errors.list')
@endsection
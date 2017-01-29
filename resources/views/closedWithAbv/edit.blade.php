@extends('layout', ['title' => "Edit {$item->abv}"])

@section('content')

	<div class="heading">
		<h1 class="title">Edit a {{ $modelSG }}</h1>
	</div>
	<br />

	@component('components.form', ['method' => 'PATCH', 'class' => 'box', 'url' => "/$modelPL/{$item->id}"])
		@include('closedWithAbv.partials.form')
	@endcomponent

	@include('errors.list')

@endsection
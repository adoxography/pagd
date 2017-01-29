@extends('layout', ['title' => $item->abv])

@section('content')
	<div class="heading">
		<h1 class="title">{{ $modelSG }} Details</h1>
	</div>
	<br />

	@component('components.model', ['header' => $item->abv, 'uri' => "/$modelPL/{$item->id}"])
		<div class="content">
			@component('components.model.field', ['label' => 'Full name'])
				{{ $item->name }}
			@endcomponent

			@if($item->description)
				@component('components.model.field', ['label' => 'Description'])
					{{ $item->description }}
				@endcomponent
			@endif
		</div>
	@endcomponent

@stop
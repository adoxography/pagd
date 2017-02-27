@extends('layout', ['title' => ($item->abv ? $item->abv : $item->name)])

@section('content')
	<div class="heading">
		<h1 class="title">{{ $item->singular }} Details</h1>
	</div>
	<br />

	@component('components.model', ['uri' => '/'.strtolower($item->plural)."/{$item->id}"])
		@slot('header')
			{{ $item->abv or $item->name }}
		@endslot
		<model-tab name="Basic Details" selected="true">
			@if($item->abv)
				@component('components.model.field', ['label' => 'Full name'])
					{{ $item->name }}
				@endcomponent
			@endif

			@if($item->description)
				@component('components.model.field', ['label' => 'Description'])
					{{ $item->description }}
				@endcomponent
			@endif
		</model-tab>

		<model-tab name="Found in">
			@if($item->languages)
				@component('components.model.field', ['label' => 'Languages'])
					<ul>
						@foreach($item->languages as $language)
							<li><a href="/languages/{{ $language->id }}">{{ $language->name }}</a></li>
						@endforeach
					</ul>
				@endcomponent
			@endif

			@if($item->morphemes) 
				@component('components.model.field', ['label' => 'Morphemes'])
					<ul>
						@foreach($item->morphemes as $morpheme)
							<li><a href="/morphemes/{{ $morpheme->id }}">{{ $morpheme->name }}</a></li>
						@endforeach
					</ul>
				@endcomponent
			@endif
		</model-tab>
	@endcomponent

@stop
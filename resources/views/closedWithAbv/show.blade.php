@extends('layout', ['title' => $item->abv])

@section('content')
	<div class="heading">
		<h1 class="title">{{ $modelSG }} Details</h1>
	</div>
	<br />

	@component('components.model', ['header' => $item->abv, 'uri' => "/$modelPL/{$item->id}"])
		<model-tab name="Basic Details" selected="true">
			@component('components.model.field', ['label' => 'Full name'])
				{{ $item->name }}
			@endcomponent

			@if($item->description)
				@component('components.model.field', ['label' => 'Description'])
					{{ $item->description }}
				@endcomponent
			@endif
		</model-tab>

		@if(count($foundIns) > 0) 
			<model-tab name="Found in">
				@component('components.model.field', ['label' => 'Morphemes'])
					<ul>
						@foreach($foundIns as $foundIn)
							<li><a href="/morphemes/{{ $foundIn->id }}">{{ $foundIn->name }}</a></li>
						@endforeach
					</ul>
				@endcomponent
			</model-tab>
		@endif
	@endcomponent

@stop
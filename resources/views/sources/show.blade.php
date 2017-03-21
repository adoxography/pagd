@extends('layout')

@section('content')
	<div id="root">
		<div class="heading">
			<h1 class="title">Source Details</h1>
		</div>
		<br />

		@component('components.model', ['header' => $source->short, 'uri' => "/sources/{$source->id}"])
			<model-tab name="Basic Details" selected="true">
				@component('components.model.field', ['label' => 'Full citation', 'width' => 'is-12'])
					{!! $source->long !!}
				@endcomponent
				@if($source->url)
					@component('components.model.field', ['label' => 'URL', 'width' => 'is-12'])
						<a href="{{ $source->url }}">{{ $source->url }}</a>
					@endcomponent
				@endif
				@if($source->notes)
					@component('components.model.field', ['label' => 'Notes'])
						{!! $source->notes !!}
					@endcomponent
				@endif
			</model-tab>
			@if(count($source->forms) > 0)
				<model-tab name="Forms with citation">
					@component('components.model.field')
						<ul>
							@foreach($source->forms as $form)
								<li>
									<a href="/forms/{{ $form->id }}">{{ $form->surfaceForm }}</a> @if($form->pivot->extraInfo)({{ $form->pivot->extraInfo }})@endif
								</li>
							@endforeach
						</ul>
					@endcomponent
				</model-tab>
			@endif			
			@if(count($source->examples) > 0)
				<model-tab name="Examples with citation">
					@component('components.model.field')
						<ul>
							@foreach($source->examples as $example)
								<li><a href="/examples/{{ $example->id }}">{{ $example->name }}</a> ({{ $example->pivot->extraInfo }})</li>
							@endforeach
						</ul>
					@endcomponent
				</model-tab>
			@endif			
			@if(count($source->morphemes) > 0)
				<model-tab name="Morphemes with citation">
					@component('components.model.field')
						<ul>
							@foreach($source->morphemes as $morpheme)
								<li><a href="/morphemes/{{ $morpheme->id }}">{{ $morpheme->name }}</a> ({{ $morpheme->pivot->extraInfo }})</li>
							@endforeach
						</ul>
					@endcomponent
				</model-tab>
			@endif
		@endcomponent
	</div>
@endsection
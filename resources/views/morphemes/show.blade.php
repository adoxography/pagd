@extends('layout', ['title' => "{$morpheme->name} ({$morpheme->language->name})"])

@section('content')
	<div id="root">

		<div class="heading">
			<h1 class="title">Morpheme Details</h1>
		</div>
		<br />

		@component('components.model', ['header' => $morpheme->name, 'uri' => "/morphemes/{$morpheme->id}", 'history' => $morpheme->revisionHistory])

			<model-tab name="Basic Details" selected="true">
				<div class="column is-half" style="padding: 0;">
					<div class="columns is-multiline">

						{{-- Gloss field --}}
						@component('components.model.field', ['width' => 'is-half', 'label' => 'Gloss'])
							<a href="/glosses/{{ $morpheme->gloss_id }}"><span class="gloss">{{ $morpheme->gloss->abv }}</span> ({{ $morpheme->gloss->name }})</a>
						@endcomponent

						{{-- Slot field --}}
						@component('components.model.field', ['width' => 'is-half', 'label' => 'Slot'])
							<a href="/slots/{{ $morpheme->slot_id }}">{{ $morpheme->slot->abv }} ({{ $morpheme->slot->name }})</a>
						@endcomponent

						@component('components.model.field', ['label' => "Sources (Hover a source for the full citation)"])
							@if(count($morpheme->sources) > 0)
								<ol>
									@foreach($morpheme->sources as $source)
										<li title="{{ $source->long }}">{{ $source->short }} {{ $source->pivot->extraInfo }}</li>
									@endforeach
								</ol>
							@else
								None
							@endif
						@endcomponent
					</div>
				</div>
				<div class="column is-half" style="padding: 0;">
					<div class="columns is-multiline">
						@if($morpheme->allomorphyNotes)
							@component('components.model.field', ['width' => 'is-12', 'label' => 'Allomorphy Notes'])
								{!! $parser->setRestricted(true)->parse($morpheme->allomorphyNotes) !!}
							@endcomponent
						@endif

						{{-- Historical Notes --}}
						@component('components.model.field', ['width' => 'is-12', 'label' => 'Historical Notes'])
							<p>
								<em>Parent Morpheme: </em>
								@if($morpheme->parent)
									<a href="/morphemes/{{ $morpheme->parent_id }}">{{ $morpheme->parent->uniqueName() }}</a> (<a href="/languages/{{ $morpheme->parent->language_id }}">{{ $morpheme->parent->language->name }}</a>)
								@else
									Unknown/Unclear
								@endif
								@if($morpheme->historicalNotes)
									{!! $parser->setRestricted(true)->parse($morpheme->historicalNotes) !!}
								@endif
							</p>
						@endcomponent

						{{-- Comments --}}
						@if(Auth::user() && $morpheme->comments)
							@component('components.model.field', ['width' => 'is-12', 'label' => 'Private Comments'])
								@if($morpheme->comments)
									{!! $parser->setRestricted(true)->parse($morpheme->comments) !!}
								@endif
							@endcomponent
						@endif
					</div>
				</div>
			</model-tab>

			<model-tab name="Cognates">
				<div class="column">
				@component('components.model.field', ['label' => 'Cognates'])
					@include('components.model.cognates', ['list' => $cognates, 'current' => $morpheme, 'model' => 'morphemes'])
				@endcomponent
				</div>
			</model-tab>

			<model-tab name="Forms">
				@component('components.model.field', ['width' => 'is-half', 'label' => 'Forms that contain this morpheme'])
					@if($morpheme->forms)
						<ul>
							@foreach($morpheme->forms as $form)
								<li><a href="/forms/{{ $form->id }}">{{ $form->uniqueName() }}</a></li>
							@endforeach
						</ul>
					@else
						None
					@endif
				@endcomponent
			</model-tab>

		@endcomponent
	</div>

@stop
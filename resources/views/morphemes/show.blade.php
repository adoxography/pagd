@extends('layout', ['title' => "{$morpheme->name} ({$morpheme->language->name})"])

@section('content')
	<div id="root">

		<div class="heading">
			<h1 class="title">Morpheme Details</h1>
		</div>
		<br />

		<alg-message title="Hi Will">
			<p>This is the morpheme detail page. I styled it to follow the schema you wanted for the forms, with specific details on the left and comments running down the right. There's also a "forms that contain this morpheme tab," which may or may not be useful.</p>
			<br />
			<p>In the "title," you'll see what I've been calling the morpheme's "disambiguator" - it's a number that uniquely identifies that morpheme amongst a given language. I think I will set it up in the future so that only morphemes that have duplicates will display that number, but for now, it's been useful for debugging to be able to see it. Is having it appear in square brackets okay, or is there another standard that already exists for this sort of thing? (I know that some writing systems use numbers to represent particular sounds/letters, which is why I opted for square brackets instead of just putting it next to the morpheme.)</p>
			<br />
			<p>One thing that we never did add was a "translation" field for the morphemes. For a lot of the more structural morphemes, this is fine, but if we ever want to represent verb or noun stems, I'm thinking that we'll need a field for their translations, in addition to their gloss, no?</p>
		</alg-message>

		@component('components.model', ['uri' => "/morphemes/{$morpheme->id}"])
			@slot('header')
				<em>{{ $morpheme->name }}</em> [{{ $morpheme->disambiguator }}]
				<span style="margin-left: .5rem">
					(<a href="/languages/{{ $morpheme->language_id }}">{{ $morpheme->language->name }}</a>)
				</span>
			@endslot

			<model-tab name="Basic Details" selected="true">
				<div class="column is-half" style="padding: 0;">
					<div class="columns is-multiline">

						{{-- Gloss field --}}
						@component('components.model.field', ['width' => 'is-half', 'label' => 'Gloss'])
							<a href="/glosses/{{ $morpheme->gloss_id }}">{{ $morpheme->gloss->abv }}</a>
						@endcomponent

						{{-- Slot field --}}
						@component('components.model.field', ['width' => 'is-half', 'label' => 'Slot'])
							<a href="/slots/{{ $morpheme->slot_id }}">{{ $morpheme->slot->abv }}</a>
						@endcomponent

						@component('components.model.field', ['label' => "Sources (Hover a source for the full citation)"])
							@if(count($morpheme->sources) > 0)
								<ol>
									@foreach($morpheme->sources as $source)
										<li title="{{ $source->long }}">{{ $source->short }}</li>
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
									<a href="/morphemes/{{ $morpheme->parent_id }}">{{ $morpheme->parent->name }}</a> (<a href="/languages/{{ $morpheme->parent->language_id }}">{{ $morpheme->parent->language->name }}</a>)
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

			<model-tab name="Forms">
				@component('components.model.field', ['width' => 'is-half', 'label' => 'Forms that contain this morpheme'])
					@if($morpheme->forms)
						<ul>
							@foreach($morpheme->forms as $form)
								<li><a href="/forms/{{ $form->id }}">{{ $form->surfaceForm }}</a></li>
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
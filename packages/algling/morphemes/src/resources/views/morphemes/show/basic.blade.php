@extends('morph::morphemes.show')

@section('content')
	<div class="columns">
		<div class="column">
			<div class="columns">
				<div class="column">
					<div class="field">
						<span class="label">Gloss</span>
						{!! $morpheme->renderGlossWithDescription() !!}
					</div>
				</div>
				<div class="column">
					<div class="field">
						<span class="label">Slot</span>
						{!! $morpheme->slot->renderHTML() !!}
					</div>
				</div>
			</div>
			@if($morpheme->initialChanges->count() > 0)
				<div class="field">
					<span class="label">Initial change form{{ $morpheme->initialChanges->count() > 1 ? 's' : '' }}</span>
					<ul>
						@foreach($morpheme->initialChanges as $change)
							<li>{{ $change->change }}</li>
						@endforeach
					</ul>
				</div>
			@endif
		</div>
		<div class="column">
			@if($morpheme->allomorphyNotes)
				<div class="field">
					<span class="label">Allomorphy</span>
					{!! replaceTags($morpheme->allomorphyNotes, $morpheme->language_id) !!}
				</div>
			@endif
			@if($morpheme->parent || $morpheme->historicalNotes)
				<div class="field">
					<span class="label">Historical notes</span>
					@if($morpheme->parent)
						<em>Parent: </em>{!! $morpheme->parent->renderHTML() !!} ({!! $morpheme->parent->language->renderHTML() !!})
					@endif

					@if($morpheme->historicalNotes)
						{!! replaceTags($morpheme->historicalNotes, $morpheme->language_id) !!}
					@endif
				</div>
			@endif
			@if(Auth::user() && Auth::user()->permissions->canEdit && $morpheme->privateNotes)
				<div class="field">
					<span class="label">Private notes</span>
					{!! replaceTags($morpheme->privateNotes, $morpheme->language_id) !!}
				</div>
			@endif
		</div>
	</div>
	<div class="field">
		<span class="label">Sources</span>
		@include('components.model.sourcelist', ['sources' => $morpheme->sources])
	</div>
@endsection
@extends('phonemes.show')

@section('details')
	<div class="columns">
		<div class="column">

			@if($phoneme->ipa_name || $phoneme->ortho_name)
				<div class="field">
					@if($phoneme->ipa_name)
					<span class="is-one-line">
						<span class="label">IPA transcription:</span>
						{{ $phoneme->present()->transcription('ipa_name') }}
					</span>
					@endif

					@if($phoneme->ortho_name)
					<span class="is-one-line">
						<span class="label">Orthographic transcription:</span>
						{{ $phoneme->ortho_name }}
					</span>
					@endif
				</div>
			@endif

			<div class="field">
				@if($phoneme->type != 'Cluster')
					<span class="is-one-line">
						<span class="label">Type:</span>
						{{ $phoneme->type }}
					</span>
				@endif

				@include('phonemes.show.' . strtolower($phoneme->type))
			</div>

			<div class="field">
				<span class="label">Allophones</span>
				<ul>
					@foreach($phoneme->allophones as $allophone)
						<li>{{ $phoneme->present()->transcription }} → {{ $allophone->rule }}</li>
					@endforeach
				</ul>
			</div>
		</div>

		<div class="column">
			@if ($phoneme->isArchiphoneme)
				<div class="field">
					<span class="label">Description</span>
					{{ $phoneme->archiphonemeDescription }}
				</div>
			@endif

			@if($phoneme->phoneticNotes)
				<div class="field">
					<span class="label">Phonetic notes</span>
					{!! replaceTags($phoneme->phoneticNotes, $phoneme->language_id) !!}
				</div>
			@endif

			@if($phoneme->orthoNotes)
				<div class="field">
					<span class="label">Orthography notes</span>
					{!! replaceTags($phoneme->orthoNotes, $phoneme->language_id) !!}
				</div>
			@endif

			@if($phoneme->privateNotes && Auth::user() && Auth::user()->hasPermissionTo('add content'))
				<div class="field">
					<span class="label">Private notes</span>
					{!! replaceTags($phoneme->privateNotes, $phoneme->language_id) !!}
				</div>
			@endif
		</div>
	</div>
	<div class="field">
		<span class="label">Sources</span>
		@include('components.model.sourcelist', ['sources' => $phoneme->sources])
	</div>
@endsection
